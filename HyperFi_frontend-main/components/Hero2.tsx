import Image from 'next/image'
import React from 'react'
import Banner from "@/public/assets/hero2.png";
import Link from 'next/link';

function Hero2() {
  return (
    <div className='text-white h-auto p-4 md:p-10 flex flex-col items-center'>
      <div className='w-full md:mx-10 text-center'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl p-10 font-bold font-Poppins bg-gradient-to-r from-orange-400 to-yellow-600 bg-clip-text text-transparent'>
          Bitcoin DeFi Made Simple
        </h1>
        <p className='p-4 text-lg max-w-4xl mx-auto'>
          HyperFi brings the power of DeFi to Bitcoin through Citrea's zkEVM Layer 2 solution. 
          Earn yield on your Bitcoin without wrapping tokens or bridging to other chains. 
          Compare APYs across protocols, optimize your returns, and protect your assets from inflation—all while staying in the Bitcoin ecosystem.
        </p>
        
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6 mb-10'>
          <Link href="/defi">
            <button className='px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg font-bold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg'>
              Explore Bitcoin DeFi
            </button>
          </Link>
          <Link href="/aave">
            <button className='px-8 py-3 bg-gray-800 border border-yellow-500 rounded-lg font-bold hover:bg-gray-700 transition-all duration-300 shadow-lg'>
              View Yield Strategies
            </button>
          </Link>
        </div>
        
        <div className='w-full relative'>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-xl'></div>
          <Image 
            src={Banner} 
            height={800} 
            width={1200} 
            alt="Bitcoin DeFi Platform" 
            className='object-contain w-full h-full rounded-xl shadow-2xl' 
          />
        </div>
        
        <div className='mt-8 flex flex-wrap justify-center gap-8 p-4'>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <span className='font-semibold'>Native Bitcoin</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className='font-semibold'>Citrea Security</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className='font-semibold'>Optimized Yields</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className='font-semibold'>Low Fees</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2