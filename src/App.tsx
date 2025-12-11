
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { registerServiceWorker } from "@/utils/serviceWorker";
import { supabase } from "@/integrations/supabase/client";
import { sendArticleNotification } from "@/hooks/useArticleNotifications";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UpdateArticleImage from "./pages/UpdateArticleImage";
import AddNarrativeSovereignty from "./pages/AddNarrativeSovereignty";
import AddNarrativeSovereigntyStatic from "./pages/AddNarrativeSovereigntyStatic";
import AddBeeFarmerArticle from "./pages/AddBeeFarmerArticle";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    registerServiceWorker();

    const seedArticles = async () => {
      try {
        // Seed bee farmer article
        const { data: beeData, error: beeError } = await supabase.functions.invoke('ensure-bee-farmer-article');
        if (beeError) {
          console.error('Bee farmer seed error:', beeError);
        } else if (beeData?.id && beeData?.created) {
          await sendArticleNotification({
            title: beeData.title,
            excerpt: beeData.excerpt,
            id: beeData.id,
          });
          console.log('Bee farmer article ensured and notification sent');
        }

        // Seed Al Salam article
        const { data: salamData, error: salamError } = await supabase.functions.invoke('ensure-alsalam-article');
        if (salamError) {
          console.error('Al Salam seed error:', salamError);
        } else if (salamData?.id && salamData?.created) {
          await sendArticleNotification({
            title: salamData.title,
            excerpt: salamData.excerpt,
            id: salamData.id,
          });
          console.log('Al Salam article ensured and notification sent');
        }

        // Seed Africa Child article
        const { data: africaData, error: africaError } = await supabase.functions.invoke('ensure-africa-child-article');
        if (africaError) {
          console.error('Africa Child seed error:', africaError);
        } else if (africaData?.id && africaData?.created) {
          await sendArticleNotification({
            title: africaData.title,
            excerpt: africaData.excerpt,
            id: africaData.id,
          });
          console.log('Africa Child article ensured and notification sent');
        }

        // Seed Men's Mental Health article
        const { data: mentalHealthData, error: mentalHealthError } = await supabase.functions.invoke('ensure-mens-mental-health-article');
        if (mentalHealthError) {
          console.error('Men\'s Mental Health seed error:', mentalHealthError);
        } else if (mentalHealthData?.id && mentalHealthData?.created) {
          await sendArticleNotification({
            title: mentalHealthData.title,
            excerpt: mentalHealthData.excerpt,
            id: mentalHealthData.id,
          });
          console.log('Men\'s Mental Health article ensured and notification sent');
        }
      } catch (e) {
        console.error('Failed to ensure articles:', e);
      }
    };

    seedArticles();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/update-image" element={<UpdateArticleImage />} />
              <Route path="/admin/add-narrative-sovereignty" element={<AddNarrativeSovereignty />} />
              <Route path="/admin/add-narrative-sovereignty-static" element={<AddNarrativeSovereigntyStatic />} />
              <Route path="/admin/bee-farmer" element={<AddBeeFarmerArticle />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
