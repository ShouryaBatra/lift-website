# L.I.F.T. Website

**Lead. Inspire. Future. Transformation.**

A modern, responsive website for L.I.F.T. (Lead & Inspire Future Transformation), a youth empowerment organization dedicated to providing financial literacy and professional development programs for youth in the juvenile justice system, at risk, and in foster care.

## Features

### Public Pages

- **Home**: Hero section with impact stats, program overview, and partner showcase
- **About**: Mission, vision, team profiles, and founders' story
- **Offerings**: Detailed program descriptions and features
- **Chapters**: Interactive map showing global chapters, chapter directory, and join/start chapter options
- **Partners**: Partner organizations showcase and partnership benefits
- **Get Involved**: Volunteer opportunities and ways to contribute
- **Contact**: Contact form and direct email access
- **Impact**: Success stories and detailed impact metrics

### Technical Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Map**: USA map showing chapter locations using Leaflet
- **Smooth Animations**: Framer Motion animations throughout the site
- **Firebase Integration**: Real-time chapter data and authentication
- **Contact Form**: Formspree integration for contact submissions
- **SEO Optimized**: Next.js with proper meta tags and structure

## Tech Stack

### Frontend

- **Next.js 15.1.3** - React framework with App Router
- **React 19.0.0** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.4.1** - Animation library
- **React Icons 5.5.0** - Icon library

### Backend & Services

- **Firebase 11.7.1** - Backend as a Service
  - Firestore - NoSQL database for chapter data
  - Authentication - User management
- **Formspree** - Contact form handling

### Maps & Visualization

- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 5.0.0** - React wrapper for Leaflet

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## Design System

### Color Palette

- **Primary Blue**: `#111153` (lift-blue)
- **Accent**: `#f8fafc` (lift-accent)
- **Text Primary**: `#1e293b`
- **Text Secondary**: `#475569`

### Typography

- **Font Family**: Inter (sans-serif)
- **Responsive Design**: Mobile-first approach

## Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Security

- Environment variables for sensitive data
- Firebase security rules for database access
- Form validation and sanitization
- HTTPS enforcement in production

**Website developed by [Shourya Batra](https://github.com/ShouryaBatra)**
