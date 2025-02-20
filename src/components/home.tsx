import React from "react";
import Header from "./Header";
import QRScanner from "./QRScanner";
import StatusBoard from "./StatusBoard";

interface HomeProps {
  userName?: string;
  userAvatar?: string;
  onHistoryClick?: () => void;
  onProfileClick?: () => void;
  onLogoutClick?: () => void;
  onQRScanSuccess?: (qrData: string) => void;
  onQRScanError?: (error: string) => void;
  employees?: Array<{
    id: string;
    name: string;
    status: "Present" | "Absent" | "Late";
    timestamp: string;
    avatarUrl: string;
  }>;
}

const Home = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onHistoryClick = () => console.log("History clicked"),
  onProfileClick = () => console.log("Profile clicked"),
  onLogoutClick = () => console.log("Logout clicked"),
  onQRScanSuccess = (qrData: string) => console.log("QR Scan Success:", qrData),
  onQRScanError = (error: string) => console.log("QR Scan Error:", error),
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
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header
        userName={userName}
        userAvatar={userAvatar}
        onHistoryClick={onHistoryClick}
        onProfileClick={onProfileClick}
        onLogoutClick={onLogoutClick}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="w-full lg:w-auto flex justify-center">
            <QRScanner
              onScanSuccess={onQRScanSuccess}
              onScanError={onQRScanError}
              isActive={true}
            />
          </div>

          <div className="w-full flex justify-center">
            <StatusBoard employees={employees} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
