import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Universitas IIU</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Shaping the future through excellence in education, research, and innovation</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="default" className="bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-lg">
              <Link href="/academics">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-neutral-100 text-primary font-bold border-0 shadow-lg">
              <Link href="#">Campus Tour</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white fill-current">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
