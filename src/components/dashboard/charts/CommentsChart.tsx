import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Sample data for the chart
const commentsData7Days = [
  { day: "Mon", comments: 42 },
  { day: "Tue", comments: 63 },
  { day: "Wed", comments: 58 },
  { day: "Thu", comments: 78 },
  { day: "Fri", comments: 56 },
  { day: "Sat", comments: 82 },
  { day: "Sun", comments: 91 },
];

const commentsData30Days = [
  { day: "1", comments: 42 },
  { day: "2", comments: 63 },
  { day: "3", comments: 58 },
  { day: "4", comments: 78 },
  { day: "5", comments: 56 },
  { day: "6", comments: 82 },
  { day: "7", comments: 91 },
  { day: "8", comments: 67 },
  { day: "9", comments: 52 },
  { day: "10", comments: 48 },
  { day: "11", comments: 64 },
  { day: "12", comments: 59 },
  { day: "13", comments: 73 },
  { day: "14", comments: 87 },
  { day: "15", comments: 67 },
  { day: "16", comments: 54 },
  { day: "17", comments: 48 },
  { day: "18", comments: 52 },
  { day: "19", comments: 69 },
  { day: "20", comments: 74 },
  { day: "21", comments: 79 },
  { day: "22", comments: 57 },
  { day: "23", comments: 68 },
  { day: "24", comments: 72 },
  { day: "25", comments: 89 },
  { day: "26", comments: 95 },
  { day: "27", comments: 84 },
  { day: "28", comments: 63 },
  { day: "29", comments: 47 },
  { day: "30", comments: 52 },
];

const chartConfig = {
  comments: {
    label: "Comments",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
};

const CommentsChart = () => {
  const [timeframe, setTimeframe] = useState<"7d" | "30d">("7d");
  const data = timeframe === "7d" ? commentsData7Days : commentsData30Days;

  return (
    <Card className="bg-[#222222] border-[#cde6f9] overflow-hidden rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-white">
            Comments Received Over Time
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={`px-2.5 ${
                timeframe === "7d" ? "bg-[#9b87f5]/20 text-[#9b87f5]" : ""
              }`}
              onClick={() => setTimeframe("7d")}
            >
              7 Days
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`px-2.5 ${
                timeframe === "30d" ? "bg-[#9b87f5]/20 text-[#9b87f5]" : ""
              }`}
              onClick={() => setTimeframe("30d")}
            >
              <div className="text-white">30 Days</div>
            </Button>
          </div>
        </div>
        
          <CardDescription className="text-muted-foreground">
          <div className="myDiv">Total comments received on your Instagram posts</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[250px] mt-4 overflow-hidden">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
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
                  dataKey="comments"
                  name="Comments"
                  stroke="#9b87f5"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#9b87f5", strokeWidth: 0 }}
                  activeDot={{
                    r: 6,
                    fill: "#9b87f5",
                    stroke: "#222222",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentsChart;
