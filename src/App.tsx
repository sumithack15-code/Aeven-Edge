/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { OurGallery } from "./components/OurGallery";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { InstagramSection } from "./components/InstagramSection";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState<string>("");

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    scrollToElement("booking");
  };

  const handleExploreServices = () => {
    scrollToElement("services");
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    scrollToElement("booking");
  };

  return (
    <div className="min-h-screen bg-[#111214] text-[#F5F5F5] selection:bg-[#C9B27C]/30 selection:text-[#FFFFFF]">
      {/* Minimal Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassy Navigation */}
      <Navbar onBookNow={handleBookNow} />

      {/* Main Storytelling Scroll Flow */}
      <main>
        <Hero
          onBookNow={handleBookNow}
          onExploreServices={handleExploreServices}
        />
        <About />
        <Services onSelectService={handleSelectService} />
        <Experience />
        <OurGallery />
        <Gallery />
        <Testimonials />
        <InstagramSection />
        <BookingSection preselectedService={selectedServiceForBooking} />
        <ContactSection onBookAppointment={handleBookNow} />
      </main>

      {/* Luxury Dark Footer */}
      <Footer />
    </div>
  );
}

