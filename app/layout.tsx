import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "INTERVIEW MATE - AI-Powered Mock Interviews",
  openGraph: {
    title: "INTERVIEW MATE - AI-Powered Mock Interviews",
    description:
      "INTERVIEW MATE is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://ai-mock-interview.vercel.app//opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTERVIEW MATE - AI-Powered Mock Interviews",
    description:
      "INTERVIEW MATE is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://ai-mock-interview.vercel.app//opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://ai-mock-interview.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
