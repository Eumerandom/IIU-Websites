import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="University campus building" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">About Universitas IIU</h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">Founded in 1975, Universitas IIU has established itself as a leading institution of higher education committed to academic excellence, innovative research, and community engagement.</p>
            <p className="text-neutral-700 mb-6 leading-relaxed">Our mission is to educate and inspire the next generation of leaders, thinkers, and innovators who will address the challenges of our rapidly changing world with creativity, integrity, and purpose.</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="text-primary text-4xl font-bold">5000+</div>
                <div className="text-neutral-600">Students</div>
              </div>
              <div className="text-center p-4">
                <div className="text-primary text-4xl font-bold">300+</div>
                <div className="text-neutral-600">Faculty Members</div>
              </div>
              <div className="text-center p-4">
                <div className="text-primary text-4xl font-bold">50+</div>
                <div className="text-neutral-600">Programs</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white font-bold">
                <Link href="/about">Our History</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link href="/about">Leadership Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
