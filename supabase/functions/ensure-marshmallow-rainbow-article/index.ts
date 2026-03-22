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

    const { data: existing } = await supabaseClient
      .from('articles')
      .select('id')
      .eq('title', 'From Township Stages to Community Systems: Building Marshmallow Rainbow')
      .single()

    const articleContent = `<p><em>How a journey through sport, theatre, youth media and entrepreneurship in Diepsloot inspired a community-led ecosystem for youth development and sustainability.</em></p>

<p><strong>By Felicia Khumalo</strong></p>

<p>Before Marshmallow Rainbow was a company, it was a stage, a sports field, a debate podium, and a radio microphone.</p>

<p>My journey with structured development programmes began at Riversands Primary School in Johannesburg. In Grade 3, I performed on stage for the first time. I did not realise it then, but that moment planted confidence in me. In Grade 5, I joined netball. In Grade 6, I ran the 300 metres provincially while studying in Johannesburg.</p>

<p>Soon after, I moved back to Diepsloot for the rest of my schooling, but I carried those early exposures with me.</p>

<p>In Grade 7 at Muzomuhle Primary School, I was fortunate to be part of a development programme supported by Tsogo Sun. It was one of my first experiences seeing how partnerships between corporates and communities can expand opportunities for young people.</p>

<p>At Itirele-Zenzele Comprehensive High School, I continued seeking platforms that would shape my voice and leadership. In Grade 8, I joined the debate team. In Grade 9, I became a journalist for the school newsletter and joined the Youth Enterprise Society — an experience that would influence the next three years of my life. Through Youth Enterprise Society, I began to see entrepreneurship not just as business, but as a way to solve problems within communities.</p>

<p>After school, I joined Diepsloot Youth in Action, a local sports and arts organisation founded by Nkanyiso Ntuli. Through theatre, we performed on multiple stages across Gauteng, including the international STATE Theatre in Pretoria. Those performances showed me that talent from low-income areas like Diepsloot belongs on the biggest stages.</p>

<p>During my matric year, I was also honoured with an opportunity that affirmed the impact of youth development programmes in my life. Through the YES programme run by Education With Enterprise Trust (EWET) in partnership with the Nelson Mandela Children's Fund, I was selected to serve as a youth representative and Master of Ceremonies during the celebration of the 100th birthday of Nelson Mandela.</p>

<p>Being entrusted with such a role during such a historic moment reinforced my belief that when young people are given platforms and guidance, they are capable of leading conversations that shape the future.</p>

<p>At the same time, I was selected to run a youth radio show on Sloot FM every Saturday. What started during my matric year continued even after I finished school. Radio gave me a platform to engage young voices in the community and strengthened my sense of responsibility and leadership.</p>

<p>Eventually, I received a learnership opportunity to study Film and Television, allowing me to further develop the storytelling path that had already begun through theatre and radio. My commitment to storytelling also expanded beyond performance and broadcasting into literature.</p>

<p>I led and co-authored a collaborative poetry project titled <em>Melancholy</em>, created alongside fellow African poets from Malawi, Nigeria, and South Africa. The anthology explores mental health challenges faced by African youth and uses poetry as both expression and healing. Through this project, we sought to create a platform where young people could speak honestly about emotional struggles while demonstrating how art can serve as a powerful tool for awareness and personal reflection.</p>

<p>Each programme I joined built something in me:</p>
<ul>
<li>Sport built discipline.</li>
<li>Debate built critical thinking.</li>
<li>Journalism built awareness.</li>
<li>Theatre built confidence.</li>
<li>Radio built leadership.</li>
<li>Entrepreneurship built vision.</li>
</ul>

<p>These experiences would later shape the work I am building today.</p>

<p>I later enrolled at Nelson Mandela University, studying toward a Bachelor of Administration in Public Administration and Business Management. During my time there, I remained actively involved in student leadership and development initiatives. I served as an executive member in three student societies, including being part of the founding executive team of the Student Women Economic Empowerment Programme, where I held the role of Events Officer during the organisation's establishment at the university.</p>

<p>I was also involved in leadership roles within The Ecosystem Society and United Nations Association of South Africa NMU chapter. These experiences deepened my understanding of organising programmes, mobilising young people around important social issues, and building collaborative platforms that empower students to lead change within their communities.</p>

<p>However, with only one year left to complete my degree, I lost my NSFAS funding. It was a difficult moment. I returned home to Diepsloot carrying disappointment but also a period of reflection. The year 2024 became a year of healing for me.</p>

<p>Toward the end of that year, I returned to what I knew best — volunteering in the community. In 2025, this volunteering led to me playing a lead role in a Speak Out stage production that raised awareness about different forms of bullying across schools, households, and communities. The production toured local schools and community centres, using theatre as a tool for education and dialogue.</p>

<p>After the production concluded, I assisted a small family-owned informal business to formalise its operations. I helped them with registration and compliance processes, which eventually led to them establishing a small shop in Newtown. It was a powerful reminder that administration and governance skills can directly change livelihoods.</p>

<p>As I began planning to work with local youth to independently produce film and digital content, I received an unexpected call from the centre inviting me to lead the establishment of their Film and Television programme while serving as Acting Centre Manager during the maternity leave of the Centre Manager.</p>

<p>Through this role, I was able to engage with various stakeholders and attend different sector gatherings. One of these was a Youth Indaba, where discussions around environmental responsibility and youth participation sparked new ideas. Those conversations watered the vision that would become Marshmallow Rainbow.</p>

<p>Today, Marshmallow Rainbow is evolving from a vision into a living community ecosystem in Diepsloot. One of our first initiatives is activating a community food garden on land previously used for illegal dumping near a local clinic. The garden is being developed to support new mothers, the elderly, and differently abled members of our community while transforming a neglected space into a productive one.</p>

<p>Alongside the garden, we are launching a small thrifting marketplace initiative to discourage illegal dumping by encouraging reuse and circular community economics. Income generated through this initiative helps sustain the project — from purchasing tools and seedlings to providing meals for the volunteers who maintain the garden.</p>

<p>Beyond environmental work, Marshmallow Rainbow is also developing youth-focused creative and enterprise programmes inspired by the same platforms that shaped my own journey — theatre, media, storytelling, and entrepreneurship.</p>

<p>Through partnerships with community institutions such as the Selaelo Chuene Art Center, we aim to expand youth access to film, television, radio, and digital storytelling skills while also introducing young people to opportunities in sustainability, agriculture, and social enterprise.</p>

<p>Our vision is to reach hundreds of young people and community members in the coming years while building a model that can be replicated in other underserved communities.</p>

<p>Marshmallow Rainbow is still in its early building phase, but the foundation is already taking shape in Diepsloot. Our immediate focus is expanding the community garden, strengthening the youth creative development programme, and establishing a sustainable thrifting marketplace that tackles illegal dumping while generating income for community-led initiatives.</p>

<p>Over the next year, our goal is to engage at least 300 young people and community members through creative skills development, environmental programmes, and entrepreneurship pathways.</p>

<p>To achieve this, Marshmallow Rainbow is actively seeking partners who believe in investing in grassroots leadership and community-led solutions. Support can take many forms — from mentorship, equipment and training resources for youth media programmes, to support for sustainable agriculture and environmental initiatives.</p>

<p>Strategic partnerships with organisations, foundations, and individuals who share a vision for long-term community empowerment will help us expand this work faster and reach more people.</p>

<p>For organisations, philanthropists, and collaborators across the world who believe that meaningful change begins at community level, this is an invitation to build with us.</p>

<p>Diepsloot is full of young people with ideas, creativity, and determination — what they often lack are the structures that allow their potential to grow.</p>

<p>Marshmallow Rainbow exists to build those structures.</p>

<p>If you believe in investing in the next generation of African creators, entrepreneurs, and community leaders, we invite you to connect with us, collaborate with us, and help us expand this ecosystem of opportunity.</p>

<p><strong>Because the African child does not lack brilliance. What the African child needs is consistent infrastructure — and together, we can build it.</strong></p>

<hr />

<p><strong>Author Bio:</strong> Felicia Khumalo is the founder of Marshmallow Rainbow Pty Ltd and Marshmallow Rainbow Societal NPC, a community-driven social enterprise focused on youth development, environmental sustainability, and creative industries in Diepsloot, Johannesburg. Her work bridges arts, entrepreneurship, and community-led solutions aimed at expanding opportunities for young people and underserved communities.</p>`;

    if (existing) {
      // Update existing article content to ensure proper formatting
      const { error: updateError } = await supabaseClient
        .from('articles')
        .update({ content: articleContent })
        .eq('id', existing.id)

      if (updateError) {
        console.error('Error updating article:', updateError)
      }

      return new Response(
        JSON.stringify({ id: existing.id, created: false }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const articleData = {
      title: 'From Township Stages to Community Systems: Building Marshmallow Rainbow',
      excerpt: 'How a journey through sport, theatre, youth media and entrepreneurship in Diepsloot inspired a community-led ecosystem for youth development and sustainability.',
      content: `<p><em>How a journey through sport, theatre, youth media and entrepreneurship in Diepsloot inspired a community-led ecosystem for youth development and sustainability.</em></p>

<p><strong>By Felicia Khumalo</strong></p>

<p>Before Marshmallow Rainbow was a company, it was a stage, a sports field, a debate podium, and a radio microphone.</p>

<p>My journey with structured development programmes began at Riversands Primary School in Johannesburg. In Grade 3, I performed on stage for the first time. I did not realise it then, but that moment planted confidence in me. In Grade 5, I joined netball. In Grade 6, I ran the 300 metres provincially while studying in Johannesburg.</p>

<p>Soon after, I moved back to Diepsloot for the rest of my schooling, but I carried those early exposures with me.</p>

<p>In Grade 7 at Muzomuhle Primary School, I was fortunate to be part of a development programme supported by Tsogo Sun. It was one of my first experiences seeing how partnerships between corporates and communities can expand opportunities for young people.</p>

<p>At Itirele-Zenzele Comprehensive High School, I continued seeking platforms that would shape my voice and leadership. In Grade 8, I joined the debate team. In Grade 9, I became a journalist for the school newsletter and joined the Youth Enterprise Society — an experience that would influence the next three years of my life. Through Youth Enterprise Society, I began to see entrepreneurship not just as business, but as a way to solve problems within communities.</p>

<p>After school, I joined Diepsloot Youth in Action, a local sports and arts organisation founded by Nkanyiso Ntuli. Through theatre, we performed on multiple stages across Gauteng, including the international STATE Theatre in Pretoria. Those performances showed me that talent from low-income areas like Diepsloot belongs on the biggest stages.</p>

<p>During my matric year, I was also honoured with an opportunity that affirmed the impact of youth development programmes in my life. Through the YES programme run by Education With Enterprise Trust (EWET) in partnership with the Nelson Mandela Children's Fund, I was selected to serve as a youth representative and Master of Ceremonies during the celebration of the 100th birthday of Nelson Mandela.</p>

<p>Being entrusted with such a role during such a historic moment reinforced my belief that when young people are given platforms and guidance, they are capable of leading conversations that shape the future.</p>

<p>At the same time, I was selected to run a youth radio show on Sloot FM every Saturday. What started during my matric year continued even after I finished school. Radio gave me a platform to engage young voices in the community and strengthened my sense of responsibility and leadership.</p>

<p>Eventually, I received a learnership opportunity to study Film and Television, allowing me to further develop the storytelling path that had already begun through theatre and radio. My commitment to storytelling also expanded beyond performance and broadcasting into literature.</p>

<p>I led and co-authored a collaborative poetry project titled <em>Melancholy</em>, created alongside fellow African poets from Malawi, Nigeria, and South Africa. The anthology explores mental health challenges faced by African youth and uses poetry as both expression and healing. Through this project, we sought to create a platform where young people could speak honestly about emotional struggles while demonstrating how art can serve as a powerful tool for awareness and personal reflection.</p>

<p>Each programme I joined built something in me:</p>
<ul>
<li>Sport built discipline.</li>
<li>Debate built critical thinking.</li>
<li>Journalism built awareness.</li>
<li>Theatre built confidence.</li>
<li>Radio built leadership.</li>
<li>Entrepreneurship built vision.</li>
</ul>

<p>These experiences would later shape the work I am building today.</p>

<p>I later enrolled at Nelson Mandela University, studying toward a Bachelor of Administration in Public Administration and Business Management. During my time there, I remained actively involved in student leadership and development initiatives. I served as an executive member in three student societies, including being part of the founding executive team of the Student Women Economic Empowerment Programme, where I held the role of Events Officer during the organisation's establishment at the university.</p>

<p>I was also involved in leadership roles within The Ecosystem Society and United Nations Association of South Africa NMU chapter. These experiences deepened my understanding of organising programmes, mobilising young people around important social issues, and building collaborative platforms that empower students to lead change within their communities.</p>

<p>However, with only one year left to complete my degree, I lost my NSFAS funding. It was a difficult moment. I returned home to Diepsloot carrying disappointment but also a period of reflection. The year 2024 became a year of healing for me.</p>

<p>Toward the end of that year, I returned to what I knew best — volunteering in the community. In 2025, this volunteering led to me playing a lead role in a Speak Out stage production that raised awareness about different forms of bullying across schools, households, and communities. The production toured local schools and community centres, using theatre as a tool for education and dialogue.</p>

<p>After the production concluded, I assisted a small family-owned informal business to formalise its operations. I helped them with registration and compliance processes, which eventually led to them establishing a small shop in Newtown. It was a powerful reminder that administration and governance skills can directly change livelihoods.</p>

<p>As I began planning to work with local youth to independently produce film and digital content, I received an unexpected call from the centre inviting me to lead the establishment of their Film and Television programme while serving as Acting Centre Manager during the maternity leave of the Centre Manager.</p>

<p>Through this role, I was able to engage with various stakeholders and attend different sector gatherings. One of these was a Youth Indaba, where discussions around environmental responsibility and youth participation sparked new ideas. Those conversations watered the vision that would become Marshmallow Rainbow.</p>

<p>Today, Marshmallow Rainbow is evolving from a vision into a living community ecosystem in Diepsloot. One of our first initiatives is activating a community food garden on land previously used for illegal dumping near a local clinic. The garden is being developed to support new mothers, the elderly, and differently abled members of our community while transforming a neglected space into a productive one.</p>

<p>Alongside the garden, we are launching a small thrifting marketplace initiative to discourage illegal dumping by encouraging reuse and circular community economics. Income generated through this initiative helps sustain the project — from purchasing tools and seedlings to providing meals for the volunteers who maintain the garden.</p>

<p>Beyond environmental work, Marshmallow Rainbow is also developing youth-focused creative and enterprise programmes inspired by the same platforms that shaped my own journey — theatre, media, storytelling, and entrepreneurship.</p>

<p>Through partnerships with community institutions such as the Selaelo Chuene Art Center, we aim to expand youth access to film, television, radio, and digital storytelling skills while also introducing young people to opportunities in sustainability, agriculture, and social enterprise.</p>

<p>Our vision is to reach hundreds of young people and community members in the coming years while building a model that can be replicated in other underserved communities.</p>

<p>Marshmallow Rainbow is still in its early building phase, but the foundation is already taking shape in Diepsloot. Our immediate focus is expanding the community garden, strengthening the youth creative development programme, and establishing a sustainable thrifting marketplace that tackles illegal dumping while generating income for community-led initiatives.</p>

<p>Over the next year, our goal is to engage at least 300 young people and community members through creative skills development, environmental programmes, and entrepreneurship pathways.</p>

<p>To achieve this, Marshmallow Rainbow is actively seeking partners who believe in investing in grassroots leadership and community-led solutions. Support can take many forms — from mentorship, equipment and training resources for youth media programmes, to support for sustainable agriculture and environmental initiatives.</p>

<p>Strategic partnerships with organisations, foundations, and individuals who share a vision for long-term community empowerment will help us expand this work faster and reach more people.</p>

<p>For organisations, philanthropists, and collaborators across the world who believe that meaningful change begins at community level, this is an invitation to build with us.</p>

<p>Diepsloot is full of young people with ideas, creativity, and determination — what they often lack are the structures that allow their potential to grow.</p>

<p>Marshmallow Rainbow exists to build those structures.</p>

<p>If you believe in investing in the next generation of African creators, entrepreneurs, and community leaders, we invite you to connect with us, collaborate with us, and help us expand this ecosystem of opportunity.</p>

<p><strong>Because the African child does not lack brilliance. What the African child needs is consistent infrastructure — and together, we can build it.</strong></p>

<hr />

<p><strong>Author Bio:</strong> Felicia Khumalo is the founder of Marshmallow Rainbow Pty Ltd and Marshmallow Rainbow Societal NPC, a community-driven social enterprise focused on youth development, environmental sustainability, and creative industries in Diepsloot, Johannesburg. Her work bridges arts, entrepreneurship, and community-led solutions aimed at expanding opportunities for young people and underserved communities.</p>`,
      category: 'Inspirational',
      date: new Date().toISOString().split('T')[0],
      image_url: '/lovable-uploads/marshmallow-rainbow-diepsloot.jpg'
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
