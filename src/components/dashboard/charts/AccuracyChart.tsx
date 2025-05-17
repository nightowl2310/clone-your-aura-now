
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

// Sample data for the chart
const accuracyData = [
  { name: "Accepted", value: 89, color: "#6EE7B7" },
  { name: "Edited", value: 8, color: "#FBBF24" },
  { name: "Rejected", value: 3, color: "#FB7185" },
];

const chartConfig = {
  Accepted: {
    label: "Accepted",
    theme: {
      light: "#6EE7B7",
      dark: "#6EE7B7",
    },
  },
  Edited: {
    label: "Edited",
    theme: {
      light: "#FBBF24",
      dark: "#FBBF24",
    },
  },
  Rejected: {
    label: "Rejected",
    theme: {
      light: "#FB7185",
      dark: "#FB7185",
    },
  },
};

const AccuracyChart = () => {
  return (
    <Card className="bg-[#222222] border-[#333333]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">Response Accuracy</CardTitle>
        <CardDescription className="text-muted-foreground">
          How accurate your AI's responses have been
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-40 h-40">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={accuracyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={55}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                    strokeWidth={3}
                    stroke="#222222"
                  >
                    {accuracyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="grid grid-cols-1 gap-3 mt-4 lg:mt-0 lg:ml-8">
            {accuracyData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }} />
                <span className="text-sm mr-2">{item.name}:</span>
                <span className="text-sm font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccuracyChart;
