# Moim Landing Page

A minimalistic landing page for Moim - a location-based real-time chat application.

## About Moim

Moim is a location-based community chat application. It allows users to:
- Join real-time conversations with people nearby
- Formulate hangouts and meetups
- Discover and connect with their local community

## Features

- **100vh Single Page Design** - No scrolling required
- **Minimalistic UI** - Clean and modern design
- **Custom Color Scheme** - Warm orange primary colors
- **Responsive Design** - Works on all devices
- **App Store Integration** - Direct download link
- **Terms of Use Page** - Complete legal documentation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
moim-landing/
├── app/
│   ├── globals.css          # Custom CSS with color variables
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Main landing page
│   └── terms/
│       └── page.js          # Terms of use page
└── public/                  # Static assets
```

## Color Scheme

The project uses a custom color palette with warm orange as the primary color:
- Primary: `hsl(20.5 90.2% 48.2%)` - Warm orange
- Background: `hsl(0 0% 100%)` - White
- Foreground: `hsl(24 9.8% 10%)` - Dark gray
- Muted: `hsl(25 5.3% 44.7%)` - Medium gray

## Technologies Used

- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - No TypeScript as requested
- **System Fonts** - No external font dependencies

## Deployment

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration