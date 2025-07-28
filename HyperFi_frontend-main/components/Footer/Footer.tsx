import React from "react";
import Logo from "/public/assets/SAAVE.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-black">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Image src={Logo} alt={"HyperFi"} className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold text-white">HyperFi</span>
            </div>
            
            <p className="max-w-xs mt-4 text-gray-400">
              Bringing DeFi to Bitcoin through Citrea's zkEVM Layer 2 solution. Earn yield on your BTC without wrapping or bridging.
            </p>

            <ul className="flex gap-6 mt-8">
              <li>
                <a
                  href="https://twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              
              <li>
                <a
                  href="https://discord.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <span className="sr-only">Discord</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Bitcoin DeFi</p>

              <nav aria-label="Footer Navigation - Bitcoin DeFi" className="mt-6">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/defi" className="text-gray-400 transition hover:text-yellow-400">
                      What is Bitcoin DeFi
                    </Link>
                  </li>
                  <li>
                    <Link href="/aave" className="text-gray-400 transition hover:text-yellow-400">
                      Lending Protocols
                    </Link>
                  </li>
                  <li>
                    <Link href="/curve" className="text-gray-400 transition hover:text-yellow-400">
                      Liquidity Pools
                    </Link>
                  </li>
                  <li>
                    <a href="https://hyeper-fi-calc-react-app.vercel.app/" className="text-gray-400 transition hover:text-yellow-400">
                      Yield Calculator
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Citrea</p>

              <nav aria-label="Footer Navigation - Citrea" className="mt-6">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://docs.citrea.xyz/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://citrea.xyz/faucet"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Testnet Faucet
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://explorer.testnet.citrea.xyz"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Block Explorer
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Resources</p>

              <nav aria-label="Footer Navigation - Resources" className="mt-6">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Security Audits
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-yellow-400"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-400">
              &copy; 2023 HyperFi. All rights reserved.
            </p>
            
            <div className="flex gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
