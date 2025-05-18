
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const CloneTuning = () => {
  const navigate = useNavigate();

  const tuningOptions = [
    {
      id: "post-comments",
      title: "Reply on Post Comments",
      icon: "📝",
      points: [
        "Understands fan sentiment",
        "Replies instantly in your tone"
      ],
      color: "from-blue-500 to-blue-600",
      route: "/tune-post-comments"
    },
    {
      id: "story",
      title: "Reply on Story",
      icon: "📸",
      points: [
        "Engages via auto-replies",
        "Triggers based on keywords"
      ],
      color: "from-green-500 to-green-600",
      route: "/tune-story-replies"
    },
    {
      id: "dms",
      title: "Reply on DMs",
      icon: "💬",
      points: [
        "Handles frequent questions",
        "Learns from past chats"
      ],
      color: "from-orange-500 to-orange-600",
      route: "/tune-dm-replies"
    }
  ];

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <Header />
          
          <div className="mt-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-[#9b87f5] h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">Clone Tuning</h2>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Customize how your AI clone interacts with your audience across different platforms.
            </p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tuningOptions.map((option) => (
                <div 
                  key={option.id} 
                  onClick={() => navigate(option.route)}
                  className="cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <Card className="h-full bg-[#1A1F2C] border-none rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[rgba(155,135,245,0.15)] hover:bg-[#232938] transition-all duration-300">
                    <CardContent className="p-6">                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${option.color} shadow-md`}>
                        <span>{option.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">{option.title}</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {option.points.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 text-[#3B34DC]">•</div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CloneTuning;
