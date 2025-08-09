# Owen P Kent - Personal Hub Website

A modern, accessible personal hub for Owen P Kent showcasing ventures across assistive technology, filmmaking, and advocacy.

## Features

- **Modern Design**: Bossa Nova tropical palette with light/dark mode
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with proper semantic HTML
- **Fast**: Optimized images and performance
- **SEO Friendly**: Complete metadata and sitemap
- **Animations**: Smooth Framer Motion animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) + Inter (body)
- **Deployment**: Netlify

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects pages
│   ├── contact/           # Contact page
│   └── thanks/            # Thank you page
├── components/            # Reusable React components
├── lib/                   # Utilities and data
└── public/               # Static assets

```

## Customization

### Colors
The Bossa Nova tropical palette is defined in `tailwind.config.ts`:
- `sun`: #FFE85B
- `palm`: #00A68C  
- `wave`: #00BFB3
- `surf`: #FF6FAF
- `sky`: #FBB6CE
- `sand`: #F9E4CC
- `charcoal`: #2E2E2E

### Content
- **Projects**: Edit `lib/projects.ts` to update project information
- **Bio**: Update bio text in `components/footer.tsx` and home page
- **Social Links**: Modify social links in `components/header.tsx` and `components/footer.tsx`

### Images
Replace placeholder images with your own:
- Hero/About images on home page
- Project images in `lib/projects.ts`
- Update image domains in `next.config.js`

## Deployment

This site is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. The site will automatically deploy on push to main branch

## Integrations

### ConvertKit (Mailing List)
Update the mailing list signup in `components/mailing-list-signup.tsx` with your ConvertKit API endpoint.

### Netlify Forms
Contact form is pre-configured for Netlify Forms. No additional setup required.

## License

© 2024 Owen P Kent. All rights reserved.
