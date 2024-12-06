"use client";
import React from "react";
import WelcomeBanner from "@/components/welcome-banner";

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center font-mono m-24'>
      <WelcomeBanner />
    </main>
  );
};

export default Home;
