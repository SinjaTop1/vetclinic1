# Tierarzt am Spittelberg - Website

A modern, minimalistic website for Tierarzt am Spittelberg veterinary clinic in Vienna.

## Features

- 🎨 Modern, clean design with green color scheme
- 📱 Fully responsive layout
- 🗓️ Prominent online booking button (ready for Calendly integration)
- 📍 Contact information and location details
- ⏰ Opening hours section with appointment benefits
- 🏥 Services overview
- ⚡ Fast loading with Astro
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Calendly Integration

To integrate Calendly with the booking buttons:

1. Replace the placeholder click handlers in the components
2. Add your Calendly embed code or popup widget
3. Update the button click events to trigger Calendly

## Customization

- Colors can be modified in `tailwind.config.mjs`
- Content can be updated in the respective component files
- Add your Google Maps embed in `ContactLocation.astro`

## Technology Stack

- Astro - Static Site Generator
- Tailwind CSS - Styling
- TypeScript - Type Safety

## Contact

For questions about this website, please contact the development team.
