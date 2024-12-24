function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[100vh] bg-no-repeat flex items-center justify-center text-center">
      <div>
        <h2 className="text-8xl text-white font-bold">Collectible Axies Race to Nightmare Body</h2>
        <p className="text-gray-300 mt-4 text-2xl">Explore, collect, and invest in exclusive digital artwork.</p>
        <a href="#gallery" className="mt-10 inline-block bg-[#4A1F48] hover:bg-[#B41C6C] text-white px-5 py-3 rounded">
          View Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
