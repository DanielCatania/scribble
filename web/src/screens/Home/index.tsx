import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col items-center px-8 gap-2">
        <HeroSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
