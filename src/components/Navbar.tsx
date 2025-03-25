import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Founder", href: "#founder" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-lingofun-dark hover:text-lingofun-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-2">
              Free Demo
            </a>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-lingofun-dark" />
            ) : (
              <Menu className="h-6 w-6 text-lingofun-dark" />
            )}
          </button>
          {/* Mobile Navigation */}
          {/* Mobile Navigation */}
          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed inset-0 bg-white z-40 flex flex-col w-full h-screen p-6 pt-20 md:hidden transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Close Button (REMOVE DUPLICATE) */}

            {/* Logo */}
            <div className="absolute top-6 left-6">
              <Logo /> {/* Keep your existing logo component */}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 mt-12 text-lg font-semibold text-gray-900">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-4 border-b border-gray-300 hover:text-lingofun-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
