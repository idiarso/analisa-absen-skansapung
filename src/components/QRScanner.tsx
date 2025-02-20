import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { Camera, XCircle, CheckCircle2 } from "lucide-react";

interface QRScannerProps {
  onScanSuccess?: (qrData: string) => void;
  onScanError?: (error: string) => void;
  isActive?: boolean;
}

const QRScanner = ({
  onScanSuccess = () => {},
  onScanError = () => {},
  isActive = true,
}: QRScannerProps) => {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Simulated QR scanning functionality
  useEffect(() => {
    if (scanning && isActive) {
      const timer = setTimeout(() => {
        // Simulate successful scan 70% of the time
        if (Math.random() > 0.3) {
          setSuccess(true);
          setError(null);
          onScanSuccess("EMPLOYEE-123");
        } else {
          setError("Could not read QR code. Please try again.");
          onScanError("QR code scan failed");
        }
        setScanning(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [scanning, isActive, onScanSuccess, onScanError]);

  const handleStartScan = () => {
    setScanning(true);
    setSuccess(false);
    setError(null);
  };

  return (
    <Card className="w-[480px] bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="w-6 h-6" />
          QR Code Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
          {scanning ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-blue-500 animate-pulse rounded-lg" />
              <div className="absolute w-full h-1 bg-blue-500 animate-[scan_2s_linear_infinite]" />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {success ? (
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              ) : error ? (
                <XCircle className="w-16 h-16 text-red-500" />
              ) : (
                <Camera className="w-16 h-16 text-gray-400" />
              )}
            </div>
          )}
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              QR code scanned successfully!
            </AlertDescription>
          </Alert>
        )}

        <Button
          className="w-full"
          onClick={handleStartScan}
          disabled={scanning}
        >
          {scanning ? "Scanning..." : "Start Scanning"}
        </Button>
      </CardContent>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </Card>
  );
};

export default QRScanner;
