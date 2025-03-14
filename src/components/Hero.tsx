import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
const Hero: React.FC = () => {
  // For word cycling animation
  const words = ["English", "French", "Culture", "Skills"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // First fade out
      setIsVisible(false);

      // Change word and fade in after a delay
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Half of the interval for changing the word
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return <section id="home" className="min-h-screen flex items-center relative pt-24 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lingofun-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lingofun-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-6 animate-fade-up">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-lingofun-dark leading-tight">
              Unlock the world with fluent 
              <div className="relative overflow-hidden h-[1.2em] w-full mt-1 mb-1">
                <span className={`absolute text-lingofun-primary transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'}`}>
                  {words[currentWordIndex]}
                </span>
              </div>
              language learning.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Join The LinGoFun Academy for interactive English and French classes focused on cultural immersion and practical language skills for all ages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#courses" className="btn-primary flex items-center justify-center">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                Contact For Free Demo.
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 mt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-lingofun-primary">4+</p>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </div>
             
              <div className="text-center">
                <p className="text-3xl font-bold text-lingofun-primary">2</p>
                <p className="text-gray-600 text-sm mt-1">Languages</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Image or illustration */}
          <div className="relative lg:pl-8 animate-fade-in">
            {/* Floating decorative elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-40 h-40 bg-lingofun-accent/20 rounded-full filter blur-xl animate-pulse-gentle"></div>
            <div className="absolute -z-10 -bottom-10 left-10 w-20 h-20 bg-lingofun-primary/20 rounded-full filter blur-xl animate-float"></div>
            
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-lingofun-primary/70 to-lingofun-secondary/70 rounded-2xl overflow-hidden">
                <img src={"lovable-uploads/engfrenchimg.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"} alt="Language learning" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
                 
                {/* Decorative floating cards */}
                <div className="absolute -top-4 -right-4 transform rotate-12 animate-float">
                  <div className="glass-card p-3 w-24 h-24 flex flex-col items-center justify-center">
                    <span className="text-lingofun-primary font-bold text-2xl">FR</span>
                    <span className="text-xs text-gray-600">French</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 transform -rotate-6 animate-float" style={{
                animationDelay: "1s"
              }}>
                  <div className="glass-card p-3 w-24 h-24 flex flex-col items-center justify-center">
                    <span className="text-lingofun-primary font-bold text-2xl">EN</span>
                    <span className="text-xs text-gray-600">English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
