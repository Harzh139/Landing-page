# ADmyBRAND AI Suite - Landing Page

A stunning, modern landing page for "ADmyBRAND AI Suite" - a fictional AI-powered marketing tool. This project showcases a beautiful, responsive design with a comprehensive component library.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component Library**: Reusable UI components built with TypeScript and Tailwind CSS
- **Smooth Animations**: Framer Motion animations and CSS transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS animations
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admybrand-ai-suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Component Library

### Button Component
```tsx
import { Button } from '@/components/ui/Button'

// Usage
<Button variant="primary" size="lg" loading={false}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean

### Card Component
```tsx
import { Card } from '@/components/ui/Card'

// Usage
<Card variant="glass">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `variant`: 'default' | 'glass' | 'gradient'

## 🎯 Project Structure

```
admybrand-ai-suite/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/              # Layout components
│   │   └── Header.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       └── Features.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#d946ef to #c026d3)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)

### Animations
- **Fade In**: `animate-fade-in`
- **Slide Up**: `animate-slide-up`
- **Float**: `animate-float`
- **Scale**: `animate-scale-in`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🎯 Key Sections

1. **Header**: Fixed navigation with logo and CTA buttons
2. **Hero**: Eye-catching hero section with animated elements
3. **Features**: Grid of feature cards with hover effects
4. **CTA**: Call-to-action section
5. **Footer**: Comprehensive footer with links

## 🔧 Customization

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Style with Tailwind classes

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  }
}
```

### Adding Animations
Define new animations in `tailwind.config.js`:
```js
animation: {
  'custom': 'custom 0.5s ease-out',
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 