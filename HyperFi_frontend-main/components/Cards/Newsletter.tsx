import React from "react";
import Gradient from "@/public/assets/gradient.jpg";
import Image from "next/image";

function Newsletter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={Gradient.src}
          height={400}
          width={1200}
          className="w-full h-96 object-cover"
          alt="Bitcoin DeFi Newsletter Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 mix-blend-overlay"></div>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 md:p-12">
          <h2 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-6 text-center">
            Stay Updated on Bitcoin DeFi
          </h2>
          <p className="text-gray-800 md:w-2/3 lg:w-1/2 font-medium text-center mb-8">
            Subscribe to receive the latest updates on Bitcoin DeFi opportunities, 
            Citrea developments, and exclusive HyperFi features to maximize your BTC yield.
          </p>
          
          <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  className="w-full px-5 py-4 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-sm"
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />
              </div>
              <button className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-700 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
