
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Sample data for the chart
const sentimentData = [
  { name: "", value: 67, keywords: ["amazing", "lovely", "great", "awesome", "inspiring", "beautiful"] },
  { name: "", value: 23, keywords: ["okay", "cool", "hmm", "noted", "interesting", "seen"] },
  { name: "", value: 10, keywords: ["boring", "fake", "lame", "ugly", "disappointed", "terrible"] },
];

const COLORS = ["#00E3A5", "#7C84FF", "#FF4C60"];

const chartConfig = {
  Positive: {
    label: "",
    theme: {
      light: "#00E3A5",
      dark: "#00E3A5",
    },
  },
  Neutral: {
    label: "",
    theme: {
      light: "#7C84FF",
      dark: "#7C84FF",
      fontsize: "10px",
    },
  },
  Negative: {
    label: "",
    theme: {
      light: "#FF4C60",
      dark: "#FF4C60",
    },
  },
};

const CustomTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#333] p-3 rounded-md shadow-lg  border-[#cde6f9]">
        <p className="font-medium">{`${data.name}: ${data.value}%`}</p>
        <div className="mt-1">
          <p className="text-xs text-gray-400">Top Keywords:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {data.keywords.map((keyword: string) => (
              <span
                key={keyword}
                className="text-xs px-1.5 py-0.5 rounded bg-[#444] text-white"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SentimentChart = () => {
  return (
  <Card className="bg-[#222222] border-[#cde6f9]">
    <div className="h-[320px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">Sentiment Breakdown</CardTitle>
        <CardDescription className="text-muted-foreground">
          <span className="mydiv">
          AI-detected sentiment in comments on your posts
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        <span className="circlegreen"></span>
        <span className="mydiv"> Positive </span>

        <span className="circleblue"></span>
        <span className="mydiv"> Neutral </span>

        <span className="circlered"></span>
        <span className="mydiv"> Negative </span>

        </div>
      </CardContent>
      </div>
    </Card>
  );
};

export default SentimentChart;
