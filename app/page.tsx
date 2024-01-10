import Image from 'next/image'
import '../styles/pages/landing.css';
import DiscordLogo from '../public/logos/discord.webp'; // Replace with your actual SVG file path
import EveryonesRadioLogo from '../public/logos/er.webp';
import GitHubLogo from '../public/logos/github.webp';

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-evenly p-5 font-mono">
    <div className="w-full items-center justify-center lg:flex flex-col lg:pw-24 mb-5">
      <div className="logo mx-auto flex flex-row items-center justify-center">
        <Image src={EveryonesRadioLogo} alt="Everyone's Radio Logo"  width={175} height={10}/>
      </div>
      <div>
        <div className="text-center  bg-black text-white">
        <h1 className="text-2xl lg:text-3xl leading-normal">Everyone's Radio</h1>
        <h2 className="text-lg lg:text-xl">An Open-Source Community for Music & Technology</h2>
        </div>
        <p className="text-base mt-4 text-white bg-black p-1">
          Everyone's Radio is an open-source community at the intersection of music and technology. Our primary mission revolves around reshaping music and artistic communities by fostering crucial connections among creatives, industry change-makers, and a diverse array of professionals through open-source technology projects. This inclusive circle encompasses software engineers, A&Rs, DJs, producers, musicians, and digital marketers.
          <br/><br/>At the core of our ethos, we see technology as an opportunity for artists to share their journey beyond streaming services and social media. Our team is focused on building sustainable artist communities on and offline. As a forward-looking community, we provide an extensive array of solutions, ranging from strategic album marketing campaigns, radio programming, IRL parties and hangouts, and immersive web app experiences.
          <br/><br/>What truly makes Everyone's Radio stand out is our unwavering commitment to innovation, seamless collaboration, and unparalleled transparency. In our network, it's not only about sharing what you know but building a framework around that knowledge for other people to benefit from.
          <br/><br/>In a world where technology significantly influences the careers of artists all around the world, Everyone's Radio recognizes the significance of a global perspective. Our open-source community stretches across continents, encompassing talents from Lagos, Accra, London, New York, Washington D.C., and Montreal. This rich diversity forms the foundation of our mission, as we harness the collective brilliance and shared experiences of creatives and tech-natives from various corners of the globe.
          <br/><br/>Our primary mission remains steadfast—reshaping the music environment by fostering crucial connections among artists, record labels, and a diverse array of professionals united by our passion for music and technology. want to give artists the opportunity to actually contribute to the development of communities and services that will have a direct impact on their creative journeys. We believe that the key to success for modern artists lies in building strong and sustainable connections with their fans within a more equitable system.
          <br/><br/>In essence, Everyone's Radio serves as a tool to demystify the relationship between music and technology by providing artists and their teams with unparalleled creative control over their music and its consumption. We recognize that the tech industry can sometimes be "exclusive", with barriers of entry that are often too high and too white. Our initiative is to bridge this gap, ensuring that artists from diverse backgrounds have the means to leverage technology for their artistic pursuits. Through our open-source community, we are striving to level the playing field, making technology an empowering ally rather than a daunting adversary. By breaking down the walls that have limited access and amplifying global perspectives, we aim to create a space where innovation flourishes, collaboration is second nature, and the artist's journey is defined by their own vision, not by barriers.
        </p>
      </div>
      </div>
      <footer className="mt-auto">
        <div className="flex justify-center space-x-5">
          {/* Social links */}
          <a href="https://discord.gg/8jyJBSDuBe" target='blank' className="text-gray-500 flex justify-center items-center hover:text-gray-700">
            <Image src={DiscordLogo} alt="Discord Logo" width={24} height={24} />
          </a>
          <a href="https://github.com/everyonesradio" target='blank' className="text-gray-500 flex justify-center items-center hover:text-gray-700">
            <Image src={GitHubLogo} alt="GitHub Logo" width={24} height={24} />
          </a>
        </div>
      </footer>
    </main>
  )
}
