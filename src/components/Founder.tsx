
import React, { useEffect, useRef } from 'react';

const Founder = () => {
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
    <section id="founder" className="py-5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="section-subheading reveal">MEET THE FOUNDER</h4>
          <h2 className="section-heading reveal stagger-1">Diya Wadhwana</h2>
          <div className="w-20 h-1 bg-lingofun-primary mx-auto my-6 rounded reveal stagger-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image column for larger screens */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -z-10 bottom-1/4 -right-8 w-24 h-24 bg-lingofun-accent/30 rounded-full filter blur-xl"></div>
              
              <div className="relative bg-white p-4 rounded-2xl shadow-xl -rotate-2 transform transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/6f03142b-2b75-4f0b-8b53-a10d4a421a2f.png"
                    alt="Diya Wadhwana - Founder of LinGoFun Academy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 glass-card p-2 rounded-lg shadow-lg">
                  <div className="text-xs text-lingofun-primary font-medium">DELF B1 Certified</div>
                </div>
                
                <div className="absolute -bottom-5 -right-5 glass-card p-2 rounded-lg shadow-lg">
                  <div className="text-xs text-lingofun-primary font-medium">4+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none">
              {/* Image for mobile only, shown at the top */}
              <div className="relative mb-8 lg:hidden">
                <div className="bg-white p-4 rounded-2xl shadow-xl mx-auto max-w-xs">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/6f03142b-2b75-4f0b-8b53-a10d4a421a2f.png"
                      alt="Diya Wadhwana - Founder of LinGoFun Academy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="reveal stagger-1 text-gray-600 leading-relaxed">
                I am a young, ambitious Bilingual Teacher teaching English and French and currently pursuing B.A. in English Literature (final year). I hold a DELF B1 certificate which is a diploma certificate in French language approved by the French Ministry of Education. My love for words and teaching transcends everything else. My degree complements my experiences rather than defining it. I am a linguaphile and a bibliophile. I work out of passion and not because of a mere profession.
              </p>
              
              <p className="reveal stagger-2 text-gray-600 leading-relaxed mt-4">
                Over the years, I have taught students across all levels from primary to higher secondary and across all boards. I have 4+ years of experience in the teaching industry where I have taught in different setups such as school and private class both in online and offline mode. This has equipped me with a comprehensive understanding of students and various useful teaching strategies. I love teaching and connecting with young minds. Through active participation in educator programmes, I keep honing my skills to provide the best outcome for student development.
              </p>

              <p className="reveal stagger-3 text-gray-600 leading-relaxed mt-4">
                I staunchly believe that good education combined with a passionate teacher can truly transform and enrich the life of a student and eventually the society at large. Hoping to leave this world a bit better than I found. Looking forward to serving you.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-6 reveal stagger-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-lingofun-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lingofun-primary font-bold">4+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lingofun-dark">Years Experience</h4>
                    <p className="text-sm text-gray-600">Teaching multiple boards</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-lingofun-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lingofun-primary font-bold">B1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lingofun-dark">DELF Certified</h4>
                    <p className="text-sm text-gray-600">French Ministry of Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
