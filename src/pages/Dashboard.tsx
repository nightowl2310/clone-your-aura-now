import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PlatformSwitcher from "@/components/dashboard/PlatformSwitcher";
import CommentsChart from "@/components/dashboard/charts/CommentsChart";
import AIRepliesChart from "@/components/dashboard/charts/AIRepliesChart";
import SentimentChart from "@/components/dashboard/charts/SentimentChart";
// import ReplyTimeChart from "@/components/dashboard/charts/ReplyTimeChart";
// import AccuracyChart from "@/components/dashboard/charts/AccuracyChart";
import TopPostsChart from "@/components/dashboard/charts/TopPostsChart";
import Notifications from "@/components/dashboard/Notifications";
import ActionButtons from "@/components/dashboard/ActionButtons";
import Assistant from "@/components/dashboard/Assistant";
import Layout from "../components/Layout"; // adjust as needed


const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const platformParam = searchParams.get("platform");
  const [activePlatform, setActivePlatform] = useState(platformParam || "instagram");

  useEffect(() => {
    if (platformParam && (platformParam === "instagram" || platformParam === "youtube")) {
      setActivePlatform(platformParam);
    }
  }, [platformParam]);

  const handlePlatformChange = (platformId: string) => {
    setActivePlatform(platformId);
    setSearchParams({ platform: platformId });
  };

  const platforms = [
    { id: "instagram", name: "Instagram", icon: "📸" },
    { id: "youtube", name: "YouTube", icon: "▶️" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mt-8">
          <PlatformSwitcher
            platforms={platforms}
            activePlatform={activePlatform}
            onPlatformChange={handlePlatformChange}
          />
        </div>

        <div className="mt-4 mb-6">
          <ActionButtons />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CommentsChart />
          </div>
          <div>
            <Notifications />
          </div>
          <div>
            <AIRepliesChart />
          </div>
          <div>
            <SentimentChart />
          </div>
          {/* <div><ReplyTimeChart /></div> */}
          {/* <div><AccuracyChart /></div> */}
          <div className="lg:col-span-2">
            <TopPostsChart />
          </div>
        </div>
      </div>

      {/* Floating Assistant */}
      <Assistant />
    </Layout>
  );
};

export default Dashboard;
