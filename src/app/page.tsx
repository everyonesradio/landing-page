'use client'
import React from "react";
import Image from "next/image";
import DiscordLogo from "../../public/logos/discord.webp";
import GitHubLogo from "../../public/logos/github.webp";

const Home = () => {
  const handleJoinWaitlist = () => {
    console.log("You're all signed up");
 };

  return (
    <main className="flex flex-col items-center justify-evenly m-5 font-mono">
      <div className="w-full items-center justify-center lg:flex flex-col lg:pw-24 mb-5">
        <div className="text-left text-white">
          <h1 className="text-8xl lg:text-16xl leading-normal font-bold text-gradient">hi,</h1>
          <h1 className="text-8xl lg:text-16xl leading-normal font-bold text-gradient">everyone</h1>
          <h2 className="text-lg font-semibold lg:text-xl">an open-source community for music & technology</h2>
        </div>
      </div>
      <button className="overlay__btn m-4" onClick={handleJoinWaitlist}>Join the waitlist</button>
      <div className="mt-auto">
        <div className="flex justify-center space-x-5">
          {/* Social links */}
          <a href="https://discord.gg/eZZVYKKnPT" target='blank' className="text-gray-500 flex justify-center items-center hover:text-gray-700">
            <Image src={DiscordLogo} alt="Discord Logo" width={24} height={24} />
          </a>
          <a href="https://github.com/e-veryone" target='blank' className="text-gray-500 flex justify-center items-center hover:text-gray-700">
            <Image src={GitHubLogo} alt="GitHub Logo" width={24} height={24} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;