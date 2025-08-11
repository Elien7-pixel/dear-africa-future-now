import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const AddNarrativeSovereignty = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);
  const [publicUrl, setPublicUrl] = useState<string | null>(null);

  const title = 'Narrative Sovereignty: Reclaiming Africa’s Voice in the Age of Media Globalisation';
  const excerpt =
    "African storytellers are reclaiming narrative sovereignty, challenging misrepresentation and building platforms to amplify authentic voices.";

  const content = `Author: H.E Ambassador Godfrey Madanhire.\nChief Operations Officer: Radio54 African Panorama\n\nFor generations, Africa’s story has been told by others, often with distortion, condescension or outright erasure. From the big screen to global newsrooms, the continent has been cast as a backdrop for tragedy or exoticism, rarely as a protagonist in its own right. One of the most enduring examples is the 1980 film The Gods Must Be Crazy, which, beneath its comedic veneer, painted African communities as naïve and primitive. The Bushman protagonist, Xi, is portrayed as bewildered by a Coca-Cola bottle dropped from a plane, an object that disrupts his tribe’s harmony and sends him on a quest to return it to the gods. While the film entertained millions, it also reinforced colonial stereotypes of Africa as a place untouched by modernity, incapable of agency and in need of external intervention.\n\nThis pattern of misrepresentation persists in modern media. Foreign outlets often spotlight Africa only in times of crisis, conflict, famine or political unrest while ignoring the continent’s innovation, resilience and cultural dynamism. This misrepresentation has not only distorted global perceptions but also undermined Africa’s economic prospects, costing the continent an estimated $4.2 billion annually in lost investment opportunities.\n\nThis distortion continues in more insidious forms. In May 2025, during a diplomatic visit to the White House, South African President Cyril Ramaphosa was met not with open dialogue, but with a curated montage of videos and articles presented by U.S. President Donald Trump. Among them were clips of Julius Malema, leader of the Economic Freedom Fighters (EFF), chanting the controversial “Kill the Boer” song, a struggle-era anthem often misinterpreted outside its historical context. President Trump used these clips to argue that white South Africans were victims of genocide, a claim widely debunked by South African crime statistics and independent fact-checkers. The incident was more than a diplomatic misstep, it was a stark reminder of how foreign narratives, when unchecked, can shape global policy and perception. Trump’s reliance on sensationalist media and misattributed footage including scenes from the Democratic Republic of Congo exemplified how misinformation can be weaponised, even at the highest levels of international engagement.\n\nBut today, a new wave of African storytellers is reshaping that narrative from within. Across radio waves, podcasts and digital platforms, African broadcasters are asserting control over how the continent is seen and understood. Pan-African media institutions are no longer waiting for validation from the West, they are building their own stages. Stations like Radio54 African Panorama, while not seeking the spotlight, quietly raises voices from across the continent and diaspora. Through cultural programming, economic advocacy and regional storytelling, they offer a counterbalance to the dominant global narrative without fanfare, but with purpose.\n\nSocial media has become another battleground for representation. Take the viral rise of Chabba and Dudukwe, two charismatic members of the Hadzabe tribe in Tanzania. Their humorous and heartfelt videos have captivated audiences worldwide, showcasing not only their personalities but also the richness of Hadzabe culture. In one clip, they hold a mock press conference with tourists; in another, they learn to say “Meta” in English, blending tradition with modernity. These moments, though lighthearted, challenge the stereotype of African tribes as static or disconnected. They show that Africa is not a museum, it is alive, evolving and digitally fluent.\n\nYet, the journey toward narrative sovereignty is not without obstacles. Many African media houses still rely on syndicated content from Western agencies. Funding gaps, censorship and infrastructural limitations remain. But the momentum is undeniable. From TikTok to terrestrial radio, from village storytellers to urban broadcasters, Africa is reclaiming its voice.\n\nThe battle for Africa’s narrative is no longer a question of ability, it is a matter of will. Every time a foreign lens tells our story with prejudice or parody, it is not just misrepresentation. It should be viewed as theft. It robs our children of pride, our economies of confidence and our cultures of truth.\n\nThe next chapter will not be written by outsiders. It will be sung, spoken, filmed and streamed by those whose roots run deepest, Africans telling the African story.`;

  const handleInsert = async () => {
    setIsSubmitting(true);
    try {
      // 1) Upload image from lovable-uploads to Supabase Storage
      const srcPath = '/lovable-uploads/13bfc171-d40d-45fc-9828-70e46286daab.png';
      const res = await fetch(srcPath);
      if (!res.ok) throw new Error('Failed to fetch the uploaded image');
      const blob = await res.blob();
      const filename = `narrative-sovereignty-${Date.now()}.png`;

      const { error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(filename, blob, { upsert: true, contentType: 'image/png' });
      if (uploadError) throw uploadError;

      const { data: pub } = supabase.storage.from('article-images').getPublicUrl(filename);
      const imageUrl = pub.publicUrl;
      setPublicUrl(imageUrl);

      // 2) Insert article
      const { data, error } = await supabase
        .from('articles')
        .insert({
          title,
          excerpt,
          content,
          category: 'Social Equality',
          date: new Date().toISOString(),
          image_url: imageUrl,
        })
        .select()
        .single();

      if (error) throw error;

      setCreatedId(data.id);
      toast.success('Article created successfully');
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || 'Failed to create article');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Add: Narrative Sovereignty</h1>
      <p className="mb-6">This admin-only helper uploads the image to Supabase Storage and creates the article so it works on Hostinger.</p>
      <div className="flex items-center gap-3 mb-8">
        <Button onClick={handleInsert} disabled={isSubmitting} className="bg-african-orange hover:bg-african-orange/90">
          {isSubmitting ? 'Working...' : 'Upload Image & Create Article'}
        </Button>
        {publicUrl && (
          <a href={publicUrl} target="_blank" rel="noreferrer" className="text-african-blue underline">
            View stored image
          </a>
        )}
      </div>

      {createdId && (
        <div className="p-4 border rounded-md bg-green-50">
          <p className="mb-2">Done! Article ID:</p>
          <code className="block break-all mb-3">{createdId}</code>
          <Link to={`/article/${createdId}`} className="text-african-blue underline">
            Open article page
          </Link>
        </div>
      )}
    </main>
  );
};

export default AddNarrativeSovereignty;
