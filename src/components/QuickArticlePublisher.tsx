import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface ArticleData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
}

const QuickArticlePublisher = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const articleData: ArticleData = {
    title: 'Narrative Sovereignty: Reclaiming Africa\'s Voice in the Age of Media Globalisation',
    excerpt: "African storytellers are reclaiming narrative sovereignty, challenging misrepresentation and building platforms to amplify authentic voices.",
    content: `Author: H.E Ambassador Godfrey Madanhire.
Chief Operations Officer: Radio54 African Panorama

For generations, Africa's story has been told by others, often with distortion, condescension or outright erasure. From the big screen to global newsrooms, the continent has been cast as a backdrop for tragedy or exoticism, rarely as a protagonist in its own right. One of the most enduring examples is the 1980 film The Gods Must Be Crazy, which, beneath its comedic veneer, painted African communities as naïve and primitive. The Bushman protagonist, Xi, is portrayed as bewildered by a Coca-Cola bottle dropped from a plane, an object that disrupts his tribe's harmony and sends him on a quest to return it to the gods. While the film entertained millions, it also reinforced colonial stereotypes of Africa as a place untouched by modernity, incapable of agency and in need of external intervention.

This pattern of misrepresentation persists in modern media. Foreign outlets often spotlight Africa only in times of crisis, conflict, famine or political unrest while ignoring the continent's innovation, resilience and cultural dynamism. This misrepresentation has not only distorted global perceptions but also undermined Africa's economic prospects, costing the continent an estimated $4.2 billion annually in lost investment opportunities.

This distortion continues in more insidious forms. In May 2025, during a diplomatic visit to the White House, South African President Cyril Ramaphosa was met not with open dialogue, but with a curated montage of videos and articles presented by U.S. President Donald Trump. Among them were clips of Julius Malema, leader of the Economic Freedom Fighters (EFF), chanting the controversial "Kill the Boer" song, a struggle-era anthem often misinterpreted outside its historical context. President Trump used these clips to argue that white South Africans were victims of genocide, a claim widely debunked by South African crime statistics and independent fact-checkers. The incident was more than a diplomatic misstep, it was a stark reminder of how foreign narratives, when unchecked, can shape global policy and perception. Trump's reliance on sensationalist media and misattributed footage including scenes from the Democratic Republic of Congo exemplified how misinformation can be weaponised, even at the highest levels of international engagement.

But today, a new wave of African storytellers is reshaping that narrative from within. Across radio waves, podcasts and digital platforms, African broadcasters are asserting control over how the continent is seen and understood. Pan-African media institutions are no longer waiting for validation from the West, they are building their own stages. Stations like Radio54 African Panorama, while not seeking the spotlight, quietly raises voices from across the continent and diaspora. Through cultural programming, economic advocacy and regional storytelling, they offer a counterbalance to the dominant global narrative without fanfare, but with purpose.

Social media has become another battleground for representation. Take the viral rise of Chabba and Dudukwe, two charismatic members of the Hadzabe tribe in Tanzania. Their humorous and heartfelt videos have captivated audiences worldwide, showcasing not only their personalities but also the richness of Hadzabe culture. In one clip, they hold a mock press conference with tourists; in another, they learn to say "Meta" in English, blending tradition with modernity. These moments, though lighthearted, challenge the stereotype of African tribes as static or disconnected. They show that Africa is not a museum, it is alive, evolving and digitally fluent.

Yet, the journey toward narrative sovereignty is not without obstacles. Many African media houses still rely on syndicated content from Western agencies. Funding gaps, censorship and infrastructural limitations remain. But the momentum is undeniable. From TikTok to terrestrial radio, from village storytellers to urban broadcasters, Africa is reclaiming its voice.

The battle for Africa's narrative is no longer a question of ability, it is a matter of will. Every time a foreign lens tells our story with prejudice or parody, it is not just misrepresentation. It should be viewed as theft. It robs our children of pride, our economies of confidence and our cultures of truth.

The next chapter will not be written by outsiders. It will be sung, spoken, filmed and streamed by those whose roots run deepest, Africans telling the African story.`,
    category: 'Social Equality',
    imageUrl: '/lovable-uploads/95da0cb0-54a4-407d-a107-fcae3d3d3fbf.png'
  };

  const handlePublish = async () => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert({
          title: articleData.title,
          excerpt: articleData.excerpt,
          content: articleData.content,
          category: articleData.category,
          date: new Date().toISOString(),
          image_url: articleData.imageUrl,
        })
        .select()
        .single();

      if (error) throw error;

      toast.success('Article published successfully!');
      navigate(`/article/${data.id}`);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || 'Failed to publish article');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handlePublish} 
        disabled={isSubmitting}
        size="lg"
        className="bg-gradient-to-r from-african-orange to-african-red text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? 'Publishing...' : '📝 Publish New Article'}
      </Button>
    </div>
  );
};

export default QuickArticlePublisher;