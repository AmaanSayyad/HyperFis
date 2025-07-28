import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import defi1 from "@/public/assets/defi1.jpg";
import defi2 from "@/public/assets/defi2.jpg";
import defi3 from "@/public/assets/defi3.jpeg";
import defi4 from "@/public/assets/defi4.jpg";
import { Video2 } from "@/components/Livepeer";
import Link from "next/link";

function BitcoinDeFi() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);
  
  return (
    <>
    <Head>
        <title>Bitcoin DeFi | HyperFi</title>
        <meta name="description" content="Explore Bitcoin DeFi opportunities with HyperFi on Citrea's zkEVM Layer 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-orange-400 to-yellow-600 bg-clip-text text-transparent">
            Bitcoin DeFi Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            HyperFi brings the power of decentralized finance to Bitcoin through Citrea's zkEVM Layer 2 solution.
            Access sophisticated DeFi services without wrapping your BTC or bridging to other chains.
          </p>
        </div>
        
        {/* Section 1: What is Bitcoin DeFi */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is Bitcoin DeFi?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Bitcoin DeFi refers to decentralized financial services built specifically for Bitcoin holders. 
                Traditionally, Bitcoin has been limited in its smart contract capabilities compared to chains like Ethereum.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With Citrea's zkEVM Layer 2 solution, Bitcoin can now access the full range of DeFi services 
                while maintaining the security and decentralization of the Bitcoin network.
              </p>
              <div className="bg-black rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-white mb-2">Why Bitcoin DeFi Matters</h3>
                <p className="text-gray-300">
                  Bitcoin represents over 50% of the total crypto market cap, yet most of it sits idle. 
                  Bitcoin DeFi unlocks this capital, allowing holders to earn yield while maintaining exposure to BTC.
            </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={defi1.src}
                  alt="Bitcoin DeFi Concept"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How Citrea Enables Bitcoin DeFi */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How Citrea Enables Bitcoin DeFi
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Citrea is a zkEVM Layer 2 solution built specifically for Bitcoin. It uses zero-knowledge proofs to 
                enable complex smart contract functionality while inheriting Bitcoin's security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.8-1.8A2 2 0 0012.2 2H7.8a2 2 0 00-1.4.6L4.5 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Native Bitcoin</h3>
                  <p className="text-gray-300 text-sm">Use your BTC directly without wrapping</p>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bitcoin Security</h3>
                  <p className="text-gray-300 text-sm">Inherit Bitcoin's robust security model</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Smart Contracts</h3>
                  <p className="text-gray-300 text-sm">Full EVM compatibility for complex DeFi</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Low Fees</h3>
                  <p className="text-gray-300 text-sm">Fraction of the cost of Bitcoin base layer</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={defi2.src}
                  alt="Citrea zkEVM Layer 2"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Bitcoin DeFi Applications */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Bitcoin DeFi Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src={defi3.src}
                  alt="Lending"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Bitcoin Lending</h3>
                <p className="text-gray-300 mb-4">
                  Lend your Bitcoin and earn interest, or borrow against your BTC without selling it.
                </p>
                <Link href="/aave">
                  <span className="text-yellow-400 font-medium hover:text-yellow-300 flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src={defi4.src}
                  alt="Liquidity Provision"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Liquidity Provision</h3>
                <p className="text-gray-300 mb-4">
                  Provide liquidity to Bitcoin trading pairs and earn fees from trades.
                </p>
                <Link href="/curve">
                  <span className="text-yellow-400 font-medium hover:text-yellow-300 flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
              <Image
                  src={defi1.src}
                  alt="Yield Farming"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Yield Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Automatically find and move your Bitcoin to the highest-yielding opportunities.
                </p>
                <a href="https://hyeper-fi-calc-react-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-medium hover:text-yellow-300 flex items-center">
                  Try Calculator
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Learn About Bitcoin DeFi
          </h2>
          <p className="text-gray-300 text-lg mb-10 text-center max-w-3xl mx-auto">
            Watch our explainer video to understand how HyperFi leverages Citrea's zkEVM to bring DeFi to Bitcoin
          </p>
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9" onClick={onClick}>
              <Video2 />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Bitcoin DeFi Journey?</h2>
              <p className="text-gray-300 text-lg">
                Connect your wallet and start earning yield on your Bitcoin today with HyperFi.
              </p>
            </div>
            <div>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default BitcoinDeFi;
