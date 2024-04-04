import React from "react";

const About = () => {
  return (
    <div className="w-full items-center justify-start lg:flex flex-col lg:pw-24 overlay">
      <div className="text-center text-white">
        <h1 className="text-2xl lg:text-3xl leading-normal font-bold text-gradient">COMMUNITY MANIFESTO</h1>
      </div>
      <p className="text-base mt-4 text-black font-bold p-1">
        Everyone is an open-source community standing at the intersection of music and technology. Our mission is to foster community-led innovation by prioritizing shared experiences over individual preferences through open-source technology.
        <br/><br/>We believe that music today has a software problem. In particular, while technology has given us new ways to connect with each other, the way music is experienced is drifting towards individual isolation. Our goal is to address this by leveraging open-source technology to bridge the gap between artists and their fanbase.
        <br/><br/>Music transcends individual experiences; it is inherently communal. Therefore, it warrants technology that not only mirrors but also enhances this communal essence. Through open-source technology, the quality exchange of community knowledge will forge new paths in the music landscape, driving innovation and fostering deeper connections between artists and their audience. This collaborative environment allows for the testing, evaluation, and revitalization of both new and existing ideas; empowering both artists and developers to explore and experiment with fresh concepts, ultimately enriching the music experience with the support of the community.
        <br/><br/>At Everyone, we&apos;re committed to fostering cross-disciplinary collaboration between artists and developers through our open-source initiative. By placing emphasis on community-driven innovation, we believe in empowering both creators and technologists to shape the future of music. As active members of our community, individuals contribute their expertise, insights, and creativity, collectively driving the development of innovative products and solutions.
      </p>
    </div>
  );
};

export default About;