import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const topPostsData = [
  {
    id: "post1",
    name: "Beach Day Vlog",
    engagement: 423,
    thumbnail: "https://placehold.co/100x100/222222/33C3F0?text=🏖️",
    date: "2023-05-10",
    url: "#",
  },
  {
    id: "post2",
    name: "Unboxing New Tech",
    engagement: 387,
    thumbnail: "https://placehold.co/100x100/222222/9b87f5?text=📦",
    date: "2023-05-15",
    url: "#",
  },
  {
    id: "post3",
    name: "Morning Routine 2023",
    engagement: 352,
    thumbnail: "https://placehold.co/100x100/222222/D946EF?text=☀️",
    date: "2023-05-20",
    url: "#",
  },
  {
    id: "post4",
    name: "Gaming Setup Tour",
    engagement: 298,
    thumbnail: "https://placehold.co/100x100/222222/6EE7B7?text=🎮",
    date: "2023-05-25",
    url: "#",
  },
];

const chartConfig = {
  engagement: {
    label: "Engagement",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#333] p-3 rounded-md shadow-lg border border-[#cde6f9] text-white">
        <div className="flex items-center gap-3">
          <img
            src={data.thumbnail}
            alt={data.name}
            className="w-10 h-10 rounded"
          />
          <div>
            <p className="font-medium">{data.name}</p>
            <p className="text-xs text-gray-400">{data.date}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            <span className="font-bold text-[#9b87f5]">{data.engagement}</span>{" "}
            total engagements
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const TopPostsChart = () => {
  return (
    <Card className="bg-[#222222] border-[#cde6f9]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">
          Top Performing Posts
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Posts with highest engagement rates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[280px] overflow-auto mt-2">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={topPostsData.length * 60}>

              <BarChart
                layout="vertical"
                data={topPostsData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={150}
                  axisLine={false}
                  tickLine={false}
                  tick={({ x, y, payload }) => {
                    const post = topPostsData.find(
                      (p) => p.name === payload.value
                    );
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <foreignObject width="130" height="50" x="-140" y="-25">
                          <div className="flex items-center h-full">
                            <img
                              src={post?.thumbnail}
                              alt={post?.name}
                              className="w-8 h-8 rounded mr-3"
                            />
                            <span className="text-xs truncate block w-[90px] text-white">
                              {payload.value}
                            </span>
                          </div>
                        </foreignObject>
                      </g>
                    );
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="engagement"
                  fill="url(#colorGradient)"
                  radius={[0, 4, 4, 0]}
                  barSize={20}
                  isAnimationActive={false}
                  activeBar={{ fill: "url(#colorGradient)" }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9b87f5" />
                    <stop offset="100%" stopColor="#33C3F0" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPostsChart;
