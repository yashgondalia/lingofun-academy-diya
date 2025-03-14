import React from "react";
import Logo from "./Logo";
import { Phone, Instagram, Linkedin, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-lingofun-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and about */}
          <div className="md:col-span-2">
            <Logo className="text-lingofun-light" variant="full" />
            <p className="mt-6 text-gray-400 max-w-md">
              The LinGoFunn Academy offers premier language education in English
              and French for all age groups with a focus on cultural immersion
              and interactive learning.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/thelingofunn.academy?igsh=MzgwdDJqenZjZ2Ry&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={30} />
              </a>
              <a
                href="http://linkedin.com/in/diya-wadhwana-87b80a270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={30} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#founder"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Founder
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-lingofun-primary mt-0.5 mr-3" />
                <a
                  href="tel:+917045595990"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 7045 5959 90 (Diya Wadhwana)
                </a>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-lingofun-primary mt-0.5 mr-3" />
                <span className="text-gray-400">
                  Book your FREE demo classes today!
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} The LinGoFunn Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
