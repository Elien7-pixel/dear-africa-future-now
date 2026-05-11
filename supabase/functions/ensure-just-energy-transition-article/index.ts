import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TITLE = "National Climate Action and Just Energy Transition Campaign Launched in South Africa";
const EXCERPT = "South Africa's energy transition to a cleaner, more inclusive and climate-resilient future depends on coordinated collective and individual action across society. The United Nations in South Africa, the Joint SDG Fund and the Presidential Climate Commission have launched a national mobilisation and awareness campaign that translates this commitment into everyday actions for the wellbeing of people and the planet.";

const CONTENT = `<p><strong>Pretoria</strong> – South Africa's energy transition to a cleaner, more inclusive and climate-resilient future depends on coordinated collective and individual action across society – from government and industry to communities and households. As part of this broader national effort, the United Nations in South Africa, together with the Joint Sustainable Development Goals (SDG) Fund and in partnership with the Presidential Climate Commission (PCC), has launched a national Climate Action and Just Energy Access and Transition Campaign.</p>

<p>The campaign complements ongoing structural and policy measures by encouraging practical, everyday actions that individuals and communities can take alongside the wider interventions being advanced by government, business, and social partners. It reinforces that climate action is a shared responsibility, with meaningful contributions required at institutional, community and household levels.</p>

<p>A central element of the campaign is the rollout of digital, static, and solar-powered billboards across high-visibility public spaces in key cities and settlements, implemented in partnership with JCDecaux, an outdoor advertising company. These billboards translate sustainability commitments into clear, relatable visuals and messages, ensuring that climate action is visible, accessible, and actionable in daily life.</p>

<blockquote><p>"South Africa's just energy transition will not be achieved by policy alone. It will be shaped by the choices people make every day in their homes, workplaces, and communities," said the UN Resident Coordinator in South Africa, Nelson Muffuh.</p></blockquote>

<blockquote><p>"This campaign is about placing people at the centre of climate action—showing that every action, however small, contributes to building a cleaner, more resilient, and more inclusive future for the country. The UN is proud to support this national effort alongside the Presidential Climate Commission and our partners," Mr Muffuh added.</p></blockquote>

<blockquote><p>"Critical to localised climate action and simplifying the just transition is the need to keep society engaged and inspired. We believe that global commitments on the climate emergency must translate into a domestic collective effort and a call to go back to the basics—that is why this campaign is more than just about being out there but about demonstrating that addressing climate change is everybody's business," said Mr Dipak Patel, Deputy Chairperson, Presidential Climate Commission.</p></blockquote>

<p>Anchored in the message <strong>"Everyone has a role. Every climate action counts. #ActNow,"</strong> the campaign promotes twelve simple actions that individuals can take in their daily lives. These include saving energy, recycling, supporting local businesses, reducing fossil fuel use, choosing cleaner energy options, avoiding illegal electricity connections, and supporting women-owned enterprises. These actions complement the broader structural interventions being advanced by government, industry and social partners to reduce emissions, improve well-being, and strengthen local economies.</p>

<p>The use of solar-powered billboards further reinforces the campaign's intent by demonstrating clean energy solutions in practice while extending reach into communities where access to infrastructure may be limited.</p>

<p>This initiative is supported through the Joint SDG Fund as part of the UN's broader efforts to advance South Africa's Just Energy Transition Implementation Plan, with the Presidential Climate Commission providing critical partnership, guidance, and engagement at the national level. It aligns with South Africa's climate commitments, including the Climate Change Act of 2024 and the country's Nationally Determined Contributions, and helps strengthen public action and awareness, deepen social dialogue, and enable inclusive participation across society.</p>

<p>Further information on the campaign and the twelve actions is available here: <a href="https://southafrica.un.org/en/312465-just-energy-access-and-transition-campaign" target="_blank" rel="noopener noreferrer">southafrica.un.org/en/312465-just-energy-access-and-transition-campaign</a></p>

<p>Campaign materials, including billboard designs and public assets, can be accessed here: <a href="https://trello.com/b/P0mbJemX/a-just-energy-transition-for-all" target="_blank" rel="noopener noreferrer">trello.com/b/P0mbJemX/a-just-energy-transition-for-all</a></p>

<p>We encourage everyone in South Africa to join this shared national effort and recognise how everyday actions build a cleaner, safer, and more inclusive future.</p>

<p><em>ISSUED BY THE UNITED NATIONS IN SOUTH AFRICA AND THE PRESIDENTIAL CLIMATE COMMISSION</em></p>

<hr />

<p><strong>For media commentary:</strong></p>

<p>Blessing Manale, Executive Communications, Presidential Climate Commission<br />
Cell: 073 036 5381 &middot; Email: <a href="mailto:blessing@climatecommission.org.za">blessing@climatecommission.org.za</a></p>

<p>Nombulelo Malinga, Communications Consultant, United Nations in South Africa<br />
Cell: 064 543 1277 &middot; Email: <a href="mailto:nombulelomalinga@gmail.com">nombulelomalinga@gmail.com</a></p>`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: existing } = await supabaseClient
      .from('articles')
      .select('id')
      .eq('title', TITLE)
      .maybeSingle()

    if (existing) {
      const { error: updateError } = await supabaseClient
        .from('articles')
        .update({
          excerpt: EXCERPT,
          content: CONTENT,
          category: 'Climate Action',
          image_url: '/lovable-uploads/just-energy-transition-act-now.jpg'
        })
        .eq('id', existing.id)

      if (updateError) {
        console.error('Error updating article:', updateError)
      }

      return new Response(
        JSON.stringify({ id: existing.id, created: false, title: TITLE, excerpt: EXCERPT }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const articleData = {
      title: TITLE,
      excerpt: EXCERPT,
      content: CONTENT,
      category: 'Climate Action',
      date: new Date().toISOString().split('T')[0],
      image_url: '/lovable-uploads/just-energy-transition-act-now.jpg'
    }

    const { data, error } = await supabaseClient
      .from('articles')
      .insert(articleData)
      .select()
      .single()

    if (error) {
      console.error('Error creating article:', error)
      throw error
    }

    console.log('Article created successfully:', data.id)
    return new Response(
      JSON.stringify({ ...data, created: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
