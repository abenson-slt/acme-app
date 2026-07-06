import type { Metadata } from "next";
import "@acme/design-system/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACME Parts Portal",
  description:
    "Search, compare, and order aerospace parts from certified suppliers with real-time inventory and compliance documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
