import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Clock } from "lucide-react";

interface StatusCardProps {
  name?: string;
  status?: "Present" | "Absent" | "Late";
  timestamp?: string;
  avatarUrl?: string;
}

const StatusCard = ({
  name = "John Doe",
  status = "Present",
  timestamp = "9:00 AM",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: StatusCardProps) => {
  const statusColors = {
    Present: "bg-green-500",
    Absent: "bg-red-500",
    Late: "bg-yellow-500",
  };

  return (
    <Card className="w-80 bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{name}</h3>
          <Badge
            variant="secondary"
            className={`${statusColors[status]} text-white`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
