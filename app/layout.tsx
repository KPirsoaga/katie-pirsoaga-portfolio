import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://katie-pirsoaga-portfolio.pages.dev"),
  title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
  description:
    "Professional English communication, international conference operations and human-centred digital products.",
  openGraph: {
    title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
    description:
      "Professional English communication, international conference operations and human-centred digital products.",
    url: "https://katie-pirsoaga-portfolio.pages.dev/",
    type: "website",
    siteName: "Katie Pirsoaga",
    images: [
      {
        url: "/linkedin-preview.png",
        width: 1200,
        height: 630,
        alt: "Katie Pirsoaga | Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Pirsoaga | English · Conference Operations · Digital Systems",
    description:
      "Professional English communication, international conference operations and human-centred digital products.",
    images: ["/linkedin-preview.png"],
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
