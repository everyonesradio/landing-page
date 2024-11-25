import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import "./globals.css";

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everyone",
  description: "Open-Source Community for Music & Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='max-w-screen w-screen'>
      <body
        className={`${inter.className} flex flex-col justify-center items-center`}
      >
        {/* Layout UI */}
        <Background />
        <div className='flex flex-grow w-full mx-0'>
          <Navigation />
          <div className='w-full my-24 md:my-14 lg:mx-24 md: mx-14'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
