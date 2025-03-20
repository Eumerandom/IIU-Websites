import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// University news model
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  publishDate: text("publish_date").notNull(),
  author: text("author").notNull(),
  imageUrl: text("image_url"),
  isPublished: boolean("is_published").default(true),
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
});

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

// University events model
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  excerpt: text("excerpt").notNull(),
  eventDate: text("event_date").notNull(),
  location: text("location").notNull(),
  time: text("time").notNull(),
  imageUrl: text("image_url"),
  isPublished: boolean("is_published").default(true),
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

// Academic programs model
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  faculty: text("faculty").notNull(),
  description: text("description").notNull(),
  level: text("level").notNull(), // 'undergraduate', 'graduate', etc.
  duration: text("duration").notNull(),
});

export const insertProgramSchema = createInsertSchema(programs).omit({
  id: true,
});

export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Program = typeof programs.$inferSelect;

// Contact inquiries model
export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submittedAt: text("submitted_at").notNull(),
  isResolved: boolean("is_resolved").default(false),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  isResolved: true,
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
