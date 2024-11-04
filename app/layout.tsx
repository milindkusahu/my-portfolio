import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://milindsahu.com"),
  title: "Milind Kumar Sahu | React & JavaScript Developer",
  description:
    "Front-end developer passionate about creating fast, responsive web applications. Expertise in React.js, Node.js, and modern frameworks.",
  keywords: [
    "Milind Kumar Sahu",
    "Front-End Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer India",
    "React.js",
    "Node.js",
    "MongoDB",
    "Full Stack Development",
    "UI/UX Development",
    "Responsive Web Design",
    "Portfolio",
    "Jharkhand Developer",
  ],
  authors: [{ name: "Milind Kumar Sahu" }],
  creator: "Milind Kumar Sahu",
  publisher: "Milind Kumar Sahu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "http://localhost:3000/",
    siteName: "Milind Kumar Sahu Portfolio",
    title: "Milind Kumar Sahu | Front-End React Developer",
    description:
      "Front-end developer specializing in React.js, creating responsive and optimized web applications. Explore my projects in e-commerce, music streaming, and travel platforms.",
    images: [
      {
        url: "/front-end-developer-milind-kumar-sahu.png",
        width: 1200,
        height: 630,
        alt: "Milind Kumar Sahu - Front-End Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milind Kumar Sahu | Front-End React Developer",
    description:
      "Front-end developer specializing in React.js, creating responsive and optimized web applications. Explore my projects in e-commerce, music streaming, and travel platforms.",
    images: ["/front-end-developer-milind-kumar-sahu.png"],
    creator: "@milindkusahu",
  },
  verification: {
    google: "B6yjb-zjQX91f7RRC4vCfHTCo-pq-QDrxvSOykVMs_I",
  },
  alternates: {
    canonical: "http://localhost:3000/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
