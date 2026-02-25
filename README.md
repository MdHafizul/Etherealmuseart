# Ethereal Muse Art

A beautiful e-commerce website for Ethereal Muse Art, featuring handcrafted Islamic geometric art, Nikah Signage marriage certificates, and sampul raya collections from Malaysia.

## Features

- 🎨 **Portfolio Gallery** - Showcase of Islamic geometric artwork
- 🛍️ **Shop** - E-commerce functionality with shopping cart
- 📝 **Custom Services** - Nikah Signage packages with customization
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast & Modern** - Built with Vite, React, and TypeScript
- 🎭 **Smooth Animations** - Framer Motion for delightful interactions
- 🎨 **Beautiful UI** - shadcn/ui components + Tailwind CSS

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Form Handling:** React Hook Form + Zod
- **State Management:** React Context (Cart)
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd Etherealmuseart

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Lint code
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── sections/   # Page sections (Hero, Services, etc.)
│   └── ui/         # shadcn/ui components
├── context/        # React Context providers
├── data/           # Product and content data
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Route pages
└── test/           # Test files
```

## Key Pages

- **Home** (`/`) - Hero, featured collections, services overview
- **About** (`/about`) - Artist profile and story
- **Works** (`/works`) - Portfolio gallery with filters
- **Shop** (`/shop`) - Product catalog with cart
- **Services** (`/services`) - Nikah Signage packages
- **Contact** - Integrated in footer

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## License

All rights reserved © Ethereal Muse Art

## Contact

For inquiries about the artwork or website, visit [etherealmuseart.com](https://etherealmuseart.com)

