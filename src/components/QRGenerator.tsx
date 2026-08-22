"use client";

import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import { useRef, useCallback } from "react";

interface QRGeneratorProps {
  url: string;
  size?: number;
}

export default function QRGenerator({ url, size = 200 }: QRGeneratorProps) {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const scale = 2;
    canvas.width = size * scale;
    canvas.height = size * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const link = document.createElement("a");
      link.download = "menu-qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgStr);
  }, [size]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={qrRef}
        className="bg-white p-4 rounded-2xl shadow-sm border border-border"
      >
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          bgColor="#ffffff"
          fgColor="#1a1a1a"
        />
      </div>
      <p className="text-sm text-muted text-center">Scan to View Menu</p>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors focus:outline-none focus:underline"
        aria-label="Download QR code"
      >
        <Download size={16} />
        Download QR Code
      </button>
    </div>
  );
}
