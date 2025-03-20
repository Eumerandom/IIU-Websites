import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Campus background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Journey at Universitas IIU</h2>
          <p className="text-white/90 text-lg mb-8">Take the first step toward a transformative educational experience that will prepare you for success in a rapidly changing world.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold shadow-lg">
              <Link href="#">Request Information</Link>
            </Button>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-lg">
              <Link href="#">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold">
              <Link href="#">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
