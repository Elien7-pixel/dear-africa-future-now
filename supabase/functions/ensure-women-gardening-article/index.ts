import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ARTICLE_TITLE = "Women Leading the Charge in Community Gardening and Healthy Eating";
const ARTICLE_EXCERPT = "In Malawi, women are stepping to the forefront of community health and sustainability through gardening initiatives that educate and empower.";
const ARTICLE_CATEGORY = "Food Sovereignty";
const ARTICLE_IMAGE_URL = "/lovable-uploads/women-community-gardening-malawi.jpg";

const ARTICLE_CONTENT = `
<p><strong>Author:</strong> Mary Madalo Harawa</p>
<p><strong>Location:</strong> Kambwiya Village, Rumphi District, Mzuzu, Malawi</p>

<p>In Malawi, women are stepping to the forefront of community health and sustainability through gardening initiatives that educate and empower. My journey began as a primary school teacher in 2009, and over the years, I have seen firsthand the profound impact that gardening and healthy eating can have on communities, especially among our youth. When I joined Slow Food Malawi, I became part of a project aimed at creating 100 thousand gardens across Africa, with a focus on education and local agricultural practices. Northern Malawi, particularly the Rumphi district, was selected as a pilot area, and I had the privilege of being a patron at Lura Primary School. This opportunity allowed me to bridge the gap between agricultural education and practical application within our community.</p>

<p>Working closely with the parents of my school learners, we successfully convinced them to share local seeds for our school gardens. This collaborative effort not only supported our gardening initiatives but also fostered a sense of community ownership and pride. Back then, I had limited knowledge about manure making; we relied primarily on compost. However, I encouraged the children to take responsibility for the gardens, with the added incentive of managing any cash earned from sales. This involvement drew attention from their parents, creating a unified team working towards a common goal. The positive impact of our school garden was evident. Not only did it contribute to the school feeding program, ensuring that children received nutritious meals, but it also highlighted the importance of healthy eating. In 2016, after successfully leading this initiative, I was promoted to principal of Mphitapansi Primary School, where we continued to champion Slow Food principles.</p>

<p>In 2022, my work caught the attention of journalists from Germany who came to research Slow Food activities. They found me actively engaged with schoolchildren and my community, interviewing us about our successes in gardening and food initiatives. The children and community members shared their experiences, and afterwards, the journalists informed me that they would write an article to spotlight our story as part of a competition. Later, I was invited to Berlin, in June this year, for the Constructive Word Awards, an incredible honour that showcased our dedication to sustainable practices.</p>

<p>Though I had not received formal training in manure making, I later accessed a certificate in Dynamic Leadership and manure making through the Our Bodies Our Lives (OBOL) program, supported by Just Associates Organisation (JASS). This knowledge empowered me to help my community and school gardens thrive. Slow Food Ecology emphasises farming in harmony with nature—eschewing harmful pesticides and fertilisers—and allows plants to grow as they were meant to, preserving their original taste and appearance. During the COVID-19 pandemic, I continued to teach principles of Slow Food within my community, introducing more than 30 school gardens that significantly provided sources of food and helped families afford school fees. These efforts ensured that when schools reopened, the children returned in good health.</p>

<p>The principles of Slow Food are essential for promoting healthier lifestyles and sustainable development. Fast food, often seen as a convenient option, leads to numerous health challenges and exacerbates diseases. I firmly believe that healthy children perform better in their studies, and healthy communities propel development forward. As women, we have the responsibility and voice to advocate against harmful fast food that disrupts our well-being.</p>

<p>When health issues arise, it's often women who bear the burden of care and loss, while men may remain focused on business. This dynamic underscores the need for women to lead the way in promoting healthy eating habits within families. Our lives depend on the quality of food we consume; every meal should possess three original qualities: taste, smell, and appearance. Influenced by observations of how women around the world ensure nutritious meals for their families, I am committed to promoting locally available, organically grown food. Life is precious, and we must cherish it by choosing clean, healthy options.</p>

<p>As the "Queen of the Garden," I encourage everyone to start now—embracing the power of community gardening and advocating for healthy eating practices. Together, we can cultivate our gardens, nurture our health, and inspire the next generation to appreciate the beauty and benefits of nature in our food systems. Let us rise as a united force, fostering health, well-being, and sustainability in our communities.</p>
`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Checking if women gardening article exists...');

    // Check if article already exists by title
    const { data: existingArticle, error: checkError } = await supabase
      .from('articles')
      .select('id')
      .eq('title', ARTICLE_TITLE)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking for existing article:', checkError);
      throw checkError;
    }

    if (existingArticle) {
      console.log('Women gardening article already exists');
      return new Response(
        JSON.stringify({ 
          message: 'Article already exists', 
          created: false,
          articleId: existingArticle.id 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Creating women gardening article...');

    // Insert the article (let Supabase auto-generate the UUID)
    const { data: newArticle, error: insertError } = await supabase
      .from('articles')
      .insert({
        title: ARTICLE_TITLE,
        excerpt: ARTICLE_EXCERPT,
        content: ARTICLE_CONTENT,
        category: ARTICLE_CATEGORY,
        image_url: ARTICLE_IMAGE_URL,
        likes: 0
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting article:', insertError);
      throw insertError;
    }

    console.log('Women gardening article created successfully:', newArticle.id);

    return new Response(
      JSON.stringify({ 
        message: 'Article created successfully', 
        created: true,
        articleId: newArticle.id,
        title: ARTICLE_TITLE
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ensure-women-gardening-article function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
