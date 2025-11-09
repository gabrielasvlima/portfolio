# Gabriela Lima Portfolio

Portfolio landing page built with **Vite + React + TypeScript**.

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Button, Card, Badge, Sheet)
- **Icons**: lucide-react
- **Animation**: framer-motion
- **Theming**: Custom theme provider (light/dark mode)
- **Fonts**: Inter (body) + Playfair Display (headings)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## Project Structure

```
gabriela-lima-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── header.tsx       # Sticky header with navigation
│   │   ├── footer.tsx       # Footer component
│   │   ├── section.tsx      # Animated section wrapper
│   │   ├── case-card.tsx    # Work case study card
│   │   ├── metric.tsx        # Leadership metric display
│   │   ├── press-strip.tsx  # Press & recognition strip
│   │   ├── contact-cta.tsx  # Contact call-to-action
│   │   └── theme-provider.tsx # Theme context provider
│   ├── lib/
│   │   ├── copy.ts          # All content/copy centralized
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & theme variables
├── public/                  # Static assets
├── index.html               # HTML template
└── vite.config.ts           # Vite configuration
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode support
- ✅ Smooth scroll navigation
- ✅ Accessibility (WCAG AA compliant)
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ TypeScript strict mode
- ✅ All content centralized in `src/lib/copy.ts`

## Customization

All content is centralized in `src/lib/copy.ts`. Edit this file to update:
- Hero section
- Work case studies
- Leadership metrics
- About section
- Contact information

## Dark Mode

The theme provider uses localStorage to persist theme preference. Toggle between light and dark mode using the button in the header.

## License

Private project for Gabriela Lima.
