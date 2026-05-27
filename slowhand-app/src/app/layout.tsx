import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slowhand · A tribute to Eric Clapton · for Woody",
  description:
    "Every band Eric Clapton played in, every record he made, the musicians he made them with, and the sheet music for the songs that mattered. A gift for Keith \"Woody\" Woodeshick, from Jason Chletsos.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
