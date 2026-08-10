import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
  description:
    "Professional English communication, international conference operations and human-centred digital products.",
  openGraph: {
    title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
    description:
      "Professional English communication, international conference operations and human-centred digital products.",
    type: "website",
    siteName: "Katie Pirsoaga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
    description:
      "Professional English communication, international conference operations and human-centred digital products.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">{children}</body>
    </html>
  );
}
