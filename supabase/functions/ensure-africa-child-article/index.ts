import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Check if article already exists
    const { data: existing } = await supabaseClient
      .from('articles')
      .select('id')
      .eq('title', 'Growing Change Through Soil')
      .single()

    if (existing) {
      console.log('Article already exists')
      return new Response(
        JSON.stringify({ id: existing.id, created: false }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create the article
    const articleData = {
      title: 'Growing Change Through Soil',
      excerpt: 'For over a decade, I worked as a health and safety professional for companies like Eskom and DHL in South Africa. In the year 2020, the COVID-19 pandemic altered my perspective on life and the environment, teaching me a fundamental truth: soil is more important than anything else in the world.',
      content: `For over a decade, I worked as a health and safety professional for companies like Eskom and DHL in South Africa. In the year 2020, the COVID-19 pandemic altered my perspective on life and the environment, teaching me a fundamental truth: soil is more important than anything else in the world. After all, we eat from the soil.

This revelation inspired me to start my own consulting company, focusing on Safety, Health, and Environment (SHE) training. However, my journey took an unexpected turn when I decided to plant vegetables using bags and tyres while treating the soil to prepare it for cultivation. I began harvesting potatoes from these unconventional gardens, sharing my passion with the community. I also cultivated sweet potatoes and practiced crop rotation, emphasising the importance of maintaining healthy soil.

I approached community members, and public schools, offering to clean and plant in their gardens while conscientizing them to practice sustainable agriculture, and they granted me permission. Today, our community enjoys fresh basil and other herbs from our collective gardens. My passion for gardening has driven me to help others understand the significance of soil and sustainable practices.

In our technology-driven world, many young people perceive agriculture as an outdated pursuit. They often overlook the fact that the vegetables they buy in stores come from the soil. My mission is to plant the seed in their minds that respect for the soil is crucial because it nourishes us. I emphasise seed banking, encouraging children to grow their own organic vegetables without GMOs.

Rabbit farming is another avenue I've explored. Rabbit meat, categorized as white meat, is a healthy alternative, particularly beneficial for those with heart conditions. Rabbit manure is rich in nutrients and makes an excellent organic fertilizer, while rabbit urine serves as an eco-friendly liquid fertilizer. By training the community about the benefits of rabbits—not as pets but as valuable livestock—I aim to change perceptions and promote this sustainable practice.

Indigenous traditional practices are rooted in a profound understanding of ecological systems, promoting sustainable resource use and biodiversity. We must focus on sustainable agricultural systems, effective water management, and climate resilience to address climate solutions.

Planting trees is essential, but it's crucial to choose wisely. I advocate for planting trees that can heal and nourish our people, such as Moringa, known as the "tree of life." Moringa provides essential nutrients, while potatoes are a source of hydration and vitamins—knowledge that many people lack. Legumes also offer a rich source of plant-based protein, iron, and magnesium.

Despite my efforts, challenges persist. Some school administrators, that we reach out to, fail to recognize the importance of school gardens, and without proper motivation, children may neglect the gardens. Watering is another issue; maintaining a good relationship with School Governing Bodies (SGB) is crucial for success. Unfortunately, some school principals prioritize purchasing over planting, undermining the power of gardening. Resources, particularly access to water in rural areas, are limited, making it difficult for communities to thrive. Solutions like boreholes or irrigation systems are essential but often financially out of reach.

I encourage aspiring farmers to utilise their backyards for planting and to exchange seeds with neighbours. Start small, be patient, and educate yourself on sustainable practices. Teamwork is paramount; we cannot rely solely on governmental support for food security. No family should go to bed hungry. We must cultivate a direct path from garden to table.

Use what you have and make it work. Don't seek out resources you lack; instead, focus on maximizing your garden's potential. Embrace innovation and adapt to change, as you never know what opportunities lie ahead. Remember, seeds are our currency. Share and preserve them like our ancestors did. Let's practice agroecology and ensure healthy, clean food for all. Together, we can grow food to protect our planet through smart and digital farming practices.

Author: Danisa Dan Nodu Qasha
Founder: Africa Child Enterprise
Eastern Cape, South Africa`,
      category: 'Climate Action',
      date: new Date().toISOString().split('T')[0],
      image_url: '/lovable-uploads/africa-child-south-africa.jpg'
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
