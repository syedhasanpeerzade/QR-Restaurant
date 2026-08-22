import type { Metadata } from "next";
import QRContent from "./QRContent";

export const metadata: Metadata = {
  title: "QR Code — Saffron Kitchen",
  description: "Scan the QR code to view our digital menu.",
};

export default function QRPage() {
  return <QRContent />;
}
