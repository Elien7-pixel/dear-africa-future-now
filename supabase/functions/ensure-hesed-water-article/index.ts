import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ARTICLE_TITLE = "The Vital Role of Water: Empowering African Communities Through Sustainability";
const ARTICLE_EXCERPT = "Water is often referred to as the essence of life, a resource that is not only fundamental to human survival but also a key driver of economic development.";
const ARTICLE_CATEGORY = "Sustainability";
const ARTICLE_IMAGE_URL = "/lovable-uploads/hesed-africa-water.jpg";

const ARTICLE_CONTENT = `
<p><strong>Article by:</strong> Munya Touch</p>

<p>Water is often referred to as the essence of life, a resource that is not only fundamental to human survival but also a key driver of economic development. In South Africa, as well as across the African continent, access to clean and sustainable water sources remains a pressing issue. This challenge is at the heart of the Hesed Africa Foundation's mission, which is committed to bridging the water access gap through innovative solutions.</p>

<p>Hesed Consulting is a Pan-African organisation that focuses on leadership development, youth empowerment, and sustainable initiatives. Partnering closely with the Hesed Africa Foundation, they strive to create impactful platforms that unite leaders, institutions, and communities across the continent. Their aim is to drive meaningful change and measurable results in various sectors, particularly in addressing critical issues like water access and conservation.</p>

<p>Their key initiatives include the Africa Career Summit and Awards and the Africa Royal Council Week. The Africa Career Summit and Awards is Hesed Consulting's flagship annual event and is set to take place from May 29–30, 2026, in Johannesburg. This summit focuses on empowering women and youth by providing access to career development resources, leadership training, and mentorship. The proceeds from this event directly support the Hesed Africa Foundation's Water Saving Project - AquaSave, further highlighting the interconnectedness of career growth and sustainable community development.</p>

<p>With over 900 delegates hosted in the previous years, the summit has become a cornerstone for professionals and policymakers discussing Africa's future. Notable speakers have included prominent figures like Prof. PLO Lumumba and Dr. Phumzile Mlambo-Ngcuka, making it an essential gathering for networking and professional development.</p>

<p>The Africa Royal Council Week is scheduled for November 2026 in Durban, aiming to engage traditional leaders, policymakers, and development partners in serious discussions around the continent's most pressing challenges. This initiative focuses on youth empowerment, economic transformation, and collaboration among royal households and private sectors. As with the Africa Career Summit, proceeds from this event will also support the Hesed Africa Foundation's AquaSave.</p>

<p>The centrepiece of the Hesed Africa Foundation's initiatives is the AquaSave Water Saving Project. This sustainability program addresses the urgent need for water conservation while helping households to reduce their monthly bills significantly. This dual-purpose approach ensures that families have access to the resources they need, while simultaneously conserving a vital resource.</p>

<p>Participating households can achieve a remarkable 20–60% reduction in water consumption through sustainable practices. Additionally, residents benefit from tax rebates and improved property values by adopting eco-friendly measures. The initiative also includes free professional water assessments, encouraging families to engage in more sustainable practices.</p>

<p>Donations made to the Hesed Africa Foundation help fund critical initiatives that address water access and conservation, as the importance of water cannot be overstated—it is a vital resource that, when conserved and managed well, can lead to empowerment, economic growth, and a brighter future for African communities.</p>

<p>For more information about the AquaSave project, please visit: <a href="https://hesedafricafoundation.co.za" target="_blank" rel="noopener noreferrer">Hesed Africa Foundation - AquaSave</a></p>

<p><strong>Connect with Hesed Consulting:</strong></p>
<ul>
  <li>Africa Career Summit: <a href="https://www.africacareersummit.org" target="_blank" rel="noopener noreferrer">www.africacareersummit.org</a></li>
  <li>Hesed Africa Foundation (South Africa): <a href="https://hesedafricafoundation.co.za" target="_blank" rel="noopener noreferrer">hesedafricafoundation.co.za</a></li>
  <li>Hesed Africa Foundation (USA): <a href="https://hesedafricafoundation.com" target="_blank" rel="noopener noreferrer">hesedafricafoundation.com</a></li>
</ul>
`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Checking if Hesed water article exists...');

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
      console.log('Hesed water article already exists');
      return new Response(
        JSON.stringify({ 
          message: 'Article already exists', 
          created: false,
          articleId: existingArticle.id 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Creating Hesed water article...');

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

    console.log('Hesed water article created successfully:', newArticle.id);

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
    console.error('Error in ensure-hesed-water-article function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
