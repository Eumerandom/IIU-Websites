import Hero from "@/components/ui/Hero";
import Features from "@/components/ui/Features";
import AboutSection from "@/components/ui/AboutSection";
import Academics from "@/components/ui/Academics";
import Testimonials from "@/components/ui/Testimonials";
import NewsEvents from "@/components/ui/NewsEvents";
import CallToAction from "@/components/ui/CallToAction";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <Academics />
      <Testimonials />
      <NewsEvents />
      <CallToAction />
      <ContactForm />
    </>
  );
}
