# 🚀 Launch Guide - Or Paull Photography Website

Your website is **built and ready to go!** Follow these steps to get it live.

---

## Step 1: Add Your Placeholder Content (1-2 hours)

Edit these files with your actual information:

### 📄 About Section
**File**: `src/components/sections/About.js`
- Replace `[Your About Me Bio]` with your introduction
- Replace `[Your Photography Style]` with your photography philosophy

### 💰 Pricing Section
**File**: `src/components/sections/Pricing.js`
- Replace `[Price]` with your actual prices
- Update package names and features
- Add/remove packages as needed

### ℹ️ Other Info Sections
- **What's Included**: `src/components/sections/WhatIncluded.js`
- **How to Prepare**: `src/components/sections/HowToPrepare.js`
- **Photo Delivery**: `src/components/sections/PhotoDelivery.js`
- **FAQ**: `src/components/sections/FAQ.js`

---

## Step 2: Add Your Photos (30 mins)

1. **Create image folder**:
   ```
   Create: public/images/
   ```

2. **Add your photos** (you need 10 images per category):
   - `newborn-1.jpg` through `newborn-10.jpg`
   - `maternity-studio-1.jpg` through `maternity-studio-10.jpg`
   - `maternity-beach-1.jpg` through `maternity-beach-10.jpg`
   - `maternity-lake-1.jpg` through `maternity-lake-10.jpg`
   - `family-1.jpg` through `family-10.jpg`

   **Or use any naming you prefer—just update `Galleries.js`**

3. **Update image paths**:
   - Edit: `src/components/sections/Galleries.js`
   - Update the `images` array in each gallery object with your photo paths

**Photo Recommendations**:
- Size: 1200x1200px or 1200x800px
- Format: JPG (best for photos)
- File size: < 500KB each for fast loading

---

## Step 3: Configure Services (15 mins)

### 📧 Setup Contact Form

1. Go to [formspree.io](https://formspree.io) (FREE)
2. Sign up with your email
3. Create new form:
   - Form name: "Or Paull Photography"
   - Email: `orchasson@gmail.com`
4. Copy your Form ID (looks like `f_xxxxxxxx`)
5. Update `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=f_YOUR_ID_HERE
   ```

### 📊 Setup Google Analytics (Optional but recommended)

1. Go to [google.com/analytics](https://google.com/analytics)
2. Sign in with Google account
3. Create new property:
   - Website name: "Or Paull Photography"
   - Website URL: `https://orpaulphotography.com`
4. Copy Measurement ID (looks like `G_XXXXXXXXXX`)
5. Update `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G_YOUR_ID_HERE
   ```

### 💬 Update WhatsApp Number

Update `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=YOUR_PHONE_HERE
```
Example: `12345678901` (country code + number, no +)

### 📷 Update Instagram Username

Update `.env.local`:
```
NEXT_PUBLIC_INSTAGRAM_USERNAME=your_instagram_handle
```

---

## Step 4: Test Locally (15 mins)

1. **Install dependencies** (if not done):
   ```bash
   npm install
   ```

2. **Create `.env.local`** with your settings:
   ```bash
   cp .env.example .env.local
   ```

3. **Edit `.env.local`** with your form ID, GA ID, phone, Instagram

4. **Run locally**:
   ```bash
   npm run dev
   ```

5. **Test at** [http://localhost:3000](http://localhost:3000)
   - [ ] Check all pages load
   - [ ] Galleries display correctly
   - [ ] Forms work (submit test message)
   - [ ] WhatsApp link works
   - [ ] Instagram link works
   - [ ] Mobile responsive (resize browser)

---

## Step 5: Deploy to Vercel (Recommended)

### Option A: Deploy via GitHub

**Best for future updates**

1. **Create GitHub account** (if needed): [github.com](https://github.com)

2. **Create new repository**:
   - Name: `or-paull-photography`
   - Public or Private (your choice)
   - Don't add README/License (we have these)

3. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Or Paull Photography website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/or-paull-photography.git
   git push -u origin main
   ```

4. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Add environment variables:
     - `NEXT_PUBLIC_FORMSPREE_ID`
     - `NEXT_PUBLIC_GA_ID`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_INSTAGRAM_USERNAME`
   - Click Deploy

5. **Get your URL** (will be something like `or-paull-photography.vercel.app`)

### Option B: Deploy Directly (Simpler)

1. **Create Vercel account**: [vercel.com](https://vercel.com)
2. **Upload this folder** (drag & drop in dashboard)
3. **Add environment variables**
4. **Deploy**

---

## Step 6: Set Up Custom Domain (20 mins)

### Buy Domain

1. Go to domain registrar:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)

2. Search for `orpaulphotography.com`
3. Purchase (usually $10-15/year)

### Connect to Vercel

1. **In Vercel Dashboard**:
   - Go to your project
   - Settings → Domains
   - Add custom domain: `orpaulphotography.com`

2. **Follow Vercel's instructions** to update DNS
   - Copy nameservers from Vercel
   - Paste into domain registrar settings

3. **Wait 24-48 hours** for DNS to propagate

4. **Test**: Visit `https://orpaulphotography.com`

---

## Step 7: Launch & Promote! 🎉

### Before Launch

- [ ] All photos added and displaying
- [ ] Content filled in (no more placeholders)
- [ ] Contact form tested
- [ ] WhatsApp link tested
- [ ] Instagram link updated
- [ ] Mobile looks good
- [ ] Custom domain working

### Launch Checklist

- [ ] Website is live at your domain
- [ ] HTTPS enabled (should be automatic)
- [ ] Analytics tracking working
- [ ] Form submissions arriving at email
- [ ] Social links working

### Promote Your Site

1. **Update Instagram Bio**:
   - Add website link
   - `www.orpaulphotography.com` in bio

2. **Share on Social**:
   - Post: "Website is live! Book your session now →"
   - Link to site

3. **WhatsApp Status**:
   - Share website link with contacts

4. **Add to Email Signature**:
   - Include website URL

---

## 📞 Troubleshooting

### Forms Not Working?
- Check Formspree form exists
- Verify `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`
- Check browser console for errors

### Photos Not Showing?
- Verify photos exist in `public/images/`
- Check file names match exactly
- Check browser console for 404 errors

### Site Not Live?
- Check Vercel deployment status
- Wait for build to complete
- Clear browser cache (Ctrl+Shift+Del)

### Domain Not Working?
- DNS takes 24-48 hours
- Check nameservers at registrar
- Try in incognito window

---

## ✨ Next Steps (After Launch)

### Monitor
- Check Google Analytics weekly
- Track where visitors come from
- Monitor contact form submissions

### Update Content
- Add new galleries regularly
- Update testimonials/reviews
- Keep FAQ current

### Optimize
- Monitor page speed in Lighthouse
- Collect client feedback
- Improve based on usage

### Scale
- Consider adding online booking
- Payment processing (later)
- Client portal for photo delivery

---

## 📚 Resources

- **Next.js Docs**: [nextjs.org](https://nextjs.org)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Formspree Docs**: [formspree.io/docs](https://formspree.io/docs)
- **Google Analytics**: [analytics.google.com](https://analytics.google.com)

---

## 🎯 You've Got This!

Your photography website is **ready to go**. The hardest part is done!

**Time to launch**: ~1-2 hours

**Cost**: 
- Domain: ~$12/year
- Hosting: FREE (Vercel)
- Forms: FREE (Formspree)
- Analytics: FREE (Google)
- **Total: ~$12/year** 💰

**Questions?** Review the README.md or DESIGN_SYSTEM.md files for more details.

---

**Good luck with your new website!** 📸✨

*Built with Next.js, designed with Taste Framework, deployed with Vercel*
