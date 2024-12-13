"use client";
import React from "react";
import WelcomeBanner from "@/components/welcome-banner";

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center font-mono mx-24 my-8'>
      <WelcomeBanner />
    </main>
  );
};

export default Home;
