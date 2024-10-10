"use client"
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../ui/component/NavigationBar/HomeHeader";
import PreviewAppList from "../ui/component/PreviewApps/PreviewAppList";
import FadeInUp from "../ui/framer-motion/Animation/FadeInUp";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const idUrl = window.location.hash.substring(1)
      const scrollToTop = () => window.scrollTo({ behavior: "smooth", top: 0 })

      if (!idUrl) {
        scrollToTop()
      } else {
        const element = document.getElementById(idUrl)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [])

  return (
    <main className="w-full h-full text-slate-800 flex flex-col items-center mb-16 bg-white">
      <Header />
      <FadeInUp className="h-[100svh] w-full self-start pl-3 sm:pl-16 flex items-center">
        <section>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
              Start Your
              <br /><span className="text-blue-500">Business</span> Journey
            </h1>
            <p className="text-sm sm:text-lg font-thin">Create, Manage, and Edit your business product easily.
              <br />Provide anything for your business management.
              <br /> Authentication support.
            </p>
            <Link className="w-fit h-fit" href="#demo-container">
              <Button colorScheme="blue">Get Started</Button>
            </Link>
          </div>
        </section>
      </FadeInUp>
      <div id="demo-container" className="min-h-[50svh] h-max w-full flex flex-col gap-7 rounded-t-xl text-center pt-16">
        <h2 className="text-3xl font-semibold">Our Service</h2>
        <PreviewAppList />
      </div>
    </main>
  );
}
