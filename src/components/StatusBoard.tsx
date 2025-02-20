import React from "react";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import StatusCard from "./StatusCard";

interface Employee {
  id: string;
  name: string;
  status: "Present" | "Absent" | "Late";
  timestamp: string;
  avatarUrl: string;
}

interface StatusBoardProps {
  employees?: Employee[];
}

const StatusBoard = ({
  employees = [
    {
      id: "1",
      name: "John Doe",
      status: "Present",
      timestamp: "9:00 AM",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: "2",
      name: "Jane Smith",
      status: "Late",
      timestamp: "9:30 AM",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    {
      id: "3",
      name: "Bob Johnson",
      status: "Absent",
      timestamp: "--:--",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    },
  ],
}: StatusBoardProps) => {
  return (
    <Card className="w-full max-w-[800px] h-[600px] bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Employee Status Board</h2>
      <ScrollArea className="h-[500px] w-full rounded-md">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {employees.map((employee) => (
              <StatusCard
                key={employee.id}
                name={employee.name}
                status={employee.status}
                timestamp={employee.timestamp}
                avatarUrl={employee.avatarUrl}
              />
            ))}
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default StatusBoard;
