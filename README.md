# Dr. Michael Chen - Cardiologist Portfolio

A professional, animated portfolio website for Dr. Michael Chen, a board-certified interventional cardiologist. Built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face)

## Features

- **Modern Design** - Clean, professional medical-themed UI with teal and slate color palette
- **Smooth Animations** - CSS-based animations including fade-ins, slide transitions, and floating effects
- **Responsive Layout** - Fully responsive design that works on desktop, tablet, and mobile
- **Sections Include:**
  - Hero with doctor profile and key statistics
  - About section with credentials
  - Services grid (6 cardiac care services)
  - Education & Experience timeline
  - Patient testimonials
  - Contact form with clinic information
- **Performance Optimized** - Server Component architecture for fast loading
- **SEO Ready** - Proper metadata and semantic HTML structure

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animation:** Custom CSS animations
- **Utilities:** clsx for class name management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Client Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and configure build settings
4. Your site will be live in minutes

### Environment Variables

No special environment variables required for basic deployment.

## Project Structure

```
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and animations
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies
```

## Customization

### Changing Doctor Information

Edit the content in `app/page.tsx`:
- Doctor name
- Specialization
- Contact details
- Services offered
- Education timeline
- Testimonials

### Changing Colors

Modify the Tailwind classes in the components. The primary color scheme uses:
- `teal-600` - Primary brand color
- `slate-900` - Dark text
- `slate-600` - Body text
- `white` - Background

### Changing Profile Image

Replace the image URL in the Hero section:
```tsx
<img
  src="YOUR_IMAGE_URL"
  alt="Dr. Michael Chen"
  className="..."
/>
```

## Animations

The site includes CSS-based animations (no JavaScript required):
- `animate-fade-in-up` - Fade in with upward motion
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-float` - Continuous floating effect
- `animate-scale-in` - Scale up animation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ for Dr. Michael Chen
