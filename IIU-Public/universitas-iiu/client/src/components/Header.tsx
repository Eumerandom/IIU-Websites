import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  Phone, 
  Mail, 
  User, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const AnnouncementBar = () => (
  <div className="bg-amber-300 py-2 px-4 text-primary relative overflow-hidden">
    <div className="flex items-center container mx-auto">
      <div className="font-bold mr-4 whitespace-nowrap">ANNOUNCEMENTS:</div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite]">
          Fall 2023 Semester Registration Now Open | COVID-19 Campus Updates | International Student Welcome Week: August 25-30
        </div>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-1 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <a href="tel:+123456789" className="flex items-center">
              <Phone className="h-3 w-3 mr-1" /> +123-456-789
            </a>
            <a href="mailto:info@universitasiiu.edu" className="flex items-center">
              <Mail className="h-3 w-3 mr-1" /> info@universitasiiu.edu
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="University portal login" className="flex items-center">
              <User className="h-4 w-4 mr-1" /> <span className="hidden md:inline">Portal Login</span>
            </a>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook" className="hover:text-amber-300 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-amber-300 transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-amber-300 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-amber-300 transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Announcement Banner */}
      <AnnouncementBar />
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-primary font-serif font-bold text-2xl md:text-3xl flex items-center">
              <span className="text-amber-500 mr-1">U</span>IIU
            </div>
            <div className="ml-2 hidden md:block">
              <div className="text-primary text-sm font-semibold">Universitas IIU</div>
              <div className="text-neutral-600 text-xs">Excellence in Education</div>
            </div>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" className={`px-3 py-2 ${isActive('/') ? 'text-amber-500' : 'text-primary'} hover:text-amber-500 font-semibold`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 ${isActive('/about') ? 'text-amber-500' : 'text-primary'} hover:text-amber-500 font-semibold`}>
              About
            </Link>
            <div className="relative group">
              <Link href="/academics" className={`px-3 py-2 ${isActive('/academics') ? 'text-amber-500' : 'text-primary'} hover:text-amber-500 font-semibold flex items-center`}>
                Academics <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50" role="menuitem">Undergraduate Programs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50" role="menuitem">Graduate Programs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50" role="menuitem">Research Initiatives</a>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50" role="menuitem">Academic Calendar</a>
                </div>
              </div>
            </div>
            <Link href="/news" className={`px-3 py-2 ${isActive('/news') ? 'text-amber-500' : 'text-primary'} hover:text-amber-500 font-semibold`}>
              News & Events
            </Link>
            <Link href="/contact" className={`px-3 py-2 ${isActive('/contact') ? 'text-amber-500' : 'text-primary'} hover:text-amber-500 font-semibold`}>
              Contact
            </Link>
            <a href="#" className="ml-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition font-semibold">
              Apply Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-primary focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-primary font-medium hover:bg-neutral-50 rounded-md">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-primary font-medium hover:bg-neutral-50 rounded-md">
                About
              </Link>
              <div className="relative">
                <button 
                  onClick={toggleAcademicsDropdown}
                  className="w-full text-left block px-3 py-2 text-primary font-medium hover:bg-neutral-50 rounded-md flex justify-between items-center"
                >
                  Academics <ChevronDown className="h-4 w-4" />
                </button>
                {academicsDropdownOpen && (
                  <div className="pl-4 space-y-1 pt-1 pb-2">
                    <a href="#" className="block px-3 py-1 text-primary font-medium hover:bg-neutral-50 rounded-md">Undergraduate Programs</a>
                    <a href="#" className="block px-3 py-1 text-primary font-medium hover:bg-neutral-50 rounded-md">Graduate Programs</a>
                    <a href="#" className="block px-3 py-1 text-primary font-medium hover:bg-neutral-50 rounded-md">Research Initiatives</a>
                    <a href="#" className="block px-3 py-1 text-primary font-medium hover:bg-neutral-50 rounded-md">Academic Calendar</a>
                  </div>
                )}
              </div>
              <Link href="/news" className="block px-3 py-2 text-primary font-medium hover:bg-neutral-50 rounded-md">
                News & Events
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-primary font-medium hover:bg-neutral-50 rounded-md">
                Contact
              </Link>
              <a href="#" className="block px-3 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition font-medium text-center mt-2">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
