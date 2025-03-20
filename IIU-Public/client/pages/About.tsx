import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/ui/CallToAction";

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605370420794-106f132d4f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Universitas IIU</h1>
            <p className="text-xl md:text-2xl text-white/90">Committed to excellence in education and research since 1975</p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Universitas IIU is dedicated to providing a transformative educational experience that prepares students for leadership and service in a diverse and interconnected world.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-neutral-700">
                  To educate and inspire the next generation of leaders, thinkers, and innovators who will address the challenges of our rapidly changing world with creativity, integrity, and purpose.
                </p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-neutral-700">
                  To be a globally recognized institution of higher learning that transforms lives, advances knowledge, and serves society through innovative education, research, and community engagement.
                </p>
              </div>
            </div>
          </div>

          {/* University History */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our History</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-neutral-700 mb-4">
                  Founded in 1975, Universitas IIU began as a small college with just three faculties and 200 students. Over the decades, we have grown into a comprehensive university with a strong reputation for academic excellence and innovation.
                </p>
                <p className="text-neutral-700 mb-4">
                  In the 1990s, we expanded our campus and introduced several new programs in response to the changing needs of society and the job market. The early 2000s saw the construction of our state-of-the-art research facilities, which have enabled groundbreaking discoveries in various fields.
                </p>
                <p className="text-neutral-700">
                  Today, with over 5,000 students from more than 50 countries, Universitas IIU continues to evolve while remaining true to its founding principles of academic excellence, critical thinking, and social responsibility.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Historic view of the university" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* President */}
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="University President" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">Dr. James Wilson</h3>
                  <p className="text-amber-500 font-semibold mb-3">President</p>
                  <p className="text-neutral-600 mb-4">
                    Dr. Wilson brings over 25 years of experience in higher education leadership and a commitment to academic excellence.
                  </p>
                </div>
              </div>
              
              {/* Provost */}
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="University Provost" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">Dr. Emily Chen</h3>
                  <p className="text-amber-500 font-semibold mb-3">Provost</p>
                  <p className="text-neutral-600 mb-4">
                    An accomplished researcher and educator, Dr. Chen oversees all academic programs and faculty affairs.
                  </p>
                </div>
              </div>
              
              {/* Vice President */}
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Vice President for Research" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">Dr. Michael Rodriguez</h3>
                  <p className="text-amber-500 font-semibold mb-3">VP for Research</p>
                  <p className="text-neutral-600 mb-4">
                    Dr. Rodriguez leads our research initiatives and partnerships with industry and other academic institutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
                <Link href="#">View Full Leadership Team</Link>
              </Button>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Excellence</h3>
                <p className="text-neutral-600">Pursuing the highest standards in teaching, research, and service.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Diversity</h3>
                <p className="text-neutral-600">Embracing different perspectives, experiences, and backgrounds.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Innovation</h3>
                <p className="text-neutral-600">Encouraging creative thinking and pioneering solutions to global challenges.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Global Perspective</h3>
                <p className="text-neutral-600">Cultivating a worldview that respects cultural differences and global interconnectedness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
