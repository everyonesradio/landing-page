import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import "./globals.css";

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
        <div className='flex flex-grow w-full mx-0'>
          <Navigation />
          <div className='w-full'>{children}</div>
        </div>
      </body>
    </html>
  );
}
