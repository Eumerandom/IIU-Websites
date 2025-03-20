import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    type: "NEWS",
    date: "August 15, 2023",
    title: "Groundbreaking Research Published in Science Journal",
    description: "Professor Maria Rodriguez's team has made a significant breakthrough in renewable energy technology that could revolutionize solar power efficiency.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    type: "EVENT",
    date: "September 10, 2023",
    title: "Annual International Business Conference",
    description: "Join us for our flagship business conference featuring keynote speakers from global companies and networking opportunities with industry leaders.",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    type: "NEWS",
    date: "July 28, 2023",
    title: "Engineering Students Win National Competition",
    description: "A team of mechanical engineering students has secured first place in the National Robotics Challenge with their innovative design.",
    image: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function NewsEvents() {
  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">News & Events</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">Stay updated with the latest happenings, research breakthroughs, and upcoming events at Universitas IIU.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`${item.type === 'NEWS' ? 'bg-amber-400 text-primary' : 'bg-primary/10 text-primary'} text-xs font-bold px-2 py-1 rounded`}>
                    {item.type}
                  </span>
                  <span className="text-neutral-500 text-sm ml-2">{item.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <Link href="/news" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
                  {item.type === 'NEWS' ? 'Read more' : 'Learn more'} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition">
            <Link href="/news">View All News & Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
