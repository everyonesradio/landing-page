import React from "react";
import Image from "next/image";
import DiscordLogo from "../../public/logos/discord.webp";
import GitHubLogo from "../../public/logos/github.webp";

const WelcomeBanner = () => {
  const handleJoinWaitlist = () => {
    window.open("https://1c9jh8g7jq6.typeform.com/to/SawCuFuh", "_blank");
  };

  return (
    <>
      <div className='items-center justify-center lg:flex flex-col lg:pw-24 mb-5'>
        <div className='text-left text-white'>
          <h1 className='text-6xl md:text-8xl lg:text-16xl leading-normal font-bold text-gradient select-none'>
            hi,
          </h1>
          <h1 className='text-6xl md:text-8xl lg:text-16xl leading-normal font-bold text-gradient select-none'>
            everyone
          </h1>
          <h2 className='text-lg font-semibold lg:text-xl '>
            an open-source community for music & technology
          </h2>
        </div>
      </div>
      <button
        className='overlay__btn m-4 select-none cursor-pointer'
        onClick={handleJoinWaitlist}
      >
        Join the waitlist
      </button>
      <div className='mt-auto'>
        <div className='flex justify-center space-x-5 hover:cursor-pointer'>
          {/* Social links */}
          <a
            href='https://discord.gg/eZZVYKKnPT'
            target='blank'
            className='text-gray-500 flex justify-center items-center hover:text-gray-700 h-8 select-none cursor-pointer'
          >
            <Image
              src={DiscordLogo}
              alt='Discord Logo'
              width={24}
              height={24}
            />
          </a>
          <a
            href='https://github.com/everyonesradio'
            target='blank'
            className='text-gray-500 flex justify-center items-center hover:text-gray-700 h-8 select-none cursor-pointer'
          >
            <Image src={GitHubLogo} alt='GitHub Logo' width={24} height={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
