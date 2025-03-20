import { 
  news, 
  events, 
  programs, 
  contactInquiries, 
  users,
  type User, 
  type InsertUser,
  type News,
  type InsertNews,
  type Event,
  type InsertEvent,
  type Program,
  type InsertProgram,
  type ContactInquiry,
  type InsertContactInquiry 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // News methods
  getNews(id: number): Promise<News | undefined>;
  getAllNews(): Promise<News[]>;
  createNews(news: InsertNews): Promise<News>;
  updateNews(id: number, news: Partial<InsertNews>): Promise<News | undefined>;
  deleteNews(id: number): Promise<boolean>;
  
  // Events methods
  getEvent(id: number): Promise<Event | undefined>;
  getAllEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
  
  // Programs methods
  getProgram(id: number): Promise<Program | undefined>;
  getAllPrograms(): Promise<Program[]>;
  getProgramsByFaculty(faculty: string): Promise<Program[]>;
  getProgramsByLevel(level: string): Promise<Program[]>;
  createProgram(program: InsertProgram): Promise<Program>;
  updateProgram(id: number, program: Partial<InsertProgram>): Promise<Program | undefined>;
  deleteProgram(id: number): Promise<boolean>;
  
  // Contact inquiries methods
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  updateContactInquiry(id: number, inquiry: Partial<InsertContactInquiry>): Promise<ContactInquiry | undefined>;
  markContactInquiryAsResolved(id: number): Promise<ContactInquiry | undefined>;
  deleteContactInquiry(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsItems: Map<number, News>;
  private eventsItems: Map<number, Event>;
  private programsItems: Map<number, Program>;
  private contactInquiriesItems: Map<number, ContactInquiry>;
  
  private userId: number;
  private newsId: number;
  private eventId: number;
  private programId: number;
  private contactInquiryId: number;

  constructor() {
    this.users = new Map();
    this.newsItems = new Map();
    this.eventsItems = new Map();
    this.programsItems = new Map();
    this.contactInquiriesItems = new Map();
    
    this.userId = 1;
    this.newsId = 1;
    this.eventId = 1;
    this.programId = 1;
    this.contactInquiryId = 1;
    
    // Initialize with sample data for the university website
    this.initializeData();
  }

  // Initialize sample data for the university website
  private initializeData() {
    // Initialize academic programs
    const academicPrograms: InsertProgram[] = [
      {
        name: "Bachelor of Business Administration",
        faculty: "Business & Economics",
        description: "A comprehensive program covering management, marketing, finance, and entrepreneurship.",
        level: "undergraduate",
        duration: "4 years"
      },
      {
        name: "Bachelor of Economics",
        faculty: "Business & Economics",
        description: "Study economic theory, policy, and applications in both macro and microeconomics.",
        level: "undergraduate",
        duration: "3 years"
      },
      {
        name: "Master of Business Administration (MBA)",
        faculty: "Business & Economics",
        description: "Advanced business education with specializations in various management disciplines.",
        level: "graduate",
        duration: "1-2 years"
      },
      {
        name: "Bachelor of Civil Engineering",
        faculty: "Engineering & Technology",
        description: "Learn to design, construct, and maintain infrastructure projects and systems.",
        level: "undergraduate",
        duration: "4 years"
      },
      {
        name: "Master of Computer Science",
        faculty: "Engineering & Technology",
        description: "Advanced study in artificial intelligence, data science, or software engineering.",
        level: "graduate",
        duration: "2 years"
      },
      {
        name: "Bachelor of Fine Arts",
        faculty: "Arts & Humanities",
        description: "Develop creative skills in visual arts, design, performance, or digital media.",
        level: "undergraduate",
        duration: "4 years"
      }
    ];

    // Add programs to storage
    academicPrograms.forEach(program => {
      this.createProgram(program);
    });

    // Initialize news items
    const newsItems: InsertNews[] = [
      {
        title: "Groundbreaking Research Published in Science Journal",
        content: "The research team led by Professor Maria Rodriguez from the Department of Engineering has published their groundbreaking findings on a new type of solar cell material in the prestigious Science Journal. The innovative material has demonstrated a remarkable 35% increase in energy conversion efficiency compared to conventional solar panels, potentially transforming the renewable energy landscape. This breakthrough came after three years of intensive research and collaboration with international partners.",
        excerpt: "Professor Maria Rodriguez's team has made a significant breakthrough in renewable energy technology that could revolutionize solar power efficiency.",
        publishDate: "August 15, 2023",
        author: "Dr. James Wilson",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      },
      {
        title: "Engineering Students Win National Competition",
        content: "Five undergraduate students from the Department of Mechanical Engineering have won the prestigious National Robotics Challenge with their innovative design of an autonomous waste-sorting robot. The team spent six months developing the robot, which uses artificial intelligence to identify and sort different types of recyclable materials with 95% accuracy. The judges were particularly impressed by the robot's efficiency and the potential real-world applications of the technology in waste management facilities.",
        excerpt: "A team of mechanical engineering students has secured first place in the National Robotics Challenge with their innovative design.",
        publishDate: "July 28, 2023",
        author: "Prof. Robert Chen",
        imageUrl: "https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      },
      {
        title: "University Receives Major Grant for Medical Research",
        content: "The Department of Health Sciences at Universitas IIU has been awarded a prestigious $5 million grant from the National Health Foundation to conduct groundbreaking research on novel therapeutic approaches for neurodegenerative diseases such as Alzheimer's and Parkinson's. The five-year research project will be led by Professor Emily Chang and will involve collaboration with several international research institutions. The grant will fund state-of-the-art laboratory equipment, research assistants, and clinical trials.",
        excerpt: "The Department of Health Sciences has been awarded a $5 million grant to study innovative treatments for neurodegenerative diseases.",
        publishDate: "June 12, 2023",
        author: "Dr. Sarah Adams",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      }
    ];

    // Add news to storage
    newsItems.forEach(item => {
      this.createNews(item);
    });

    // Initialize events
    const eventsItems: InsertEvent[] = [
      {
        title: "Annual International Business Conference",
        description: "The Business School at Universitas IIU is proud to host the 12th Annual International Business Conference on September 10-12, 2023. This year's theme is 'Business Innovation in a Post-Pandemic World,' featuring keynote speeches from CEOs of Fortune 500 companies, panel discussions on emerging business trends, and workshops on entrepreneurship and digital transformation. The event provides excellent networking opportunities for students, alumni, and industry professionals.",
        excerpt: "Join us for our flagship business conference featuring keynote speakers from global companies and networking opportunities with industry leaders.",
        eventDate: "September 10, 2023",
        location: "University Conference Center",
        time: "9:00 AM - 5:00 PM",
        imageUrl: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      },
      {
        title: "Research Symposium on Environmental Sciences",
        description: "The Faculty of Science is hosting a Research Symposium on Environmental Sciences, bringing together prominent researchers from around the world to share their latest findings and insights on climate change, biodiversity conservation, and sustainable resource management. The symposium will feature keynote addresses, panel discussions, poster presentations, and workshops aimed at fostering collaboration and advancing knowledge in these critical areas.",
        excerpt: "A gathering of leading researchers to discuss the latest findings in climate science and environmental conservation.",
        eventDate: "October 5, 2023",
        location: "Science Building, Auditorium A",
        time: "10:00 AM - 4:00 PM",
        imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      },
      {
        title: "International Arts Festival",
        description: "The Faculty of Arts and Humanities is proud to present the International Arts Festival, a vibrant celebration of global arts and cultural traditions. The festival will feature art exhibitions, musical performances, theatrical productions, dance shows, film screenings, and interactive workshops. Guest artists from various countries will showcase their talents and share their cultural heritage, providing a unique opportunity for cultural exchange and appreciation.",
        excerpt: "A week-long celebration of arts and culture featuring exhibitions, performances, and workshops from diverse traditions.",
        eventDate: "November 15, 2023",
        location: "University Arts Center",
        time: "Various times throughout the week",
        imageUrl: "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        isPublished: true
      }
    ];

    // Add events to storage
    eventsItems.forEach(event => {
      this.createEvent(event);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // News methods
  async getNews(id: number): Promise<News | undefined> {
    return this.newsItems.get(id);
  }

  async getAllNews(): Promise<News[]> {
    return Array.from(this.newsItems.values())
      .filter(news => news.isPublished)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  async createNews(newsItem: InsertNews): Promise<News> {
    const id = this.newsId++;
    const news: News = { ...newsItem, id };
    this.newsItems.set(id, news);
    return news;
  }

  async updateNews(id: number, newsUpdate: Partial<InsertNews>): Promise<News | undefined> {
    const existingNews = this.newsItems.get(id);
    if (!existingNews) return undefined;

    const updatedNews: News = { ...existingNews, ...newsUpdate };
    this.newsItems.set(id, updatedNews);
    return updatedNews;
  }

  async deleteNews(id: number): Promise<boolean> {
    return this.newsItems.delete(id);
  }

  // Events methods
  async getEvent(id: number): Promise<Event | undefined> {
    return this.eventsItems.get(id);
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.eventsItems.values())
      .filter(event => event.isPublished)
      .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());
  }

  async createEvent(eventItem: InsertEvent): Promise<Event> {
    const id = this.eventId++;
    const event: Event = { ...eventItem, id };
    this.eventsItems.set(id, event);
    return event;
  }

  async updateEvent(id: number, eventUpdate: Partial<InsertEvent>): Promise<Event | undefined> {
    const existingEvent = this.eventsItems.get(id);
    if (!existingEvent) return undefined;

    const updatedEvent: Event = { ...existingEvent, ...eventUpdate };
    this.eventsItems.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: number): Promise<boolean> {
    return this.eventsItems.delete(id);
  }

  // Programs methods
  async getProgram(id: number): Promise<Program | undefined> {
    return this.programsItems.get(id);
  }

  async getAllPrograms(): Promise<Program[]> {
    return Array.from(this.programsItems.values());
  }

  async getProgramsByFaculty(faculty: string): Promise<Program[]> {
    return Array.from(this.programsItems.values())
      .filter(program => program.faculty === faculty);
  }

  async getProgramsByLevel(level: string): Promise<Program[]> {
    return Array.from(this.programsItems.values())
      .filter(program => program.level === level);
  }

  async createProgram(programItem: InsertProgram): Promise<Program> {
    const id = this.programId++;
    const program: Program = { ...programItem, id };
    this.programsItems.set(id, program);
    return program;
  }

  async updateProgram(id: number, programUpdate: Partial<InsertProgram>): Promise<Program | undefined> {
    const existingProgram = this.programsItems.get(id);
    if (!existingProgram) return undefined;

    const updatedProgram: Program = { ...existingProgram, ...programUpdate };
    this.programsItems.set(id, updatedProgram);
    return updatedProgram;
  }

  async deleteProgram(id: number): Promise<boolean> {
    return this.programsItems.delete(id);
  }

  // Contact inquiries methods
  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiriesItems.get(id);
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiriesItems.values())
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  }

  async createContactInquiry(inquiryData: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.contactInquiryId++;
    const inquiry: ContactInquiry = { 
      ...inquiryData, 
      id,
      isResolved: false
    };
    this.contactInquiriesItems.set(id, inquiry);
    return inquiry;
  }

  async updateContactInquiry(id: number, inquiryUpdate: Partial<InsertContactInquiry>): Promise<ContactInquiry | undefined> {
    const existingInquiry = this.contactInquiriesItems.get(id);
    if (!existingInquiry) return undefined;

    const updatedInquiry: ContactInquiry = { ...existingInquiry, ...inquiryUpdate };
    this.contactInquiriesItems.set(id, updatedInquiry);
    return updatedInquiry;
  }

  async markContactInquiryAsResolved(id: number): Promise<ContactInquiry | undefined> {
    const existingInquiry = this.contactInquiriesItems.get(id);
    if (!existingInquiry) return undefined;

    const updatedInquiry: ContactInquiry = { ...existingInquiry, isResolved: true };
    this.contactInquiriesItems.set(id, updatedInquiry);
    return updatedInquiry;
  }

  async deleteContactInquiry(id: number): Promise<boolean> {
    return this.contactInquiriesItems.delete(id);
  }
}

export const storage = new MemStorage();
