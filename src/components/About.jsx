import React from 'react';

const About = () => {
  return (
    <div className="bg-[url('/images/image.jpeg')] bg-cover bg-center text-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#B41C6C] mb-10 drop-shadow-lg">
          About Axie Nightmare
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-white">
          Axie Nightmare is a captivating NFT project that blends art, storytelling, and blockchain technology into a unique experience for collectors and gamers alike. 
          Inspired by the world of Axies—adorable creatures from a mystical universe—Axie Nightmare delves into the darker, more mysterious aspects of their lore. This project invites you to explore untold stories, eerie dimensions, and thrilling adventures through beautifully crafted digital art pieces.
        </p>

        <h2 className="text-3xl font-bold text-center text-[#B41C6C] mb-6 underline decoration-pink-500 decoration-2">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-white">
          Our mission is to redefine how digital art and storytelling merge in the NFT space. Axie Nightmare aims to create an immersive experience where collectors become part of a larger narrative. By owning an Axie Nightmare NFT, you don't just acquire an art piece—you gain access to an evolving world filled with secrets, challenges, and rewards.
        </p>

        <h2 className="text-3xl font-bold text-center text-[#B41C6C] mb-6 underline decoration-pink-500 decoration-2">
          Why Choose Axie Nightmare?
        </h2>
        <ul className="list-disc pl-8 text-lg leading-relaxed mb-8 text-white space-y-4">
          <li>
            <strong className="text-[#B41C6C]">Exclusive Artwork:</strong> Every Axie Nightmare NFT is hand-drawn by talented artists with a passion for fantasy and storytelling.
          </li>
          <li>
            <strong className="text-[#B41C6C]">Dynamic Ecosystem:</strong> Each NFT unlocks special features, including lore updates, community events, and limited-edition releases.
          </li>
          <li>
            <strong className="text-[#B41C6C]">Community-Driven:</strong> Join a vibrant community of enthusiasts, collectors, and creators shaping the future of Axie Nightmare.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-center text-[#B41C6C] mb-6 underline decoration-pink-500 decoration-2">
          Join the Nightmare
        </h2>
        <p className="text-lg leading-relaxed text-white">
          Ready to step into the unknown? Explore the hauntingly beautiful world of Axie Nightmare and become a part of the story. Follow us on social media, join our Discord community, and stay tuned for upcoming drops and events. Together, we’ll unravel the mysteries of the Axie Nightmare universe.
        </p>
      </div>
    </div>
  );
};

export default About;
