import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90">We're here to help with any questions you may have</p>
          </div>
        </div>
      </div>

      <ContactForm />
      
      {/* Additional Contact Information */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Departments</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">For specific inquiries, please contact the relevant department directly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Admissions Office</h3>
              <p className="text-neutral-600 mb-4">For inquiries about applications, requirements, and enrollment procedures.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: admissions@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 101</li>
                <li>Hours: Monday-Friday, 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Financial Aid</h3>
              <p className="text-neutral-600 mb-4">For information about scholarships, grants, loans, and payment plans.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: financialaid@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 102</li>
                <li>Hours: Monday-Friday, 9:00 AM - 4:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">International Office</h3>
              <p className="text-neutral-600 mb-4">For international students seeking information about programs and visa support.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: international@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 103</li>
                <li>Hours: Monday-Friday, 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Career Services</h3>
              <p className="text-neutral-600 mb-4">For support with career planning, internships, and job opportunities.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: careers@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 104</li>
                <li>Hours: Monday-Friday, 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Student Affairs</h3>
              <p className="text-neutral-600 mb-4">For questions about campus life, housing, and student organizations.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: studentaffairs@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 105</li>
                <li>Hours: Monday-Friday, 8:30 AM - 5:30 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-primary mb-3">IT Support</h3>
              <p className="text-neutral-600 mb-4">For technical assistance with university systems and accounts.</p>
              <ul className="text-neutral-700 space-y-2">
                <li>Email: itsupport@universitasiiu.edu</li>
                <li>Phone: +123-456-7890 ext. 106</li>
                <li>Hours: Monday-Sunday, 8:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Campus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Campus</h2>
              <p className="text-neutral-600">We invite you to visit Universitas IIU and experience our vibrant campus community firsthand.</p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Campus Tours</h3>
                  <p className="text-neutral-700 mb-4">
                    Campus tours are available Monday through Friday at 10:00 AM and 2:00 PM, and on select Saturdays at 11:00 AM. Tours are led by current students and include visits to academic buildings, residence halls, dining facilities, and recreational areas.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Reservations</h4>
                    <p className="text-neutral-700">
                      Reservations are required for campus tours. Please schedule your visit at least one week in advance by calling our Admissions Office or registering online.
                    </p>
                  </div>
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-md transition">
                    Schedule a Visit
                  </button>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">Directions</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">By Car</h4>
                    <p className="text-neutral-700">
                      The university is located at 123 University Avenue. Visitor parking is available in Lot A and B. Parking permits can be obtained at the security booth at the main entrance.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">By Public Transportation</h4>
                    <p className="text-neutral-700">
                      Bus routes 10, 15, and 22 stop directly in front of the university's main gate. The nearest subway station is Central Station, a 10-minute walk from campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">From the Airport</h4>
                    <p className="text-neutral-700">
                      The university is approximately 30 minutes by car from International Airport. Taxi services and airport shuttles are available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-neutral-600">Find answers to commonly asked questions about Universitas IIU.</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">What are the application deadlines?</h3>
                <p className="text-neutral-700">
                  For undergraduate programs, the early application deadline is November 1, regular application deadline is February 1, and rolling admissions continue until all positions are filled. Graduate program deadlines vary by department and are available on our Admissions website.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Are scholarships available?</h3>
                <p className="text-neutral-700">
                  Yes, Universitas IIU offers a variety of merit-based and need-based scholarships for both domestic and international students. Some scholarships are automatically considered with your application, while others require separate applications. Visit our Financial Aid office or website for more information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Is on-campus housing available?</h3>
                <p className="text-neutral-700">
                  Yes, Universitas IIU offers a variety of housing options for undergraduate and graduate students, including traditional residence halls, suite-style accommodations, and apartments. First-year undergraduate students are guaranteed on-campus housing if they apply by the May 1 deadline.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">How can I request official transcripts?</h3>
                <p className="text-neutral-700">
                  Current students and alumni can request official transcripts through the Registrar's Office website or in person at the Registrar's Office. There is a nominal fee for each transcript, and processing typically takes 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
