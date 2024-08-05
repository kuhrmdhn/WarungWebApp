"use client"
import "./globals.css"
import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PreviewAppList from "./ui/component/PreviewApps/PreviewAppList";
import Header from "./ui/component/NavigationBar/(Home)/Header";
import FadeInUp from "./ui/framer-motion/FadeInUp";

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
    <main className="w-full h-full bg-blue-100 text-slate-800 flex flex-col items-center mb-16">
      <Header />
      <FadeInUp className="h-[100svh] w-full self-start pl-16 flex items-center">
        <section>
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl font-bold">
              Start Your
              <br />Business Journey
            </h1>
            <p className="text-lg font-thin">Create, Manage, and Edit your business product easily.
              <br />Provide anything for your business management.
              <br /> Authentication support.
            </p>
            <a href="#demo-container">
              <Button colorScheme="teal">Get Started</Button>
            </a>
          </div>
        </section>
      </FadeInUp>
      <div id="demo-container" className="min-h-[50svh] h-max w-full rounded-t-xl bg-white text-center pt-16">
        <h2 className="text-3xl font-semibold">Our Service</h2>
        <Alert status='warning' className="mb-7 w-fit">
          <AlertIcon />
          Authentication is required! Please contact to get access
        </Alert>
        <PreviewAppList />
      </div>
    </main>
  );
}
