import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  type: "comment" | "like" | "follow" | "mention";
  content: string;
  time: string;
  isNew?: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "n1",
    type: "comment",
    content: "3 new comments just in! AI has replied to 2.",
    time: "Just now",
    isNew: true,
  },
  {
    id: "n2",
    type: "like",
    content: "Your post received 15 new likes in the last hour.",
    time: "10 minutes ago",
  },
  {
    id: "n3",
    type: "follow",
    content: "5 new followers today! AI welcomed them all.",
    time: "25 minutes ago",
  },
  {
    id: "n4",
    type: "mention",
    content: "You were mentioned in 2 comments. AI responded.",
    time: "45 minutes ago",
  },
];

const getIconForType = (type: string) => {
  switch (type) {
    case "comment":
      return <MessageSquare className="h-5 w-5 text-[#9b87f5]" />;
    default:
      return <Bell className="h-5 w-5 text-[#9b87f5]" />;
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications
  );
  const [hasNewItems, setHasNewItems] = useState(true);

  useEffect(() => {
    const hasNew = notifications.some((notif) => notif.isNew);
    setHasNewItems(hasNew);
  }, [notifications]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({
        ...notif,
        isNew: false,
      }))
    );
  };

  return (
<Card className="bg-[#222222] border border-[#cde6f9] text-white w-full max-w-3xl mx-auto">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Live Updates
            {hasNewItems && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#9b87f5] text-white">
                New
              </span>
            )}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-gray-400 hover:text-white"
            onClick={markAllAsRead}
          >
            Mark all read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scroll">
          {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex p-3 rounded-md transition-colors duration-200 ${
            notification.isNew
              ? "bg-[#9b87f5]/10 border border-[#cde6f9]/30 hover:bg-[#9b87f5]/20"
              : "bg-[#333333]/50 hover:bg-[#444444]"
          }`}
        >


              <div className="mr-3 mt-1">{getIconForType(notification.type)}</div>
              <div className="flex-1">
                <p className="text-sm text-white">{notification.content}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;
