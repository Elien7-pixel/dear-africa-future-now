import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const TITLE = 'The Sweet Buzz: My Journey as a Bee Farmer in Zambia';
const EXCERPT = "As a bee farmer in Zambia, I've witnessed firsthand how climate change is affecting our delicate ecosystem and the livelihoods of many. My journey into bee farming began with a deep appreciation for nature, inspired by my mother, a forester and ecologist.";
const CONTENT = `Author: Siphiwe Lukama
Founder: Kasenga Agro Solutions
Zambia

As a bee farmer in Zambia, I've witnessed firsthand how climate change is affecting our delicate ecosystem and the livelihoods of many. My journey into bee farming began with a deep appreciation for nature, inspired by my mother, a forester and ecologist. She instilled in me a love for trees and conservation, which shaped my desire to create meaningful work that also uplifts women in my community.

Climate change has significantly disrupted my bee farming practices. I've noticed that altered flowering seasons have reduced the availability of nectar and pollen, resulting in lower honey yields and weaker bee colonies. In 2023 and 2024, Zambia faced severe droughts that impacted honey production nationwide, even in areas known for their lush forests, like Northwestern Zambia. These low honey harvests have caused prices to soar, affecting both farmers and consumers alike.

As I look to the future, I foresee even greater challenges. Increased bee mortality, reduced honey production, and heightened vulnerability to pests and diseases threaten not just my business but the sustainability of honey farming for many of my fellow beekeepers. If climate conditions continue to change, I worry about the long-term viability of our industry.

Biodiversity is crucial for both the health of bee populations and the overall ecosystem. It provides bees with diverse sources of nectar and pollen, which strengthens their resilience against diseases and maintains ecological balance. I firmly believe that bees need good biodiversity, and in turn, biodiversity needs bees.

To combat these challenges, I've implemented several adaptation strategies. I have introduced reforestation efforts by planting bee-friendly trees and promoted organic beekeeping. I also train community members in climate-smart agriculture to help protect our bees from environmental stress.

My bee farming contributes to Zambia's blue economy by supporting wetlands and river ecosystems through pollination. My facility is just a few metres from a stream that flows into the Chongwe River, one of the most important water bodies in Zambia. By preserving vegetation cover, my work helps reduce erosion and maintain freshwater resources.

I practice chemical-free beekeeping and encourage tree planting while integrating agroforestry to preserve habitats that sustain freshwater ecosystems. Collaborating with local farmers, fisheries, and conservation groups, I aim to create sustainable livelihoods while protecting our natural resources.

My bee farming has created alternative income opportunities for rural women and youth, reducing poverty and discouraging destructive practices like charcoal burning. I educate my community about the importance of bees through training workshops and awareness campaigns, highlighting their essential role in pollination and food security.

The economic benefits of my bee farming venture are significant. Opportunities have arisen from the sale of honey, beeswax, and propolis, along with value-added enterprises like candle making and soap production. These initiatives generate income and promote small business growth in our community.

While my work empowers women and marginalized groups by providing them with skills, equipment, and market access, I still face significant challenges. Climate change impacts limited technical knowledge in rural areas, and barriers to market access—such as poor road infrastructure—are ongoing hurdles.

Looking ahead, I hope to expand bee farming into more rural communities, build a strong organic honey brand, and integrate conservation efforts that empower women and youth. I also aspire to penetrate international export markets in the EU and China.

Through my dedication and innovative practices, I strive to demonstrate resilience in the face of climate change while contributing to biodiversity and economic sustainability. My journey as a bee farmer is a powerful reminder that, even amid adversity, hope and action can create a sweeter future for all.`;

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check if article already exists
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
      image_url: '/lovable-uploads/bee-farmer-zambia.jpg'
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
    console.error('ensure-bee-farmer-article error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});