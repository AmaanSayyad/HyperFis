import React from "react";
import Ecto from "@/public/assets/ecto.png";
import Sword from "@/public/assets/swordshield.png";
import Pestle from "@/public/assets/pestleandmortar.png";
import Locker from "@/public/assets/locker.png";
import Card from "@/components/Cards/Card";

const Feature = () => {
  return (
    <div className="mt-10 py-16 bg-black rounded-xl mx-4 shadow-2xl">
      <h1 className="font-extrabold font-Poppins text-4xl md:text-6xl text-center text-white mb-8">
        Bitcoin DeFi Features
      </h1>
      <p className="text-center text-gray-300 max-w-3xl mx-auto px-6 mb-16">
        HyperFi leverages Citrea's zkEVM Layer 2 solution to bring powerful DeFi capabilities directly to Bitcoin holders, without wrapping or bridging.
      </p>
      
      <div className="flex flex-row justify-center flex-wrap px-6 md:px-10 gap-8">
        <Card
          img={Sword}
          title={"Native Bitcoin Integration"}
          description={
            "Interact directly with your BTC without wrapping tokens or bridging to other chains. HyperFi uses Citrea's zkEVM to enable true Bitcoin DeFi."
          }
        />
        <Card
          img={Ecto}
          title={"Bitcoin APY Aggregator"}
          description={
            "Compare yields across multiple Bitcoin DeFi protocols with our 'Trivago of Bitcoin DeFi' that ranks opportunities using our proprietary Power Index algorithm."
          }
        />
        <Card
          img={Pestle}
          title={"Bitcoin Compound Calculator"}
          description={
            "Project the growth of your Bitcoin investments over time with our specialized calculator that accounts for Bitcoin-specific factors in yield calculations."
          }
        />
        <Card
          img={Locker}
          title={"Bitcoin Yield Strategies"}
          description={
            "Access multiple yield-generating strategies specifically designed for Bitcoin, including lending, liquidity provision, and staking on Citrea's Layer 2."
          }
        />
      </div>
      
      <div className="mt-16 text-center">
        <a href="/defi" className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg">
          Explore All Features
        </a>
      </div>
    </div>
  );
};

export default Feature;
