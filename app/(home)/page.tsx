import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/heroSection";
import PricingPage from "@/components/home/PricingPage";
import Footer from "@/components/home/footerpage";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
        <HeroSection totalForms={0} isSubscribed={false} />
        <PricingPage />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
