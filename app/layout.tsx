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
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
