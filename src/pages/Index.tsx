import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Founder from "@/components/Founder";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Founder />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
