import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ARTICLE_ID = 'mens-mental-health-nigeria';
const ARTICLE_TITLE = 'Navigating Emotional Storms: Men, Mental Health, and Climate Challenges in Nigeria';
const ARTICLE_EXCERPT = 'A broadcast journalist explores the intersection of men\'s mental health and climate change in Nigeria, advocating for breaking harmful cultural expectations and building support systems for vulnerable men.';
const ARTICLE_CATEGORY = 'Mental Health & Climate';
const ARTICLE_IMAGE_URL = '/lovable-uploads/mens-mental-health-nigeria.jpg';
const ARTICLE_CONTENT = `<p><strong>Author:</strong> Sukurat Yusuf<br/><strong>Profession:</strong> A Broadcast Journalist, Voice-over Artist, News Presenter, On-Air Personality, CNN Academy Fellow 2025 and Entrepreneur.<br/><strong>Country:</strong> Nigeria</p>

<p>My advocacy for men's mental health began from personal experiences and observations. Growing up, I watched my dad struggle silently under the weight of providing for his family on a meagre salary. Even when things were tough, he never spoke up because society teaches men not to cry, complain, or show weakness. This same pattern existed among my uncles, neighbours, and young men around me, men who faced emotional, financial, and psychological stress yet pretended they were fine.</p>

<p>As I grew older, I also experienced moments of feeling overwhelmed but unsure how to express it, which made me more sensitive to how many men carry burdens in silence. The turning point for me came during trending conversations on X (formally known as Twitter), where many men shared feeling like failures because they could not meet societal expectations as first sons, breadwinners, or heads of families. These collective experiences opened my eyes to how deeply men are affected by societal norms and inspired me to become an advocate so they don't feel alone.</p>

<p>In Nigeria, cultural expectations heavily influence how men handle emotional struggles. Society expects men to always be strong, resilient, and emotionally contained. Showing vulnerability is often seen as weakness. When climate-related challenges such as heat waves, flooding, destroyed farmlands, or job losses occur, the pressure on men increases because they are expected to remain the primary providers. Yet despite this strain, many men hide their emotions out of fear of judgment. In my community, I see men who are clearly overwhelmed but still hold everything inside due to the cultural belief that men must endure in silence.</p>

<p>Climate change has intensified these struggles. Environmental disruptions directly affect men's livelihoods and their ability to provide for their families. When floods destroy farms or businesses, when heat disrupts daily work, or when economic instability increases prices, men feel pressure that impacts their mental well-being. Last year, during the Harmattan season, several homes and shops were lost to fires, leaving many men devastated as they watched lifelong investments disappear overnight. Situations like these trigger anxiety, frustration, hopelessness, and feelings of failure. These strains become more visible each year, especially during periods of heavy rain and flooding, when some men cannot go to work or lose their sources of income entirely.</p>

<p>As climate impacts worsen, more men are expressing stress, irritability, and emotional exhaustion. Heat waves affect moods, floods disrupt livelihoods, and storms leave some men feeling helpless. These pressures contribute significantly to mental health challenges such as anxiety, anger, withdrawal, and burnout. Many men begin to question their worth when they feel unable to provide, and because society expects them to remain strong, they rarely seek help.</p>

<p>Traditional beliefs further compound the issue. Statements like "men don't cry," "a man should not complain," and "a real man handles everything" discourage men from opening up. Even when climate change affects them deeply, cultural conditioning pushes them to hide their pain, affecting them emotionally and psychologically.</p>

<p>Raising awareness is essential. Social media advocacy, community outreach, religious gatherings, school campaigns, and NGO partnerships can help shift the narrative. Storytelling and real-life testimonies allow people to understand the connection between climate challenges and mental health. Celebrating events like International Men's Day and Father's Day also creates opportunities to appreciate men, highlight their importance, and emphasize the need for mental health support. These platforms encourage men to speak up and learn healthier coping mechanisms instead of suffering in silence.</p>

<p>Advocacy for men's mental health can also integrate environmental sustainability by teaching communities practical steps like recycling, tree planting, waste reduction, and community cleanups. When men understand how environmental care relates to their well-being, they become better equipped to protect both themselves and their surroundings.</p>

<p>Support systems are crucial in helping men cope with climate-related stress. Counseling, support groups, safe spaces for conversations, mentorship programs, religious guidance, family involvement, and government relief initiatives all play important roles. Even simple community discussions can help men feel understood and supported.</p>

<p>In Nigeria, while there are many mental health and climate-focused organizations, very few combine both issues. This shows a gap that needs to be filled through integrated programs involving mental health professionals, environmental experts, and community leaders. As climate change worsens, mental health challenges will rise, making collaboration between these sectors essential.</p>

<p>Individuals can also take small steps to protect both their mental health and the environment. Resting, talking to someone, managing stress, and seeking help when needed are important for well-being. Environmentally, people can reduce waste, save energy, plant trees, and adopt eco-friendly habits that protect their communities.</p>

<p>My message to men facing mental health struggles due to climate change is simple: you are not weak for feeling overwhelmed. Climate issues affect everyone. Speaking up is not a sign of weakness, it is a form of strength. Please don't carry everything alone; reach out, ask for help, and remember that vulnerability does not reduce your value as a man.</p>

<p>For support, organizations such as Mentally Aware Nigeria Initiative (MANI), She Writes Woman, Neem Foundation, Asido Foundation, the National Mental Health Programme in Nigeria, a Federal Government initiative, and Advancing Mental Health for Africans (AMHFA) are great starting points. Local community groups, religious institutions, and support networks also provide help.</p>

<p>By understanding the link between climate change and men's mental health, and by breaking harmful cultural expectations, we can build a society where men feel safe to express their struggles, seek help, and receive the support they deserve.</p>`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Checking if mens mental health article exists...');

    // Check if the article already exists
    const { data: existing, error: selectError } = await supabase
      .from('articles')
      .select('id')
      .eq('id', ARTICLE_ID)
      .maybeSingle();

    if (selectError) {
      console.error('Error checking for existing article:', selectError);
      throw selectError;
    }

    if (existing) {
      console.log('Mens mental health article already exists');
      return new Response(
        JSON.stringify({ id: ARTICLE_ID, created: false, message: 'Article already exists' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Inserting mens mental health article...');

    // Insert the article
    const { data: inserted, error: insertError } = await supabase
      .from('articles')
      .insert({
        id: ARTICLE_ID,
        title: ARTICLE_TITLE,
        excerpt: ARTICLE_EXCERPT,
        content: ARTICLE_CONTENT,
        category: ARTICLE_CATEGORY,
        image_url: ARTICLE_IMAGE_URL,
        likes: 0,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting article:', insertError);
      throw insertError;
    }

    console.log('Mens mental health article created successfully');

    return new Response(
      JSON.stringify({ 
        id: inserted.id, 
        title: inserted.title,
        excerpt: inserted.excerpt,
        created: true, 
        message: 'Article created successfully' 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in ensure-mens-mental-health-article:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
