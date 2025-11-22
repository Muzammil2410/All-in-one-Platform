# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📋 Project Checklist

✅ All 12 service categories implemented
✅ Multi-language support (EN/AR/UR)
✅ Location selection modal
✅ Featured vendors section
✅ Newsletter subscription
✅ App download section
✅ Complete footer with all links
✅ Cookie consent modal
✅ VAT number modal
✅ Responsive design (mobile-first)
✅ Accessibility (WCAG 2.1 AA)
✅ SEO optimization
✅ Performance optimization
✅ Code splitting & lazy loading

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color scheme.

### Adding Services
Edit `src/data/services.ts` to add or modify services.

### Modifying Content
- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Services: `src/data/services.ts`

## 🔧 Development Tips

- Use `npm run lint` to check for code issues
- Components are lazy-loaded for better performance
- All images should have alt text for accessibility
- Use semantic HTML elements
- Test keyboard navigation
- Check color contrast ratios

## 📱 Testing

Test the application on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Chrome Mobile)
- Tablet devices
- Screen readers (NVDA, JAWS, VoiceOver)

## 🚀 Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Ensure your server supports SPA routing (redirect all routes to index.html)

## 📞 Support

For issues or questions, refer to the main README.md file.

