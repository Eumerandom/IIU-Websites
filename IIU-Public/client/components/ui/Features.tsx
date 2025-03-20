import { Award, Globe, Beaker, Users } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: <Award className="text-primary text-2xl" />,
    title: "Academic Excellence",
    description: "Nationally recognized programs with distinguished faculty and cutting-edge research opportunities."
  },
  {
    icon: <Globe className="text-primary text-2xl" />,
    title: "Global Perspective",
    description: "International partnerships and exchange programs with leading universities worldwide."
  },
  {
    icon: <Beaker className="text-primary text-2xl" />,
    title: "Innovative Research",
    description: "State-of-the-art research facilities and opportunities to work on groundbreaking projects."
  },
  {
    icon: <Users className="text-primary text-2xl" />,
    title: "Vibrant Community",
    description: "A diverse and inclusive campus community with over 100 student organizations and activities."
  }
];

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Universitas IIU</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">Our university offers a unique learning experience focused on academic excellence, innovation, and global perspective.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-primary">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/about" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
            Learn more about our university 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
