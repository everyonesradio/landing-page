import Image from 'next/image'
import '../styles/pages/landing.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

    <div className="w-full items-center justify-center lg:flex">
      <div className="logo">
        <Image src="/logos/er_logo.webp" alt="Everyone's Radio Logo"  width={50} height={10} layout="responsive"/>
      </div>
      <div className="text-slate-800">
        <div className="text-center">
        <h1>Everyone's Radio</h1>
        <h2>An Open-Source Community for Music & Technology</h2>
        </div>
        <p>
          Everyone's Radio is an open-source community at the intersection of music and technology. Our primary mission revolves around reshaping music and artistic communities by fostering crucial connections among creatives, industry change-makers, and a diverse array of professionals through open-source technology projects. This inclusive circle encompasses software engineers, A&Rs, DJs, producers, musicians, and digital marketers.
          At the core of our ethos, we see technology as an opportunity for artists to share their journey beyond streaming services and social media. Our team is focused on building sustainable artist communities on and offline. As a forward-looking community, we provide an extensive array of solutions, ranging from strategic album marketing campaigns, radio programming, IRL parties and hangouts, and immersive web app experiences.
          What truly makes Everyone's Radio stand out is our unwavering commitment to innovation, seamless collaboration, and unparalleled transparency. In our network, it's not only about sharing what you know but building a framework around that knowledge for other people to benefit from.
          In a world where technology significantly influences the careers of artists all around the world, Everyone's Radio recognizes the significance of a global perspective. Our open-source community stretches across continents, encompassing talents from Lagos, Accra, London, New York, Washington D.C., and Montreal. This rich diversity forms the foundation of our mission, as we harness the collective brilliance and shared experiences of creatives and tech-natives from various corners of the globe.
          Our primary mission remains steadfast—reshaping the music environment by fostering crucial connections among artists, record labels, and a diverse array of professionals united by our passion for music and technology. want to give artists the opportunity to actually contribute to the development of communities and services that will have a direct impact on their creative journeys. We believe that the key to success for modern artists lies in building strong and sustainable connections with their fans within a more equitable system.
          In essence, Everyone's Radio serves as a tool to demystify the relationship between music and technology by providing artists and their teams with unparalleled creative control over their music and its consumption. We recognize that the tech industry can sometimes be "exclusive", with barriers of entry that are often too high and too white. Our initiative is to bridge this gap, ensuring that artists from diverse backgrounds have the means to leverage technology for their artistic pursuits. Through our open-source community, we are striving to level the playing field, making technology an empowering ally rather than a daunting adversary. By breaking down the walls that have limited access and amplifying global perspectives, we aim to create a space where innovation flourishes, collaboration is second nature, and the artist's journey is defined by their own vision, not by barriers.
        </p>
      </div>
    </div>
      </div>
    </main>
  )
}
