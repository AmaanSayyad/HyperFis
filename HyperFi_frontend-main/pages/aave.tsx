import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import aave1 from "@/public/assets/aave1.png";
import aave2 from "@/public/assets/aave2.jpg";
import aave3 from "@/public/assets/aave3.png";
import aave4 from "@/public/assets/aave4.jpg";
import { Video1 } from "@/components/Livepeer";
import Link from "next/link";

function BitcoinLending() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
    <Head>
        <title>Bitcoin Lending | HyperFi</title>
        <meta name="description" content="Explore Bitcoin lending protocols on Citrea's zkEVM Layer 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-orange-400 to-yellow-600 bg-clip-text text-transparent">
            Bitcoin Lending Protocols
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lend your Bitcoin and earn interest, or borrow against your BTC without selling it.
            All powered by Citrea's zkEVM Layer 2 for Bitcoin.
          </p>
        </div>
        
        {/* Section 1: What is Bitcoin Lending */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is Bitcoin Lending?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Bitcoin lending protocols allow you to lend your BTC to borrowers and earn interest, or borrow 
                against your BTC without selling it. With Citrea's zkEVM Layer 2, these lending protocols can now 
                operate directly on Bitcoin without wrapping or bridging.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Traditional Bitcoin has limited programmability, making lending difficult. But with Citrea's zkEVM,
                we can bring sophisticated lending protocols directly to Bitcoin holders.
              </p>
              <div className="bg-black rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-white mb-2">Why Lend Your Bitcoin?</h3>
                <p className="text-gray-300">
                  Bitcoin holders often keep their assets idle. Lending puts your BTC to work, generating yield 
                  while maintaining long-term exposure to Bitcoin's price appreciation.
            </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aave1.src}
                  alt="Bitcoin Lending"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How Bitcoin Lending Works on Citrea */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How Bitcoin Lending Works on Citrea
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Citrea's zkEVM Layer 2 solution enables complex smart contracts while inheriting Bitcoin's security.
                This allows for sophisticated lending protocols that were previously impossible on Bitcoin's base layer.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="bg-black p-5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Supply Bitcoin</h3>
                  <p className="text-gray-300">
                    Deposit your BTC into lending pools to earn interest from borrowers. Your interest rate adjusts 
                    based on market supply and demand.
                  </p>
                </div>
                <div className="bg-black p-5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Borrow Against Bitcoin</h3>
                  <p className="text-gray-300">
                    Use your BTC as collateral to borrow other assets without selling your Bitcoin. Perfect for 
                    accessing liquidity while maintaining your BTC position.
                  </p>
                </div>
                <div className="bg-gray-800 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Earn Interest</h3>
                  <p className="text-gray-300">
                    Interest accrues in real-time and is paid in the same asset you lent. Withdraw your principal 
                    plus interest anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aave3.src}
                  alt="Bitcoin Lending Process"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 3: Benefits of Bitcoin Lending */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Benefits of Bitcoin Lending
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Passive Income</h3>
              <p className="text-gray-300">
                Generate yield on your Bitcoin holdings without selling. Interest rates typically range from 2-8% APY, 
                depending on market conditions.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bitcoin Security</h3>
              <p className="text-gray-300">
                Citrea's zkEVM inherits Bitcoin's security model while enabling complex lending functionality. 
                Your assets remain secured by Bitcoin's robust consensus mechanism.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Liquidity Access</h3>
              <p className="text-gray-300">
                Access liquidity without selling your Bitcoin. Borrow against your BTC to fund expenses or investments 
                while maintaining your long-term Bitcoin position.
            </p>
            </div>
          </div>
        </div>

        {/* Section 4: Getting Started */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Getting Started with Bitcoin Lending
              </h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                    <p className="text-gray-300">
                      Connect your Bitcoin wallet to HyperFi through Citrea's zkEVM Layer 2 solution.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Deposit Bitcoin</h3>
                    <p className="text-gray-300">
                      Deposit your BTC into the lending pool of your choice. Your Bitcoin remains on Citrea's Layer 2.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Earn Interest</h3>
                    <p className="text-gray-300">
                      Start earning interest immediately. Monitor your earnings in real-time on the dashboard.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Withdraw Anytime</h3>
                    <p className="text-gray-300">
                      Withdraw your Bitcoin plus earned interest at any time, with no lock-up periods.
            </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                  src={aave4.src}
                  alt="Getting Started with Bitcoin Lending"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Learn About Bitcoin Lending
          </h2>
          <p className="text-gray-300 text-lg mb-10 text-center max-w-3xl mx-auto">
            Watch our explainer video to understand how Bitcoin lending works on Citrea's zkEVM Layer 2
          </p>
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9" onClick={onClick}>
              <Video1 />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning on Your Bitcoin?</h2>
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

export default BitcoinLending;
