import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const serviceRequests = pgTable("service_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  service: text("service").notNull(),
  address: text("address").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertServiceRequestSchema = createInsertSchema(serviceRequests).pick({
  name: true,
  phone: true,
  email: true,
  service: true,
  address: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;
export type ServiceRequest = typeof serviceRequests.$inferSelect;
