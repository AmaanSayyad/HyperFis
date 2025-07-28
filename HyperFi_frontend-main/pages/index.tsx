import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero2 from "@/components/Hero2";
import Footer from "@/components/Footer/Footer";
import Feature from "@/components/Feature";
import Panel2 from "@/components/Panel2";
import Ghost2 from "@/public/assets/SAAVE.png";
import Newsletter from "@/components/Cards/Newsletter";
import Glow2 from "@/public/assets/glow2.png";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HyperFi | Bitcoin DeFi Made Simple</title>
        <meta name="description" content="HyperFi brings DeFi to Bitcoin through Citrea's zkEVM Layer 2. Earn yield on your BTC without wrapping tokens or bridging to other chains." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900 min-h-screen">
        <Navbar />
        <Hero2 />
        <Feature />
        <Panel2
          img={Ghost2}
          glowimg={Glow2}
          title={"Bitcoin DeFi on Citrea"}
          desc={
            "HyperFi leverages Citrea's zkEVM Layer 2 solution to bring sophisticated DeFi capabilities directly to Bitcoin holders. Compare yields across protocols, optimize your returns, and protect your assets from inflation—all while staying in the Bitcoin ecosystem."
          }
          link={"/defi"}
        />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
