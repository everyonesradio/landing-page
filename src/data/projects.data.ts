// Move data to mongodb collection
import { GridItemData } from "@/types/grid";

export const priorityTechList = [
  "Streaming",
  "Touring",
  "AI",
  "Analytics",
  "Distribution",
  "Events",
  "Merch",
];
export const projectsGridData: GridItemData[] = [
  {
    title: "Tidal",
    description:
      "Build with TIDAL's vast library of high-fidelity music and exclusive content.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/MemoryDealer.png",
    repoUrl: "https://developer.tidal.com/",
  },
  {
    title: "Spotify",
    description:
      "Integrate Spotify's collection of 100 million songs, 5 million podcasts, and much more into your next project.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/BouncerGPT.png",
    repoUrl: "https://developer.spotify.com/",
  },
  {
    title: "Apple Music",
    description:
      "Use Apple Music API to access information about media in the Apple Music Catalog and a user's personal iCloud Music Library",
    tech: ["Streaming"],
    imageUrl: "/img/projects/AudioHijack.png",
    repoUrl: "https://developer.apple.com/documentation/applemusicapi/",
  },
  {
    title: "Songkick",
    description:
      "Platform for discovering live music events, tours, and concerts.",
    tech: ["Touring", "Events"],
    imageUrl: "/img/projects/AreYouHere.png",
    repoUrl: "https://www.songkick.com/developer",
  },
  {
    title: "AudioShake",
    description:
      "AI-powered tool for separating audio stems and creating custom music tracks.",
    tech: ["AI", "Stem Separation"],
    imageUrl: "/img/projects/MetalMountain.gif",
    repoUrl: "https://developer.audioshake.ai/",
  },
  {
    title: "SoundCloud",
    description:
      "Platform for sharing and discovering music, featuring a diverse range of genres and artists.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/PressureRoom.png",
    repoUrl: "https://developers.soundcloud.com/docs/api/guide",
  },
  {
    title: "Revelator",
    description:
      "Provides analytics and distribution services for music industry professionals.",
    tech: ["Analytics", "Distribution"],
    imageUrl: "/img/projects/Carnival_Games.gif",
    repoUrl: "https://www.revelator.com/product/revelator-api",
  },
  {
    title: "Dice",
    description:
      "Ticketing platform for live events and concerts, offering seamless booking experiences.",
    tech: ["Touring", "Events"],
    imageUrl: "/img/projects/Cadoo.webp",
    repoUrl:
      "https://partners-endpoint.dice.fm/graphql/docs/index.html#introduction",
  },
  {
    title: "Ticketmaster",
    description:
      "Leading ticketing platform for concerts, sports events, and live entertainment.",
    tech: ["Touring", "Events"],
    imageUrl: "/img/projects/shareables_demo.gif",
    repoUrl:
      "https://developer.ticketmaster.com/products-and-docs/apis/getting-started/",
  },
  {
    title: "Mixcloud",
    description:
      "Platform for hosting and discovering DJ mixes, radio shows, and podcasts.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/BILogo.jpeg",
    repoUrl: "https://www.mixcloud.com/developers/",
  },
  {
    title: "Musiio",
    description:
      "AI-powered audio tagging and content recommendation platform for music.",
    tech: ["AI", "Audio Tagging"],
    imageUrl: "/img/projects/bubbl.jpg",
    repoUrl: "https://docs.musiio.com/tag/",
  },
  {
    title: "LabelGrid",
    description:
      "Distribution platform for independent music labels, providing tools for managing and promoting music catalogs.",
    tech: ["Distribution"],
    imageUrl: "/img/projects/liquidity.png",
    repoUrl: "https://developers.labelgrid.com/",
  },
  {
    title: "Audiomack",
    description:
      "Platform for discovering and promoting independent artists, featuring interactive maps and playlists.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/indiepin_tutorial.gif",
    repoUrl: "https://audiomack.com/data-api/docs",
  },
  {
    title: "Bandcamp",
    description:
      "Online marketplace for independent musicians to sell and distribute their music.",
    tech: ["Streaming", "Merch"],
    imageUrl: "/img/projects/GIF_Lyrics2.png",
    repoUrl: "https://bandcamp.com/developer",
  },
  {
    title: "Deezer",
    description:
      "Music streaming platform with personalized recommendations and social features.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/MessageScheduled.png",
    repoUrl: "https://developers.deezer.com/guidelines",
  },
  {
    title: "Bandsintown",
    description:
      "Event discovery platform for finding concerts and live music events near you.",
    tech: ["Touring", "Events"],
    imageUrl: "/img/projects/ambient1-min.png",
    repoUrl: "https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0",
  },
  {
    title: "Shazam",
    description:
      "AI-powered music recognition tool for identifying songs and discovering new music.",
    tech: ["AI", "Music Recognition"],
    imageUrl: "/img/projects/fractal2.png",
    repoUrl: "https://developer.apple.com/shazamkit/",
  },
  {
    title: "AI Mastering",
    description:
      "AI-based mastering service for musicians and producers, providing high-quality audio processing.",
    tech: ["AI", "Mastering"],
    imageUrl: "/img/projects/juhnmk2-min.png",
    repoUrl: "https://aimastering.com/api_docs/",
  },
  {
    title: "Genius",
    description:
      "Lyrics database and annotation platform, offering insights into song meanings and interpretations.",
    tech: ["Lyrics"],
    imageUrl: "/img/projects/intergalactic4-min.png",
    repoUrl: "https://docs.genius.com/#/getting-started-h1",
  },
  {
    title: "Cyanite.ai",
    description: "AI-powered audio tagging and music discovery platform.",
    tech: ["AI", "Audio Tagging"],
    imageUrl: "/img/projects/heatwav5-min.png",
    repoUrl: "https://api-docs.cyanite.ai/",
  },
  {
    title: "Pandora",
    description:
      "Internet radio service with personalized stations based on user preferences.",
    tech: ["Streaming"],
    imageUrl: "/img/projects/recombinators1-min.png",
    repoUrl: "https://developer.pandora.com/docs/key-concepts/apis/",
  },
  {
    title: "Chartmetric",
    description:
      "Analytics platform for music industry professionals, offering insights into artist and track performance.",
    tech: ["Analytics"],
    imageUrl: "/img/projects/portfolio.png",
    repoUrl: "https://chartmetric.com/features/developer-api",
  },
  {
    title: "Discogs",
    description:
      "Online database and marketplace for music collectors, featuring a vast catalog of vinyl records and CDs.",
    tech: ["Merch"],
    imageUrl: "/img/projects/portfolio.png",
    repoUrl: "https://www.discogs.com/developers/#",
  },
  {
    title: "Luminate",
    description:
      "Analytics platform for music streaming services, providing insights into user behavior and trends.",
    tech: ["Analytics"],
    imageUrl: "/img/projects/portfolio.png",
    repoUrl:
      "https://app.swaggerhub.com/apis/LUMINATE-DATA/MusicConnect-API/2.2.0",
  },
  {
    title: "Last.fm",
    description:
      "Music discovery platform offering personalized recommendations and insights into music preferences.",
    tech: ["Music Discovery"],
    imageUrl: "/img/projects/portfolio.png",
    repoUrl: "https://www.last.fm/api",
  },
  {
    title: "Musicxmatch",
    description:
      "Lyrics database and synchronization service for music apps and platforms.",
    tech: ["Lyrics"],
    imageUrl: "/img/projects/portfolio.png",
    repoUrl: "https://developer.musixmatch.com/",
  },
];
