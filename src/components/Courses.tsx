import React, { useEffect, useRef, useState } from "react";
import { Check, BookOpen, Languages } from "lucide-react";

// Course data
const frenchCourses = [
  {
    title: "French Beginner (A1)",
    description:
      "Perfect for complete beginners. Learn basic communication, greetings, and simple conversations.",
    features: [
      "Basic vocabulary and grammar",
      "Everyday expressions",
      "Simple present tense",
      "Introduction to French culture",
    ],
    highlight: false,
  },
  {
    title: "French Elementary (A2)",
    description:
      "Build on your basics with more complex grammar and vocabulary for daily situations.",
    features: [
      "Expanded vocabulary",
      "Past and future tenses",
      "Daily life conversations",
      "DELF A2 exam preparation",
    ],
    highlight: true,
  },
  {
    title: "French for School",
    description:
      "Specifically designed to help students excel in their school French curriculum.",
    features: [
      "Aligned with school syllabus",
      "Exam-focused practice",
      "Grammar reinforcement",
      "Regular assessments",
    ],
    highlight: false,
  },
];
const englishCourses = [
  {
    title: "English Foundation",
    description:
      "Strengthen fundamentals in grammar, vocabulary, and basic communication.",
    features: [
      "Grammar fundamentals",
      "Vocabulary building",
      "Pronunciation practice",
      "Basic writing skills",
    ],
    highlight: false,
  },
  {
    title: "English Advanced",
    description:
      "Master complex grammar, writing, and speaking skills for professional contexts.",
    features: [
      "Advanced grammar",
      "Essay writing",
      "Public speaking",
      "Business English",
    ],
    highlight: true,
  },
  {
    title: "English for Academics",
    description:
      "Focus on academic writing, critical analysis, and literature for school excellence.",
    features: [
      "Literary analysis",
      "Academic writing",
      "Presentation skills",
      "Exam preparation",
    ],
    highlight: false,
  },
];
const CourseCard = ({ course }: { course: (typeof frenchCourses)[0] }) => {
  return;
};
const Courses = () => {
  const [activeTab, setActiveTab] = useState("french");
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".reveal");
            elements.forEach((el) => {
              el.classList.add("active");
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
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
    <section id="courses" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="section-subheading reveal">WHAT WE OFFER</h4>
          <h2 className="section-heading reveal stagger-1">Our Courses</h2>
          <div className="w-20 h-1 bg-lingofun-primary mx-auto my-6 rounded reveal stagger-2"></div>
          <p className="text-gray-600 reveal stagger-3">
            Flexible scheduling with classes tailored to your availability. All
            age groups welcome with FREE demo sessions available!
          </p>
        </div>

        {/* Class details */}
        <div className="max-w-3xl mx-auto mb-5 bg-white rounded-xl shadow-md p-6 reveal stagger-2">
          <h3 className="text-xl font-serif font-semibold text-lingofun-dark mb-4">
            Class Details:
          </h3>
          <p className="text-gray-600 mb-6">
            Days of the class and time slots are mutually decided on
            availability of the student and the teacher thus flexible hours
            offered. Our classes are open to all age groups.Both one-on-one and
            group sessions are available. For your assurance, TWO absolutely
            FREE DEMOS are provided!
          </p>

          <h3 className="text-xl font-serif font-semibold text-lingofun-dark mb-4">
            Fee Structure:
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Depending on the course enrolled, fees can be paid either
                monthly or in installments.
              </span>
            </li>

            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Various discounts avaliable.</span>
            </li>
          </ul>
        </div>

        {/* Course tabs */}

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "french"
            ? frenchCourses.map((course, idx) => (
                <div
                  key={`french-${idx}`}
                  className={`reveal stagger-${idx + 1}`}
                >
                  <CourseCard course={course} />
                </div>
              ))
            : englishCourses.map((course, idx) => (
                <div
                  key={`english-${idx}`}
                  className={`reveal stagger-${idx + 1}`}
                >
                  <CourseCard course={course} />
                </div>
              ))}
        </div>

        {/* Detailed Language Offerings */}
        <div className=" mt-1 grid grid-cols-1 lg:grid-cols-2 gap-12 reveal stagger-4">
          {/* English Language Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-lingofun-primary mr-3" />
              <h3 className="text-2xl font-serif font-semibold text-lingofun-dark">
                English Language
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Comprehensive coverage of all boards and standards upto 12th
                  (SSC, CBSE, ISC, ICSE, IB, IG)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Practicing Creative Writing
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Enhancing English fluency and communication
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Remembering Grammar Rules through easy techniques
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Boosting and expanding Vocabulary
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Improving English Listening Skills
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Provision of Activity Sheets for all topics
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Regular tests and feedbacks for evaluation of students'
                  progress
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Cultural activities and immersive learning
                </span>
              </li>
            </ul>
          </div>

          {/* French Language Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Languages className="h-8 w-8 text-lingofun-primary mr-3" />
              <h3 className="text-2xl font-serif font-semibold text-lingofun-dark">
                French Language
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Comprehensive coverage of all boards and standards upto 12th
                  (SSC, CBSE, ISC, ICSE, IB, IG)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Specialised in DELF A1 and A2 exam preparation for all ages
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Interactive sessions with cultural immersion
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Special focus on all four skills: Production écrite (Writing
                  skills), Production orale (Speaking skills), Compréhension
                  écrite (Passage solving and Reading skills) et Compréhension
                  orale (Listening skills)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Les Feuilles de travail (Activity sheets for all topics)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Les examens régulières (Regular tests for evaluation of
                  student's performance)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Développer Grammaire et Vocabulaire
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Des chansons, des activités, des vidéos (Alongside academic
                  syllabi, we try to learn French through activities, games,
                  music, videos and movies)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-lingofun-primary mr-3" />
            <h3 className="text-2xl font-serif font-semibold text-lingofun-dark">
              Why choose us?
            </h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Affordable Pricing </span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Personalised attention</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Student-centric approach</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Interactive sessions</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Friendly ambience</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                Modern problems require modern solutions
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                Connect globally via online mode
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-lingofun-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">24/7 assistance</span>
            </li>
          </ul>
        </div>

        {/* Special offers banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-lingofun-primary/20 to-lingofun-secondary/20 rounded-xl reveal stagger-5">
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold text-lingofun-dark mb-2">
              Special Offers for Group Enrollments
            </h3>
            <p className="text-gray-600 mb-6">
              -Group discounts (even if small groups, high discount)
            </p>
            <p className="text-gray-600 mb-6">
              -Referral discounts (refer to others and save money)
            </p>
            <p className="text-gray-600 mb-6">-One-shot payment discounts.</p>
            <a href="#contact" className="btn-primary inline-block">
              Ask About Group Rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
