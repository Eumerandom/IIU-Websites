import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactInquirySchema,
  insertNewsSchema,
  insertEventSchema,
  insertProgramSchema
} from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - all prefixed with /api
  
  // News routes
  app.get("/api/news", async (req: Request, res: Response) => {
    try {
      const allNews = await storage.getAllNews();
      res.json(allNews);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch news", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/news/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid news ID format" });
      }

      const newsItem = await storage.getNews(id);
      if (!newsItem) {
        return res.status(404).json({ message: "News item not found" });
      }

      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch news item", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Events routes
  app.get("/api/events", async (req: Request, res: Response) => {
    try {
      const allEvents = await storage.getAllEvents();
      res.json(allEvents);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch events", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/events/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid event ID format" });
      }

      const event = await storage.getEvent(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }

      res.json(event);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch event", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Programs routes
  app.get("/api/programs", async (req: Request, res: Response) => {
    try {
      const { faculty, level } = req.query;
      
      let programs;
      if (faculty && typeof faculty === 'string') {
        programs = await storage.getProgramsByFaculty(faculty);
      } else if (level && typeof level === 'string') {
        programs = await storage.getProgramsByLevel(level);
      } else {
        programs = await storage.getAllPrograms();
      }
      
      res.json(programs);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch programs", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.get("/api/programs/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid program ID format" });
      }

      const program = await storage.getProgram(id);
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }

      res.json(program);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch program", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Contact inquiry route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validationResult = insertContactInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Add timestamp to the inquiry
      const inquiryWithTimestamp = {
        ...validationResult.data,
        submittedAt: new Date().toISOString()
      };
      
      // Create the contact inquiry
      const newInquiry = await storage.createContactInquiry(inquiryWithTimestamp);
      
      res.status(201).json({
        message: "Contact inquiry submitted successfully",
        inquiry: newInquiry
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to submit contact inquiry", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Newsletter subscription route (simple implementation)
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const emailSchema = z.object({
        email: z.string().email({ message: "Invalid email address" })
      });
      
      const validationResult = emailSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const errorMessage = fromZodError(validationResult.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // In a real implementation, this would store the email in a database or send it to an email service
      // For now, we'll just send a success response
      
      res.status(200).json({ 
        message: "Subscription successful", 
        email: validationResult.data.email 
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to process subscription", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
