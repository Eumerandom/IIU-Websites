import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <div className="font-serif font-bold text-3xl flex items-center">
                <span className="text-amber-400 mr-1">U</span>IIU
              </div>
              <div className="text-white/80 mt-2">Excellence in Education</div>
            </div>
            
            <p className="text-white/70 mb-6">Universitas IIU is dedicated to providing a transformative educational experience that prepares students for leadership and service in a diverse and interconnected world.</p>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-primary transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-primary transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-primary transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-primary transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-amber-400 transition">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-amber-400 transition">About Us</Link></li>
              <li><Link href="/academics" className="text-white/70 hover:text-amber-400 transition">Academic Programs</Link></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Admissions</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Research</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Campus Life</a></li>
              <li><Link href="/news" className="text-white/70 hover:text-amber-400 transition">News & Events</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-amber-400 transition">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Academic Calendar</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Library</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Career Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Student Portal</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Faculty Directory</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Research Publications</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">International Office</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition">Alumni Network</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter to receive updates about news, events, and opportunities.</p>
            
            <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-neutral-800" 
                />
                <button 
                  type="submit" 
                  className="bg-amber-400 hover:bg-amber-500 text-primary font-semibold px-4 rounded-r-md transition"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            <div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <div className="text-white/70 space-y-2">
                <p>123 University Avenue<br />City, State 12345<br />Country</p>
                <p>Phone: +123-456-7890</p>
                <p>Email: info@universitasiiu.edu</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Universitas IIU. All rights reserved.
            </div>
            <div className="flex space-x-4 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
