import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareilly — A City Worth Falling For",
  description: "A warm, modern love letter to Bareilly, Uttar Pradesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
