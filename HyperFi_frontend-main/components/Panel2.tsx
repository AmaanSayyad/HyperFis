import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Panel2 = (props: {
  desc: string;
  img: StaticImageData;
  glowimg: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div className="my-24 px-4 max-w-7xl mx-auto">
      <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {props.title}
            </h2>

            <p className="text-gray-300 text-lg mb-8">
          {props.desc}
        </p>
            
        <Link href={props.link}>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium rounded-lg px-8 py-3 transition-all duration-300 shadow-lg flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
          </button>
        </Link>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 mix-blend-overlay"></div>
            <Image 
              src={props.img} 
              alt={props.title}
              className="w-full h-full object-cover md:h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel2;
