# Or Paull Photography Website

Professional photography portfolio website for Or Paull - showcasing newborn, maternity, and family photography sessions.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your:
   - Google Analytics ID (optional)
   - Formspree ID (for contact form)
   - WhatsApp number
   - Instagram username

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding Your Photos

### Photo Directory Structure

Create photo directories:
```
public/images/
├── placeholder-newborn.jpg
├── placeholder-maternity-studio.jpg
├── placeholder-maternity-beach.jpg
├── placeholder-maternity-lake.jpg
└── placeholder-family.jpg
```

### Update Gallery Images

Edit `src/components/sections/Galleries.js` and update the image paths:

```javascript
const galleries = [
  {
    id: 'newborn',
    title: 'Newborn Photography',
    images: [
      '/images/newborn-1.jpg',
      '/images/newborn-2.jpg',
      // ... add all 10 images
    ]
  },
  // ... repeat for other galleries
];
```

### Image Optimization Tips

- **Recommended size**: 1200x1200px (square) or 1200x800px
- **File format**: JPG or PNG
- **File size**: Keep under 500KB for optimal performance
- **Aspect ratio**: Consistent within each gallery

## ✏️ Customizing Content

### About Section
Edit: `src/components/sections/About.js`
- Replace "[Your About Me Bio]" with your introduction
- Update "[Your Photography Style]" with your philosophy

### Pricing Packages
Edit: `src/components/sections/Pricing.js`
- Update package names, prices, and features
- Modify or add new packages as needed

### What's Included
Edit: `src/components/sections/WhatIncluded.js`
- Update features list
- Add or remove items as needed

### FAQ Content
Edit: `src/components/sections/FAQ.js`
- Replace placeholder Q&A with your actual questions and answers

### How to Prepare & Photo Delivery
Edit:
- `src/components/sections/HowToPrepare.js`
- `src/components/sections/PhotoDelivery.js`

Update with your specific requirements and timeline.

## 🔧 Configuration

### Contact Form Setup

The contact form uses **Formspree** (free):

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form for: `orchasson@gmail.com`
4. Get your form ID (e.g., `f_xxxxxxxx`)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=f_xxxxxxxx
   ```

### Google Analytics Setup (Optional)

1. Go to [google.com/analytics](https://google.com/analytics)
2. Create property for your domain
3. Get Measurement ID (e.g., `G_XXXXXXXXXX`)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
   ```

### WhatsApp Integration

Update `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_phone_number_here
```

Replace `your_phone_number_here` with your WhatsApp Business phone number (country code + number, e.g., `12345678901`)

### Instagram Link

Update `.env.local`:
```
NEXT_PUBLIC_INSTAGRAM_USERNAME=orpaulphotography
```

Replace `orpaulphotography` with your actual Instagram username.

## 🎨 Design Customization

### Colors
Edit `src/styles/design-system.css` to change:
- Light Brown: `#D4C4B9`
- Dark Brown: `#5C4A42`
- Soft Blush Pink: `#E8D5D1`
- Warm White: `#FAFAF8`

### Fonts
The site uses:
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

Both are loaded from Google Fonts.

### Responsive Design

The website is fully responsive:
- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## 📱 Mobile Optimization

The site is optimized for mobile (Instagram traffic):
- Touch-friendly buttons (48×48px minimum)
- Fast load times (images are lazy-loaded)
- Easy navigation on small screens

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables from `.env.local`
5. Click Deploy

Vercel will automatically deploy on every push to main branch.

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Add environment variables
5. Deploy

### Custom Domain

1. Register domain (e.g., `orpaulphotography.com`)
2. In Vercel/Netlify dashboard:
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions
3. Update nameservers with your domain registrar
4. Wait 24-48 hours for DNS to propagate

## 📊 Performance

- **Lighthouse Score**: Aim for 90+ on mobile
- **Page Load Time**: < 3 seconds on 4G
- **Core Web Vitals**: All green

Run Lighthouse audit:
- Chrome DevTools → Lighthouse tab
- Run audit for mobile/desktop

## 🔒 Security

- HTTPS enforced (Vercel/Netlify)
- Form validation (client & server)
- No sensitive data stored locally
- Privacy policy required (add to footer)

## 🐛 Troubleshooting

### Form Not Sending
- Check Formspree form ID in `.env.local`
- Verify email is correct in Formspree dashboard
- Check browser console for errors

### Images Not Loading
- Verify image paths in `Galleries.js`
- Check file names and extensions match exactly
- Images should be in `public/images/` folder

### Layout Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run dev` again
- Check browser DevTools for errors

### WhatsApp Not Opening
- Update phone number in `.env.local`
- Use format: country code + number (e.g., 12345678901)
- Test with WhatsApp desktop app

## 📞 Support

For issues or questions:
1. Check this README
2. Review code comments
3. Check browser console for errors
4. Contact your developer

## 📄 License

© 2026 Or Paull Photography. All rights reserved.

---

**Built with:**
- Next.js 14
- React 18
- CSS3 (Grid, Flexbox)
- Formspree (form handling)
- Google Analytics

**Hosted on:**
- Vercel or Netlify

**Domain:**
- orpaulphotography.com
