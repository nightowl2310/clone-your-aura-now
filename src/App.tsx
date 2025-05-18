
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CloneTuning from "./pages/CloneTuning";
import TunePostComments from "./pages/TunePostComments";
import TuneStoryReplies from "./pages/TuneStoryReplies";
import TuneDMReplies from "./pages/TuneDMReplies";
import NotFound from "./pages/NotFound";
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clone-tuning" element={<CloneTuning />} />
            <Route path="/tune-post-comments" element={<TunePostComments />} />
            <Route path="/tune-story-replies" element={<TuneStoryReplies />} />
            <Route path="/tune-dm-replies" element={<TuneDMReplies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
