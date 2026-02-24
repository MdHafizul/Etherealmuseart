

# Ethereal Muse Art — Landing Page Plan

## Design Direction
- **Theme**: Minimalist, editorial, gallery-like — inspired by noorzahran.com's clean layout
- **Colour Palette** (from the artwork): Ivory/cream background (`#F5F0E8`), deep navy (`#1E3A5F`), antique gold (`#C4A265`), burgundy (`#7B2D4E`), dusty lavender (`#9B8FB4`) as accents
- **Typography**: Elegant serif for headings, clean sans-serif for body — refined and airy
- **Animations**: Subtle scroll-reveal using motion/framer-motion, fade-ins on sections

## Pages & Navigation

### 1. Home (Hero + Overview)
- Full-screen hero section using the 21stdev minimal hero component style, adapted with the artist's imagery (uploaded photos of the NikahNama and sampul raya)
- Brand name "Ethereal Muse Art" prominently displayed
- Tagline about handcrafted Islamic geometric art from Malaysia
- Smooth scroll navigation: About · Works · Shop · Services · Contact
- Instagram link in header/footer

### 2. About (Artist Bio)
- Elegant split layout: artist photo/artwork on one side, bio text on the other
- Story of the artist, their journey in Islamic geometric art
- Inspiration, technique, and philosophy
- Mockup placeholder bio text (can be updated later)

### 3. Works & Experience
- Gallery grid showcasing the uploaded artwork images (sampul raya collections, NikahNama pieces)
- Categories/filter: NikahNama, Sampul Raya, Illumination Art
- Experience section: exhibitions, pop-up stores, collaborations
- Timeline or list of past events and pop-up stores

### 4. Shop (Pop-up Store / Merchandise)
- Product grid with the uploaded images as product photos
- Products: Sampul Raya (various collections — blue, purple, pink, burgundy), Mugs, Art Prints
- Each product card: image, name, price (mock), "Add to Cart" button
- Simple cart sidebar/drawer with item list, quantity, and total
- **Mock checkout flow** — simulated payment page (no real integration), confirmation screen

### 5. Services
- Overview of custom art services offered
- **NikahNama Service** (featured, inspired by The Silsila):
  - Hero banner explaining the custom marriage certificate service
  - Design options/packages displayed as cards (e.g., Classic, Premium, Bespoke)
  - Customisation form: names, date, Quranic verse selection, size, frame option
  - "Add to Cart" for each package
  - Mock payment simulation at checkout
- Other services: Custom illumination commissions, corporate art, workshops

### 6. Contact / Footer
- Contact form (name, email, message)
- Instagram link (@etherealmuseart)
- Location: Malaysia
- Footer with navigation links and copyright

## Extra Features
- **Shopping Cart**: Persistent cart drawer across the site, items from both Shop and Services
- **Mock Payment**: Simulated checkout with order summary and fake confirmation — no real backend
- **SEO Optimisation**: Proper meta tags, Open Graph, semantic HTML, structured heading hierarchy, alt texts on all images
- **Responsive**: Fully mobile-friendly, adapting the gallery and hero for smaller screens
- **All data is hardcoded/mocked** — no backend needed

## Technical Approach
- Single-page app with React Router for each section/page
- motion library for scroll animations
- shadcn/ui components for cards, buttons, dialogs, sheets (cart drawer)
- Uploaded images copied to `src/assets/` and used throughout
- Custom CSS variables for the Islamic art colour palette

