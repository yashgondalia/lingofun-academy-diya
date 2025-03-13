
import React, { useEffect, useRef } from 'react';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el) => {
              el.classList.add('active');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-gray-50 py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="section-subheading reveal"> OUR STORY</h4>
          <h2 className="section-heading reveal stagger-1">Ab The LinGoFun Academy</h2>
          <div className="w-20 h-1 bg-lingofun-primary mx-auto my-6 rounded reveal stagger-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Image column */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="relative reveal">
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-1/4 -left-12 w-24 h-24 bg-lingofun-secondary/30 rounded-full filter blur-xl"></div>
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl rotate-3 transform transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className={'overflow-hidden rounded-xl aspect-[3/4]'}>
                 <img 
   src={"lovable-uploads/diyastudyphoto.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"} 
   alt="Students learning languages" 
   className="w-full h-full object-cover object-center"  
/>
                </div>
                

                {/* Language elements overlay */}
                <div className="absolute -top-5 -right-5 bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="font-serif font-bold text-lingofun-primary">FR</span>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="font-serif font-bold text-lingofun-primary">EN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content column */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p className="reveal stagger-1 text-gray-600 leading-relaxed">
                The LingoFun Academy is a leading online platform offering top-notch language classes for English and French, founded by Diya Wadhwana, a bilingual teacher possessing 4+ years of teaching experience.
              </p>
              
              <p className="reveal stagger-2 text-gray-600 leading-relaxed mt-4">
                With a wide range of online interactive classes, we equip the students not only with language skills but also focus on cultural immersion through language. We provide sessions for young learners in school as well as working professionals as we believe learning a language has no age.
              </p>
              
              <p className="reveal stagger-3 text-gray-600 leading-relaxed mt-4">
                We specialise in English and French training for all boards including SSC, CBSE, ISC, ICSE, IB, IG. Additionally, we prepare students for DELF A1 and A2 examinations.
              </p>
              
             
               <div className="mt-8 reveal stagger-4">
                <h3 className="text-xl font-serif font-semibold text-lingofun-dark mb-4">Our USP</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Learn with Fun, just begun!"
Learning a language is not a destination. It is an ongoing journey. There are always more nuances and depths to explore while learning a language. So, your journey has just begun! Let's embark on this journey together and have fun learning languages!

                </p>
              </div>
               <div className="mt-8 reveal stagger-4">
                <h3 className="text-xl font-serif font-semibold text-lingofun-dark mb-4">Our Mission and Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                 We believe that learning should be interesting, especially learning a language because learning any language is not just about memorising vocabulary and grammar rules. It is much more! At The LingoFun Academy, we work towards making language learning accessible to the masses in a fun way reducing the tedious process of learning at an affordable price. We focus on all the skills required in a language i.e. speaking, listening, reading and writing.

                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 reveal stagger-5">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-medium text-lingofun-dark mb-2">All Age Groups</h4>
                  <p className="text-sm text-gray-600">Classes for school students and working professionals</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-medium text-lingofun-dark mb-2">All Boards</h4>
                  <p className="text-sm text-gray-600">SSC, CBSE, ISC, ICSE, IB, IG and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
