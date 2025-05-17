
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Sample data for the chart
const repliesData = [
  { day: "Mon", replies: 32, manual: 10 },
  { day: "Tue", replies: 42, manual: 8 },
  { day: "Wed", replies: 38, manual: 12 },
  { day: "Thu", replies: 52, manual: 6 },
  { day: "Fri", replies: 41, manual: 5 },
  { day: "Sat", replies: 67, manual: 4 },
  { day: "Sun", replies: 72, manual: 3 },
];

const posts = [
  { id: "all", title: "All Posts" },
  { id: "post1", title: "Beach Day Vlog" },
  { id: "post2", title: "Unboxing New Tech" },
  { id: "post3", title: "Morning Routine 2023" },
];

const chartConfig = {
  replies: {
    label: "AI Replies",
    theme: {
      light: "#33C3F0",
      dark: "#33C3F0",
    },
  },
  manual: {
    label: "Manual Replies",
    theme: {
      light: "#D946EF",
      dark: "#D946EF",
    },
  },
};

const AIRepliesChart = () => {
  const [selectedPost, setSelectedPost] = useState("all");

  return (
    <Card className="bg-[#222222] border-[#333333]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-white">Replies Sent by AI</CardTitle>
          <Select value={selectedPost} onValueChange={setSelectedPost}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Post" />
            </SelectTrigger>
            <SelectContent>
              {posts.map((post) => (
                <SelectItem key={post.id} value={post.id}>
                  {post.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <CardDescription className="text-muted-foreground">
          Number of comments automatically replied to by your AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] mt-4">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={repliesData}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  stroke="#666"
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  stroke="#666"
                  tick={{ fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="replies"
                  name="AI Replies"
                  stroke="#33C3F0"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#33C3F0", strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#33C3F0", stroke: "#222222", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="manual"
                  name="Manual Replies"
                  stroke="#D946EF"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#D946EF", strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#D946EF", stroke: "#222222", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRepliesChart;
