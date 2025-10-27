import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const TITLE = "Empowering Communities: The Al Salam Charity Foundation's Fight Against Climate Change";
const EXCERPT = "In the face of climate change, communities across Uganda are grappling with severe challenges, particularly regarding water availability and agricultural sustainability. The Al Salam Charity Foundation stands as a beacon of hope, working tirelessly to mitigate these impacts and improve the lives of vulnerable populations.";
const CONTENT = `Author: Mbale Nuludine 
Founder: Alsalam Charity Foundation. 
Country: Uganda 

In the face of climate change, communities across Uganda are grappling with severe challenges, particularly regarding water availability and agricultural sustainability. The Al Salam Charity Foundation stands as a beacon of hope, working tirelessly to mitigate these impacts and improve the lives of vulnerable populations. Through innovative programs and community involvement, they are not just addressing immediate needs but also fostering long-term resilience.

The foundation was born from a heartfelt desire to uplift vulnerable communities, especially orphans, widows, and the impoverished in Uganda. Co-founders Mbale Nuludine and Mr. Ssebayiga Shafic were moved by the struggles of families lacking access to basic needs such as clean water, education, and proper shelter. Guided by Islamic values of compassion, they began their journey by supporting orphans and constructing mosques that doubled as community hubs. Over time, they expanded their mission to include water well construction, which has had a significant impact on community health and well-being.

Effective humanitarian work begins with understanding the community. Before launching any project, the foundation conducts needs assessments through consultations with local leaders and community members. This approach ensures that their initiatives are tailored to address the most pressing challenges, particularly in rural areas where access to clean water is critically limited.

Constructing water wells in rural Uganda comes with its set of challenges, including difficult terrain and fluctuating water tables exacerbated by climate change. The foundation collaborates with local engineers and engages the community throughout the process, from site selection to maintenance training. This inclusive approach ensures that wells are not only built but are sustainable, with community water committees established to oversee their upkeep.

Climate change has emerged as a formidable adversary for the communities served by the foundation. With longer droughts and unpredictable rainfall patterns, families that once thrived on small-scale farming now face dire struggles. The foundation integrates climate awareness and environmental education into its programs, empowering communities to understand and adapt to these changes.

To combat the effects of climate change, Al Salam Charity Foundation promotes sustainable practices in water management and agriculture. They encourage rainwater harvesting, water conservation, and the cultivation of drought-resistant crops. Tree planting initiatives around wells and mosques help protect water sources and enhance the environment, fostering a culture of resilience.

Collaboration with local elders and community leaders is integral to their approach. These individuals bring invaluable traditional knowledge about land and water resources, guiding the foundation in making informed decisions regarding well sites and agricultural practices. This fusion of modern techniques and traditional wisdom has been key to the success of their projects.

Sustainability remains a core focus of the foundation. After each water project, they establish community ownership through training and the formation of local management committees. Regular follow-ups and capacity-building initiatives empower farmers to adopt improved agricultural techniques, ensuring that communities can sustain progress independently.

Looking ahead, the foundation plans to expand its climate adaptation efforts. Upcoming projects include the introduction of solar-powered water systems, climate-smart agriculture training, and youth-led environmental campaigns. By fostering community green spaces and tree-planting drives, they aim to combat deforestation and soil erosion, strengthening their collective response to climate challenges.

The Al Salam Charity Foundation invites individuals, organizations, and donors to join their mission in addressing climate change and poverty in Uganda. Your support—whether through donations, volunteering, or partnerships—can create a lasting impact. With this, clean water can be accessible, restoring hope, and protecting the environment for future generations.

Through this journey, the co-founders have witnessed firsthand how climate change profoundly affects vulnerable populations. The joy of seeing children smile when they drink clean water for the first time serves as a powerful reminder of the importance of their work. This experience has deepened their faith in humanity and the potential of collective action to drive real, lasting change.`;

serve(async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: existing, error: selectError } = await supabase
      .from('articles')
      .select('id, title, excerpt')
      .eq('title', TITLE)
      .maybeSingle();

    if (selectError) {
      console.error('Select error:', selectError);
      throw selectError;
    }

    if (existing) {
      console.log('Article already exists with id:', existing.id);
      return new Response(
        JSON.stringify({ id: existing.id, created: false, title: existing.title, excerpt: existing.excerpt }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const today = new Date().toISOString().substring(0, 10);

    const insertPayload = {
      title: TITLE,
      excerpt: EXCERPT,
      content: CONTENT,
      category: 'climate action',
      date: today,
      image_url: '/lovable-uploads/alsalam-uganda.jpg'
    };

    const { data: inserted, error: insertError } = await supabase
      .from('articles')
      .insert(insertPayload)
      .select('id, title, excerpt')
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      throw insertError;
    }

    console.log('Inserted article with id:', inserted.id);

    return new Response(
      JSON.stringify({ id: inserted.id, created: true, title: inserted.title, excerpt: inserted.excerpt }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error: any) {
    console.error('ensure-alsalam-article error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});
