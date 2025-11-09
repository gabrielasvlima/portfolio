# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

All content is centralized in `lib/copy.ts`. Edit this file to update:
- Hero section text
- Work case studies
- Leadership metrics
- About section
- Contact information

## Image Placeholders

The project includes placeholder files for:
- `public/profile.jpg` - Profile photo (replace with actual image, recommended: 800x800px)
- `public/og.jpg` - Open Graph image for social sharing (replace with actual image, recommended: 1200x630px)

Currently, the hero section uses a gradient placeholder with initials. Replace with actual images for production.

## Features Implemented

✅ Next.js 14 with App Router
✅ TypeScript with strict mode
✅ Tailwind CSS with custom theme
✅ shadcn/ui components (Button, Card, Badge, Sheet)
✅ Dark mode support (next-themes)
✅ Framer Motion animations
✅ Responsive design (mobile-first)
✅ Accessibility (WCAG AA compliant)
✅ SEO optimization
✅ Smooth scroll navigation
✅ All content from lib/copy.ts

## Customization

### Colors
Edit `app/globals.css` to customize the color scheme. The primary color is set to `#0F3D3E` (deep green).

### Fonts
Fonts are configured in `app/layout.tsx`:
- Inter (body text)
- Playfair Display (headings)

### Components
All components are in the `components/` directory. Each component is self-contained and can be customized independently.

## Next Steps

1. Replace placeholder images with actual photos
2. Customize colors in `globals.css` if needed
3. Update content in `lib/copy.ts`
4. Test on various devices and browsers
5. Run Lighthouse audit to verify performance scores

## Troubleshooting

If you encounter issues:

1. **TypeScript errors:** Run `npm run build` to see detailed errors
2. **Missing dependencies:** Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Styling issues:** Ensure Tailwind CSS is properly configured in `tailwind.config.ts`

