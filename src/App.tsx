import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Automations from "./pages/Automations";
import AutomationBuilder from "./pages/AutomationBuilder";
import CloneTuning from "./pages/CloneTuning";
import TunePostComments from "./pages/TunePostComments";
import TuneStoryReplies from "./pages/TuneStoryReplies";
import TuneDMReplies from "./pages/TuneDMReplies";
import Contacts from "./pages/Contacts";
import Refer from "./pages/Refer";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import React from "react";
import CreateAutomations from "./pages/CreateAutomations";
import Login from "./pages/Login";

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
            <Route path="/automations" element={<Automations />} />
            <Route path="/automation-builder" element={<AutomationBuilder />} />
            <Route path="/clone-tuning" element={<CloneTuning />} />
            <Route path="/tune-post-comments" element={<TunePostComments />} />
            <Route path="/tune-story-replies" element={<TuneStoryReplies />} />
            <Route path="/tune-dm-replies" element={<TuneDMReplies />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/clone-tuning" element={<CloneTuning />} />
            <Route path="/login" element={<Login />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
