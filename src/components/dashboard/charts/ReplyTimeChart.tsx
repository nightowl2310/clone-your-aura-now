
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";

// Sample data for the chart
const replyTimeData = [
  {
    name: "AI Reply",
    value: 3, // minutes
    color: "#33C3F0",
  },
  {
    name: "Manual Reply",
    value: 126, // minutes
    color: "#9b87f5",
  },
];

const ReplyTimeChart = () => {
  return (
    <Card className="bg-[#222222] border-[#333333]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">Average Reply Time</CardTitle>
        <CardDescription className="text-muted-foreground">
          AI replies vs. your manual response time
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={replyTimeData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              {replyTimeData.map((entry, index) => (
                <Bar
                  key={`bar-${index}`}
                  dataKey="value"
                  fill={entry.color}
                  radius={4}
                  barSize={30}
                  background={{ fill: "#333333" }}
                >
                  {replyTimeData.map((_, index) => (
                    <Cell key={`cell-${index}`} />
                  ))}
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {replyTimeData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded mr-2"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xl font-bold">
                  {item.name === "AI Reply" ? `${item.value} mins` : `${Math.floor(item.value/60)}h ${item.value % 60}m`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReplyTimeChart;
