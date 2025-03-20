import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    type: "NEWS",
    date: "August 15, 2023",
    title: "Groundbreaking Research Published in Science Journal",
    excerpt: "Professor Maria Rodriguez's team has made a significant breakthrough in renewable energy technology that could revolutionize solar power efficiency.",
    content: "The research team led by Professor Maria Rodriguez from the Department of Engineering has published their groundbreaking findings on a new type of solar cell material in the prestigious Science Journal. The innovative material has demonstrated a remarkable 35% increase in energy conversion efficiency compared to conventional solar panels, potentially transforming the renewable energy landscape. This breakthrough came after three years of intensive research and collaboration with international partners.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. James Wilson"
  },
  {
    type: "EVENT",
    date: "September 10, 2023",
    title: "Annual International Business Conference",
    excerpt: "Join us for our flagship business conference featuring keynote speakers from global companies and networking opportunities with industry leaders.",
    content: "The Business School at Universitas IIU is proud to host the 12th Annual International Business Conference on September 10-12, 2023. This year's theme is 'Business Innovation in a Post-Pandemic World,' featuring keynote speeches from CEOs of Fortune 500 companies, panel discussions on emerging business trends, and workshops on entrepreneurship and digital transformation. The event provides excellent networking opportunities for students, alumni, and industry professionals.",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "University Conference Center",
    time: "9:00 AM - 5:00 PM"
  },
  {
    type: "NEWS",
    date: "July 28, 2023",
    title: "Engineering Students Win National Competition",
    excerpt: "A team of mechanical engineering students has secured first place in the National Robotics Challenge with their innovative design.",
    content: "Five undergraduate students from the Department of Mechanical Engineering have won the prestigious National Robotics Challenge with their innovative design of an autonomous waste-sorting robot. The team spent six months developing the robot, which uses artificial intelligence to identify and sort different types of recyclable materials with 95% accuracy. The judges were particularly impressed by the robot's efficiency and the potential real-world applications of the technology in waste management facilities.",
    image: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Prof. Robert Chen"
  },
  {
    type: "EVENT",
    date: "October 5, 2023",
    title: "Research Symposium on Environmental Sciences",
    excerpt: "A gathering of leading researchers to discuss the latest findings in climate science and environmental conservation.",
    content: "The Faculty of Science is hosting a Research Symposium on Environmental Sciences, bringing together prominent researchers from around the world to share their latest findings and insights on climate change, biodiversity conservation, and sustainable resource management. The symposium will feature keynote addresses, panel discussions, poster presentations, and workshops aimed at fostering collaboration and advancing knowledge in these critical areas.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "Science Building, Auditorium A",
    time: "10:00 AM - 4:00 PM"
  },
  {
    type: "NEWS",
    date: "June 12, 2023",
    title: "University Receives Major Grant for Medical Research",
    excerpt: "The Department of Health Sciences has been awarded a $5 million grant to study innovative treatments for neurodegenerative diseases.",
    content: "The Department of Health Sciences at Universitas IIU has been awarded a prestigious $5 million grant from the National Health Foundation to conduct groundbreaking research on novel therapeutic approaches for neurodegenerative diseases such as Alzheimer's and Parkinson's. The five-year research project will be led by Professor Emily Chang and will involve collaboration with several international research institutions. The grant will fund state-of-the-art laboratory equipment, research assistants, and clinical trials.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Sarah Adams"
  },
  {
    type: "EVENT",
    date: "November 15, 2023",
    title: "International Arts Festival",
    excerpt: "A week-long celebration of arts and culture featuring exhibitions, performances, and workshops from diverse traditions.",
    content: "The Faculty of Arts and Humanities is proud to present the International Arts Festival, a vibrant celebration of global arts and cultural traditions. The festival will feature art exhibitions, musical performances, theatrical productions, dance shows, film screenings, and interactive workshops. Guest artists from various countries will showcase their talents and share their cultural heritage, providing a unique opportunity for cultural exchange and appreciation.",
    image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    location: "University Arts Center",
    time: "Various times throughout the week"
  }
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(newsItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = newsItems.filter(item => 
      item.title.toLowerCase().includes(term) || 
      item.excerpt.toLowerCase().includes(term) ||
      item.content.toLowerCase().includes(term)
    );
    
    setFilteredItems(filtered);
  };

  const filterByType = (type: string) => {
    if (type === "all") {
      setFilteredItems(newsItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.excerpt.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm)
      ));
    } else {
      setFilteredItems(newsItems.filter(item => 
        item.type === type.toUpperCase() && (
          item.title.toLowerCase().includes(searchTerm) || 
          item.excerpt.toLowerCase().includes(searchTerm) ||
          item.content.toLowerCase().includes(searchTerm)
        )
      ));
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl md:text-2xl text-white/90">Stay updated with the latest happenings at Universitas IIU</p>
          </div>
        </div>
      </div>

      {/* News & Events Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <Label htmlFor="search" className="sr-only">Search</Label>
                <Input
                  id="search"
                  placeholder="Search news and events..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full"
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full" onValueChange={filterByType}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="news">News</TabsTrigger>
                  <TabsTrigger value="event">Events</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <span className={`${item.type === 'NEWS' ? 'bg-amber-400 text-primary' : 'bg-primary/10 text-primary'} text-xs font-bold px-2 py-1 rounded mr-2`}>
                        {item.type}
                      </span>
                      <div className="flex items-center text-neutral-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 flex-grow">
                    <p className="text-neutral-600">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    {item.type === 'NEWS' ? (
                      <div className="w-full">
                        <p className="text-sm text-neutral-500 mb-3">By {item.author}</p>
                        <Button className="w-full text-primary border-primary" variant="outline">Read Full Article</Button>
                      </div>
                    ) : (
                      <div className="w-full">
                        <div className="text-sm text-neutral-500 mb-3">
                          <p>Location: {item.location}</p>
                          <p>Time: {item.time}</p>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary-dark">Event Details</Button>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-bold text-neutral-700 mb-2">No results found</h3>
                <p className="text-neutral-600">Please try a different search term or filter.</p>
              </div>
            )}
          </div>
          
          {/* Newsletter Subscription */}
          <div className="mt-16 bg-neutral-50 rounded-lg p-8 shadow-md max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">Stay Updated</h3>
              <p className="text-neutral-600">Subscribe to our newsletter to receive the latest news and event announcements.</p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
                required
              />
              <Button type="submit" className="bg-amber-500 hover:bg-amber-600 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
