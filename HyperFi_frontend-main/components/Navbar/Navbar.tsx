import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Saave from "@/public/assets/SAAVE.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Bitcoin DeFi", href: "/defi", current: false },
  { name: "Yield Strategies", href: "/aave", current: false },
  { name: "Curve Pools", href: "/curve", current: false },
  { name: "Calculator", href: "https://hyeper-fi-calc-react-app.vercel.app/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  
  const isCurrentPage = (path: string) => {
    return router.pathname === path;
  };
  
  return (
    <Disclosure as="nav" className="bg-black shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-Manrope py-3">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <div className="flex items-center cursor-pointer">
                    <Image
                      className="block h-10 w-auto"
                      src={Saave.src}
                      alt="HyperFi"
                      width={40}
                      height={40}
                    />
                    <span className="ml-2 text-white text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      HyperFi
                    </span>
                  </div>
                </Link>
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-4">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                  >
                    <span
                      className={classNames(
                        isCurrentPage(item.href)
                          ? "bg-gray-900 text-yellow-400"
                          : "text-gray-300 hover:bg-gray-900 hover:text-yellow-300",
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="hidden md:flex md:items-center">
                <button
                  onClick={() => router.push("/defi")}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-lg font-medium px-4 py-2 transition-all duration-200 shadow-md"
                >
                  Connect Wallet
                </button>
              </div>
              
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    isCurrentPage(item.href)
                      ? "bg-gray-900 text-yellow-400"
                      : "text-gray-300 hover:bg-gray-900 hover:text-yellow-300",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
              <Disclosure.Button
                as="a"
                className="block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-medium"
                onClick={() => router.push("/defi")}
              >
                Connect Wallet
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
