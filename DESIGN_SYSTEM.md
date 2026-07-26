# Or Paull Photography - Design System
## Taste Framework Implementation

---

## 1. COLOR PALETTE

### Primary Colors
```
Light Brown:      #D4C4B9  (warmth, elegance)
Dark Brown:       #5C4A42  (depth, sophistication)
Soft Blush Pink:  #E8D5D1  (femininity, warmth)
Warm White:       #FAFAF8  (clean, breathing room)
```

### Accent Colors
```
Warm Gray:        #A09A94  (secondary text, borders)
Light Cream:      #F5F1ED  (subtle backgrounds)
Deep Charcoal:    #3E3B39  (primary text)
```

### Usage Rules
- **Background**: Warm White (#FAFAF8) with Light Cream (#F5F1ED) accents
- **Primary Text**: Deep Charcoal (#3E3B39)
- **Secondary Text**: Warm Gray (#A09A94)
- **Borders/Dividers**: Soft Blush Pink (#E8D5D1) or Warm Gray (#A09A94)
- **Hover States**: Light Brown (#D4C4B9)
- **CTA Buttons**: Dark Brown (#5C4A42) with Warm White text

---

## 2. TYPOGRAPHY

### Font Stack (Web-Safe + Elegant)
```
Headings: 'Playfair Display', 'Georgia', serif
Body:     'Inter', 'Segoe UI', sans-serif
```

### Type Scale
```
H1 (Hero/Section Titles):     48px / 56px (desktop/mobile)
H2 (Subsection Titles):       36px / 28px (desktop/mobile)
H3 (Card/Component Titles):   24px / 20px (desktop/mobile)
Body Large:                   18px / 16px (desktop/mobile)
Body Regular:                 16px / 15px (desktop/mobile)
Body Small:                   14px / 13px (desktop/mobile)
```

### Font Weights
- **Headers**: 600-700 (Playfair Display)
- **Body Text**: 400-500 (Inter)
- **Emphasis**: 600 (Inter)

### Line Height
- **Headers**: 1.2
- **Body**: 1.6
- **Small Text**: 1.5

---

## 3. SPACING & GRID SYSTEM

### Base Unit: 8px

### Spacing Scale
```
0px   (no space)
4px   (xs - tight spacing)
8px   (sm - tight)
12px  (md - comfortable)
16px  (lg - breathing room)
24px  (xl - generous)
32px  (2xl - section breaks)
48px  (3xl - major sections)
64px  (4xl - page sections)
```

### Grid
- **Desktop**: 12-column grid with 16px gutters
- **Tablet**: 8-column grid with 12px gutters
- **Mobile**: 4-column grid with 8px gutters

### Section Padding
- **Desktop**: 64px top/bottom, 48px sides
- **Tablet**: 48px top/bottom, 32px sides
- **Mobile**: 32px top/bottom, 16px sides

---

## 4. COMPONENT SPECIFICATIONS

### Navigation Bar (Sticky)
```
Height:           64px (desktop), 56px (mobile)
Background:       Warm White (#FAFAF8) with subtle shadow
Text Color:       Deep Charcoal (#3E3B39)
Font:             Inter, 14px, 500
Padding:          16px 48px (desktop), 12px 16px (mobile)
Active Link:      Dark Brown (#5C4A42) underline
Hover:            Light Brown (#D4C4B9) text
```

### Hero Section (Optional - Above Galleries)
```
Height:           40vh minimum
Background:       Light Cream (#F5F1ED) gradient to Warm White
Text Alignment:   Center or Left
Font Size:        H1 scale
Padding:          64px 48px
```

### Gallery Carousel
```
Container Height:     500px (desktop), 400px (tablet), 280px (mobile)
Image Aspect Ratio:   1:1 or 4:3 (consistent within carousel)
Carousel Controls:    Subtle arrows, dot indicators
Arrow Color:          Dark Brown (#5C4A42)
Dot Active Color:     Dark Brown (#5C4A42)
Dot Inactive Color:   Warm Gray (#A09A94)
Transition:           Smooth fade or slide (300ms)
Margin Bottom:        48px between carousels
```

### Section Headers (Gallery Titles)
```
Font:             Playfair Display, H2
Color:            Dark Brown (#5C4A42)
Margin:           0 0 24px 0
Text Transform:   Capitalize
```

### Card Component
```
Background:       Warm White (#FAFAF8)
Border:           1px solid Soft Blush Pink (#E8D5D1)
Border Radius:    4px (minimal modern)
Padding:          24px
Shadow:           Light (0 2px 8px rgba(0,0,0,0.05))
Hover Effect:     Subtle lift (0 4px 16px rgba(0,0,0,0.1))
```

### Buttons
```
Primary Button (CTA):
  Background:     Dark Brown (#5C4A42)
  Text:           Warm White (#FAFAF8)
  Padding:        12px 24px
  Border Radius:  4px
  Font:           Inter, 16px, 600
  Hover:          Light Brown (#D4C4B9) background
  Transition:     200ms ease

Secondary Button:
  Background:     Light Cream (#F5F1ED)
  Text:           Dark Brown (#5C4A42)
  Border:         1px solid Dark Brown (#5C4A42)
  Padding:        12px 24px
  Hover:          Light Brown background
```

### Form Elements
```
Input/Textarea:
  Background:     Warm White (#FAFAF8)
  Border:         1px solid Warm Gray (#A09A94)
  Border Focus:   1px solid Dark Brown (#5C4A42)
  Padding:        12px 16px
  Font:           Inter, 16px
  Border Radius:  4px
  
Labels:
  Font:           Inter, 14px, 600
  Color:          Deep Charcoal (#3E3B39)
  Margin Bottom:  8px
```

### Dividers
```
Color:            Soft Blush Pink (#E8D5D1)
Height:           1px
Margin:           32px 0
```

---

## 5. PAGE LAYOUT & HIERARCHY

### Single Page Scroll Structure

```
[1] NAVIGATION BAR (Sticky)
    └─ Logo/Brand Name
    └─ Menu: About | Galleries | Pricing | FAQ | Contact
    └─ WhatsApp CTA Button (sticky right)

[2] HERO/WELCOME SECTION
    └─ Warm welcome text
    └─ "Scroll to explore" indicator

[3] ABOUT ME SECTION
    └─ H2: "About Me"
    └─ Circular profile image (optional)
    └─ Short bio paragraph (placeholder)
    └─ Photography style description (placeholder)

[4] GALLERIES SECTION
    └─ H2: "My Work"
    │
    ├─ [4a] Newborn Photography
    │       └─ Carousel (10 images)
    │
    ├─ [4b] Maternity Studio Sessions
    │       └─ Carousel (10 images)
    │
    ├─ [4c] Maternity Beach Sessions
    │       └─ Carousel (10 images)
    │
    ├─ [4d] Maternity Lake Sessions
    │       └─ Carousel (10 images)
    │
    └─ [4e] Family Sessions
            └─ Carousel (10 images)

[5] WHAT'S INCLUDED SECTION
    └─ H2: "What's Included"
    └─ 3-4 cards describing session details (placeholder)

[6] HOW TO PREPARE SECTION
    └─ H2: "Prepare for Your Session"
    └─ Numbered list or cards with tips (placeholder)

[7] PHOTO DELIVERY SECTION
    └─ H2: "How You'll Receive Your Photos"
    └─ Timeline or steps (placeholder)
    └─ Mention of delivery platform/method

[8] PRICING SECTION
    └─ H2: "Pricing"
    └─ 3-5 pricing cards with:
        ├─ Package name
        ├─ Price
        ├─ What's included (bullet points)
        └─ "Book Now" button (WhatsApp link)

[9] FAQ SECTION
    └─ H2: "Frequently Asked Questions"
    └─ Accordion/collapsible Q&A items (placeholder)

[10] CONTACT SECTION
     └─ H2: "Ready to Book?"
     └─ Two-column layout (desktop):
         ├─ Left: Contact form (name, phone, email, message)
         └─ Right: WhatsApp button + social links (Instagram)
     └─ Form validation and submission to email

[11] FOOTER
     └─ Copyright info
     └─ Social links (Instagram)
     └─ WhatsApp link
     └─ "Back to top" link
```

---

## 6. RESPONSIVE DESIGN RULES

### Breakpoints
```
Mobile:    0px - 768px
Tablet:    768px - 1024px
Desktop:   1024px+
```

### Mobile-First Principles
1. **Navigation**: Hamburger menu on mobile, full horizontal nav on tablet+
2. **Galleries**: Full-width carousels on all devices
3. **Forms**: Single column on mobile, multi-column on tablet+
4. **Spacing**: Reduce by 50% on mobile (e.g., 64px section padding → 32px)
5. **Typography**: Reduce by 2-4px on mobile

### Mobile Optimization
- Touch targets: Minimum 48px × 48px for buttons
- Spacing between clickable elements: 12px minimum
- Font sizes: Never below 16px (prevents zoom on iOS)
- Viewport: `width=device-width, initial-scale=1`

---

## 7. IMAGERY STYLE & RULES

### Photography Treatment
- **Quality**: High-resolution, professional photography
- **Aspect Ratios**: Consistent within carousels (1:1 or 4:3)
- **Lighting**: Natural, warm lighting that complements brand colors
- **Subjects**: Families, newborns, maternity—authentic, emotional moments
- **Color Grading**: Warm tones aligned with color palette

### Image Display
- **Lazy Loading**: Yes, for performance
- **Alt Text**: Descriptive (e.g., "Newborn wrapped in soft cream blanket")
- **No Captions**: Let the images speak for themselves
- **Gallery Controls**: Subtle, don't distract from images

---

## 8. VISUAL HIERARCHY & EMPHASIS

### Primary Actions
- WhatsApp CTA button (prominent, visible)
- "Book Now" buttons in pricing section
- Contact form submission button

### Secondary Actions
- Instagram link
- Navigation menu items
- Form input fields

### Tertiary Information
- FAQ content
- Small descriptions
- Footer information

### Emphasis Techniques
1. **Color**: Dark Brown (#5C4A42) for important text
2. **Size**: H1, H2, H3 scale for hierarchy
3. **Weight**: 600-700 for emphasis
4. **Spacing**: More breathing room = more importance
5. **Contrast**: Soft Blush Pink dividers to separate sections

---

## 9. ANIMATION & MOTION

### Smooth Interactions (200-300ms)
- Button hover effects: Background color transition
- Link underlines: Subtle scale or color fade
- Form focus: Border color change
- Gallery transitions: Smooth fade or slide between images

### Page Scrolling
- No parallax (keep it refined and professional)
- Fade-in effects on sections as they enter viewport (optional, subtle)
- Smooth scroll behavior for navigation links

### Avoid
- Excessive animations
- Auto-playing videos
- Pop-ups or interstitials
- Distracting transitions

---

## 10. ACCESSIBILITY & USABILITY

### Color Contrast
- Text on background: Minimum 4.5:1 contrast ratio
- Dark Brown (#5C4A42) on Warm White (#FAFAF8): ✅ Passes WCAG AA

### Typography
- Minimum font size: 16px for body text
- Line height: Minimum 1.5 for readability
- Letter spacing: 0.5px for sans-serif, 0.25px for serif

### Interactive Elements
- Clear focus states (outline or background change)
- Touch-friendly sizes: 48px × 48px minimum
- Clear call-to-action buttons

### Navigation
- Logical tab order
- Descriptive link text (not "click here")
- Skip-to-content link

### Forms
- Clear labels associated with inputs
- Error messages in high-contrast color
- Success confirmations
- Keyboard navigable

---

## 11. DESIGN PRINCIPLES SUMMARY

### The Taste Framework Applied:
1. ✅ **Anti-Slop**: No generic templates—custom, refined design
2. ✅ **Hierarchy**: Clear visual order (photography first, CTAs prominent)
3. ✅ **Spacing**: Generous white space for elegance
4. ✅ **Typography**: Professional serif + clean sans-serif combo
5. ✅ **Color**: Cohesive warm palette reflecting brand
6. ✅ **Motion**: Subtle, purposeful animations only
7. ✅ **Responsive**: Mobile-first, elegant on all devices
8. ✅ **Focus**: Photography is the star, everything else supports it

---

## 12. IMPLEMENTATION CHECKLIST

### Design Phase
- [ ] Create color swatches in design tool
- [ ] Build component library (buttons, cards, forms)
- [ ] Create page wireframes
- [ ] Design desktop, tablet, mobile versions
- [ ] Test color contrast for accessibility

### Development Phase
- [ ] Implement CSS variables for colors
- [ ] Create reusable component classes
- [ ] Set up responsive grid system
- [ ] Test on actual devices (mobile, tablet, desktop)
- [ ] Verify all interactive elements work correctly

### Content Phase
- [ ] Add actual photography (replace placeholders)
- [ ] Write About Me section
- [ ] Write session descriptions
- [ ] Complete pricing information
- [ ] Fill in FAQ content
- [ ] Set up email form handler

### Launch Phase
- [ ] Google Analytics setup
- [ ] WhatsApp Business integration
- [ ] Form submission testing
- [ ] Performance optimization
- [ ] SEO setup
- [ ] Domain configuration

---

## Design System Complete ✅

This design system is ready for development using the Taste framework principles. All specifications are detailed enough for a developer to implement pixel-perfect without constant back-and-forth.

**Next: Set up CrewAI development and testing crews to build the site.**

