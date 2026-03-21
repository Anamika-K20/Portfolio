# Interactive Animated Portfolio

A beautiful, modern portfolio website for showcasing your skills, experience, projects, and research papers. Built with React, Tailwind CSS, and Framer Motion animations.

## Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- ⚡ **Responsive** - Works perfectly on all devices
- 🎭 **Animations** - Smooth Framer Motion animations throughout
- 📱 **Mobile-Friendly** - Optimized mobile menu and navigation
- 🎯 **Sections Included**:
  - Hero Section
  - About Me
  - Professional Experience
  - Featured Projects
  - Research & Publications
  - Contact Form

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## Customization

### Update Your Information
- Edit `src/pages/Home.tsx` to change your name
- Update component content with your actual experience
- Replace placeholder links with your GitHub, LinkedIn, etc.

### Modify Colors
- Edit `tailwind.config.js` to change the color scheme
- Adjust gradient colors in components as needed

### Add/Remove Sections
- Components are in `src/components/`
- Import/remove sections in `src/pages/Home.tsx`

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Research.tsx
│   └── Contact.tsx
├── pages/          # Page components
│   └── Home.tsx
├── styles/         # Global styles
│   └── index.css
└── main.tsx        # Entry point
```

## Deployment

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

### GitHub Pages
Update `vite.config.ts` with your repo name and build.

## License

MIT

## Support

For questions or issues, feel free to reach out!
