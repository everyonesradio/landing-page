import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import "./globals.css";

const  Background = dynamic(() => import('@/components/Background'), {
  ssr: false
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everyone's Radio",
  description: "Open-Source Community for Music & Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-start h-screen w-full`}>
        {/* Layout UI */}
        <Background />
        <div className="flex flex-grow">
          <div className="my-10">
            <Navigation />
          </div>
          <div className="flex-grow">
            <main>{children}</main>
          </div>
        </div> 
      </body>
    </html>
  );
}
