import React from 'react';
import { Star, Quote } from 'lucide-react';
type TestimonialCardProps = {
  content: string;
  author: string;
  role: string;
  location: string;
  imageSrc?: string;
  rating?: number;
  language: 'French' | 'English';
};
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  location,
  imageSrc,
  rating = 5,
  language
}) => {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            {imageSrc ? <img src={imageSrc} alt={author} className="w-10 h-10 rounded-full mr-4 border-2 border-lingofun-primary object-cover" /> : <div className="w-12 h-12 bg-lingofun-primary/20 rounded-full flex items-center justify-center text-lingofun-primary font-bold mr-4">
                {author.split(' ').map(name => name[0]).join('')}
              </div>}
            <div>
              <h4 className="font-medium text-lingofun-dark">{author}</h4>
              <p className="text-sm text-gray-600">{role}, {location}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
          </div>
        </div>

        <div className="relative">
          <Quote className="text-gray-200 absolute top-0 left-0 transform -translate-x-1 -translate-y-2 w-8 h-8" />
          <p className="text-gray-600 italic pl-6 relative">{content}</p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full ${language === 'French' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}>
            {language} Class
          </span>
        </div>
      </div>
    </div>;
};
const Testimonials = () => {
  const testimonials = [{
    content: "It has always been great to take classes with Diya ma'am. We have been studying with her since class 8 (3+years). She is polite and sweet when speaking. As we were not good speakers, she organised multiple debate activities and made us confident. She includes various examples to explain things in a simple and unique way.💖 Once she taught anything, it was nearly impossible to forget. Diya ma'am always wanted our benefit over her and took late night and early morning classes during exam time. Our grades were low but only in one month we started scoring 90%+ in English papers. Our grammar always got 10/10. WE WOULD RATE HER TEACHING 5+/5",
    author: "Vidish and Vishvam",
    role: "X CBSE",
    location: "Rukmani Birla Modern High School, Jaipur",
    imageSrc: "/lovable-uploads/VidishandVishvam.png",
    rating: 5,
    language: "English" as const
  },  {
    content: "Hello!! I am Vidhi. I have been learning from Diya miss for almost 2-3 years. I really enjoy learning new things in a different form of way with her. She is a great teacher and she has a unique way of teaching her students. I have gained my English marks from 18/40 to 39⅕/40 in both English Grammar and Literature. She is very polite and motivational towards her students. I would rate 5/5.",
    author: "Vidhi Jain",
    role: "6 ICSE",
    location: "RBK International School, Mumbai",
    imageSrc: "/lovable-uploads/a1e104a2-ae40-4ceb-be18-1e22a2b05401.png",
    rating: 5,
    language: "English" as const
    }, {
    content: "Learning with Diya has been a great experience for me! I started to learn French as a leisure activity. But over the course of time, I was fascinated with the language and decided to pursue my Delf A1 level, all thanks to her lucid and fun teaching style. The best part about Diya is she's extremely flexible. Since I'm a working professional and there's a dearth of time during weekdays, we have our classes scheduled on weekends or at times during late nights. She uses games and other interactive mediums to make someone who is completely new to French like me, to comprehend it and converse decently. I'd recommend this to anyone who wants to learn French with a fresh and fun approach. It's completely worth it. J'ai adoré ce cours avec Diya❤️",
    author: "Pranav Nair",
    role: "Banking Professional",
    location: "Mumbai",
    imageSrc: "/lovable-uploads/513ec0ff-c2c7-420b-ad61-e50ddf189e79.png",
    rating: 5,
    language: "French" as const
  },  {
    content: "I highly recommend the Lingo Fun Academy by amazing teacher Miss Diya Wadhwana's French lessons because her lessons are structured and paced to meet the level of your understanding. My daughter is studying French in school, but was not able to enjoy and understand but after a few lessons only she started enjoying. Now French is not scary for her. All thanks to Miss Diya.",
    author: "Paheal Mehta",
    role: "Grade 3",
    location: "Apple International School, Dubai",
    imageSrc: "/lovable-uploads/88399640-698c-40ca-9201-dbee15da9620.png",
    rating: 5,
    language: "French" as const
  }];

 
                       
  return <section id="testimonials" className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="section-subheading reveal">STUDENT EXPERIENCES</h4>
          <h2 className="section-heading reveal stagger-1">What Our Students Say</h2>
          <div className="w-20 h-1 bg-lingofun-primary mx-auto my-6 rounded reveal stagger-2"></div>
          <p className="text-gray-600 reveal stagger-3">
            Hear from our students who have transformed their language skills through our personalized teaching approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="reveal stagger-3">
              <TestimonialCard {...testimonial} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
