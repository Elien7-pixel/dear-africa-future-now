
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

    const seedArticle = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('ensure-bee-farmer-article');
        if (error) {
          console.error('Seed function error:', error);
          return;
        }
        if (data?.id && data?.created) {
          await sendArticleNotification({
            title: data.title,
            excerpt: data.excerpt,
            id: data.id,
          });
          console.log('Article ensured and notification sent');
        } else if (data?.id) {
          console.log('Article already existed with id:', data.id);
        }
      } catch (e) {
        console.error('Failed to ensure article:', e);
      }
    };

    seedArticle();
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
