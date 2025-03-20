import { Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const faculties = [
  {
    name: "Faculty of Business & Economics",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Preparing future business leaders through innovative programs in management, finance, accounting, and economics.",
    programs: [
      "Bachelor of Business Administration",
      "Master of Finance",
      "Ph.D. in Economics"
    ]
  },
  {
    name: "Faculty of Engineering & Technology",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advancing technological innovation through cutting-edge programs in various engineering disciplines.",
    programs: [
      "Bachelor of Civil Engineering",
      "Master of Computer Science",
      "Ph.D. in Mechanical Engineering"
    ]
  },
  {
    name: "Faculty of Arts & Humanities",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Exploring human expression, creativity, and cultural understanding through diverse academic disciplines.",
    programs: [
      "Bachelor of Fine Arts",
      "Master of Literature",
      "Ph.D. in Philosophy"
    ]
  }
];

export default function Academics() {
  return (
    <section id="academics" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Academic Programs</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">Discover our diverse range of undergraduate and graduate programs designed to prepare you for success in your chosen field.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {faculties.map((faculty, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-primary-light relative">
                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center p-4">
                  <h3 className="font-serif text-white text-xl md:text-2xl font-bold text-center">{faculty.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">{faculty.description}</p>
                <ul className="mb-6 space-y-2">
                  {faculty.programs.map((program, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <Check className="h-5 w-5 text-amber-500 mr-2" /> {program}
                    </li>
                  ))}
                </ul>
                <Link href="/academics" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
                  Explore programs 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition">
            <Link href="/academics">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
