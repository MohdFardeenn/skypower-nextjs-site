import React from "react";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
      <div className="absolute right-0 bottom-0 w-full h-full flex justify-end items-center opacity-80">
        <div className="relative flex space-x-6 mr-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-40 h-96 rounded-full bg-gradient-to-t from-green-700 to-green-500"
              style={{
                transform: `translateY(${item * 20}px) rotate(${item * 2}deg)`,
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gray-800 border border-green-500 text-green-400 text-xs">
            Leading Next Gen Battery Revolution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Power Your <span className="text-green-400">Future</span> With
            <br /> Innovation and Reliability
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Sky Power provides high-performance, long-lasting rechargeable
            batteries for all your needs. Eco-friendly solutions for battery.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors">
              Explore Products
            </button>
            <button className="px-8 py-3 bg-transparent border border-green-500 text-green-400 hover:bg-green-900/30 font-medium rounded-md transition-colors flex items-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
