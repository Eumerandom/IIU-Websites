import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Studying at Universitas IIU has been a transformative experience. The professors are not only experts in their fields but also dedicated mentors who truly care about students' success. The diverse campus community has broadened my perspective and prepared me for a global career.",
    name: "Sarah Johnson",
    position: "International Business, Class of 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The research opportunities at Universitas IIU are unparalleled. I've been able to work alongside leading professors on groundbreaking projects that have real-world applications. The university's commitment to innovation has inspired me to pursue a career in research.",
    name: "David Chen",
    position: "Computer Science, Class of 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As an international student, I was nervous about studying abroad, but the welcoming community at Universitas IIU made me feel at home from day one. The support services for international students are excellent, and I've made lifelong friends from all over the world.",
    name: "Maria Rodriguez",
    position: "Engineering, Class of 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <Quote className="w-full h-full text-white" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12">Student Voices</h2>
          
          <div className="relative">
            <div className="mb-8">
              <Quote className="h-12 w-12 text-amber-400 opacity-50 mx-auto" />
            </div>
            
            <p className="text-white text-xl md:text-2xl italic mb-8 leading-relaxed">
              {testimonials[currentSlide].quote}
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 mb-3">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={`Portrait of ${testimonials[currentSlide].name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white font-semibold">{testimonials[currentSlide].name}</div>
              <div className="text-white/80 text-sm">{testimonials[currentSlide].position}</div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition mr-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition ml-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
