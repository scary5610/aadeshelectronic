import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServiceRequestSchema } from "@shared/schema";
import { z } from "zod";
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

// Admin authentication middleware
const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aadesh-secret-key');
    (req as any).admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Service request endpoints
  app.post("/api/service-request", async (req, res) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const serviceRequest = await storage.createServiceRequest(validatedData);
      
      // TODO: Send email notification here using nodemailer
      // For now, just log the request
      console.log("New service request received:", serviceRequest);
      
      res.json({ 
        success: true, 
        message: "Service request submitted successfully",
        id: serviceRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid request data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit service request" 
        });
      }
    }
  });

  app.get("/api/service-requests", async (req, res) => {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch service requests" 
      });
    }
  });

  app.get("/api/service-request/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.getServiceRequest(id);
      
      if (!request) {
        res.status(404).json({ 
          success: false, 
          message: "Service request not found" 
        });
        return;
      }
      
      res.json(request);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch service request" 
      });
    }
  });

  // Admin routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Check credentials - using the specified admin credentials
      if (username === 'AADESH' && password === 'AADESH_2710') {
        const token = jwt.sign(
          { username, isAdmin: true },
          process.env.JWT_SECRET || 'aadesh-secret-key',
          { expiresIn: '24h' }
        );
        
        res.json({ 
          success: true, 
          token,
          message: "Login successful" 
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "Invalid credentials" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Login failed" 
      });
    }
  });

  app.get("/api/admin/service-requests", authenticateAdmin, async (req, res) => {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch service requests" 
      });
    }
  });

  app.put("/api/admin/service-requests/:id", authenticateAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      const updatedRequest = await storage.updateServiceRequestStatus(id, status);
      
      if (!updatedRequest) {
        res.status(404).json({ 
          success: false, 
          message: "Service request not found" 
        });
        return;
      }
      
      res.json({ 
        success: true, 
        data: updatedRequest 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to update service request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
