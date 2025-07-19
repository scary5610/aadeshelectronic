# Aadesh Electric Store - Motor Repair & Electrical Services

## Overview

This is a full-stack web application for Aadesh Electric Store, a motor repair and electrical services business in Palitana, Gujarat. The application serves as a business website with service listings, spare parts catalog, and a service request form system. It's built with a modern React frontend and Express.js backend, featuring multi-language support (English/Gujarati) and a responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom language context for English/Gujarati support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: RESTful API endpoints
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Vite for hot module replacement and development server

## Key Components

### Data Models
- **Users**: Basic user authentication structure (id, username, password)
- **Service Requests**: Customer service request system with fields for:
  - Contact information (name, phone, email)
  - Service type and address
  - Message and status tracking
  - Timestamps for request management

### Frontend Components
- **Landing Page**: Hero section with call-to-action buttons
- **Services Section**: Grid layout showcasing electrical services
- **Spare Parts Catalog**: Visual catalog of available parts
- **Contact Form**: Service request submission with validation
- **Multi-language Support**: Toggle between English and Gujarati
- **WhatsApp Integration**: Floating WhatsApp button for instant contact

### Backend Services
- **Service Request API**: Handles creation and retrieval of service requests
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request logging

## Data Flow

1. **Service Request Submission**:
   - User fills out contact form with service details
   - Frontend validates data using Zod schema
   - API request sent to `/api/service-request`
   - Backend validates and stores request
   - Success/error response returned to user

2. **Service Request Management**:
   - GET `/api/service-requests` retrieves all requests
   - Status updates can be performed via API
   - In-memory storage currently used (ready for database integration)

3. **Multi-language Content**:
   - Translation keys stored in frontend
   - Language preference saved in localStorage
   - Dynamic content switching without page reload

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form, Hookform Resolvers
- **HTTP Client**: Fetch API with TanStack Query
- **Routing**: Wouter
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod
- **Development**: tsx, esbuild
- **Session**: connect-pg-simple (for future session management)

### Development Tools
- **Build**: Vite, ESBuild
- **TypeScript**: Full TypeScript support
- **Linting**: Built-in type checking
- **Hot Reload**: Vite dev server with HMR

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server on port 5173
- **Backend**: Express server with hot reload via tsx
- **Database**: Neon Database with connection pooling
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: Vite build generates optimized bundle
- **Backend**: ESBuild bundles server code
- **Static Assets**: Served from dist/public directory
- **Database**: PostgreSQL via Neon Database
- **Environment**: NODE_ENV=production

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Serverless PostgreSQL via Neon Database
- **Schema**: Defined in shared/schema.ts for type safety

## Changelog

```
Changelog:
- July 04, 2025. Initial setup with bilingual support and service request form
- July 04, 2025. Updated business information:
  * Company name: Changed from "Asha Electric Store" to "Aadesh Electric Store"
  * Phone numbers: Added +91 87994 11070 and +91 81415 25458
  * WhatsApp: Updated to +91 87994 11070
  * Address: Updated to "Saddi bhuvan no khacho shop no.12 palitana taleti, palitana, bhavnagar, 364270"
  * Business hours: Changed to 24/7 service
  * Removed "Learn More" buttons from services section
  * Removed "View Parts" buttons from spare parts section
  * Enhanced UI with better visual design, animations, testimonials, and statistics
- July 18, 2025. Added PostgreSQL database integration:
  * Database connection established using Neon Database
  * Updated storage system to use PostgreSQL instead of memory storage
  * Schema configured for users and service requests
  * Database tables created and ready for data storage
- July 18, 2025. Updated contact information:
  * Added email: pchudasama830@gmail.com
  * Added third mobile number: +91 96875 25458
  * Added second shop address: "Nava naka, near limda vala khodiyar maa Temple, palitana, bhavnagar, 364270"
  * Updated both English and Gujarati translations
  * Added email display in contact section with mail icon
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```