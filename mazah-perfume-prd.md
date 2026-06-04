# Mazah Perfume — Product Requirements Document

**Version:** 1.0  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Platform:** Antigravity  
**Scope:** Three main pages — Home, Collections, Product Detail

---

## 1. Project Overview

Mazah Perfume is a luxury fragrance brand with an identity rooted in warmth, refinement, and sensory storytelling. The website must evoke the same intoxicating feel as the physical product — golden, editorial, and unhurried.

The design inspiration calls for:
- A dominant **warm amber / gold palette** with creamy off-whites and rich blacks
- **Serif / mixed typography** — elegant display typefaces paired with refined body fonts
- **Editorial layouts** — large hero visuals, oversized type, asymmetric image grids
- **Subtle motion** — fade-in reveals, smooth carousel transitions, hover lifts
- A fully functional e-commerce shopping experience with cart, wishlist, and product browsing

---

## 2. Design System

### 2.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--gold-primary` | `#C8962A` | CTAs, accents, active states |
| `--gold-light` | `#E8C56A` | Hover highlights, gradients |
| `--amber-bg` | `#D4903A` | Hero gradient backgrounds |
| `--cream` | `#FAF6EE` | Page backgrounds, cards |
| `--charcoal` | `#1C1C1C` | Body text, footer |
| `--white` | `#FFFFFF` | Text on dark backgrounds |
| `--muted` | `#8A7E6E` | Secondary text, labels |

### 2.2 Typography

| Role | Font | Weight | Size Range |
|---|---|---|---|
| Display / Hero | Playfair Display | 400–700 | 56–96px |
| Section Headings | Cormorant Garamond | 300–600 | 32–56px |
| Body Copy | DM Sans | 300–400 | 14–18px |
| Labels / Caps | DM Sans | 500 | 11–13px · Letter-spaced |
| Price / Numeric | Cormorant Garamond | 500 | 18–24px |

### 2.3 Spacing & Grid

- Max content width: `1280px`
- Section vertical padding: `80px` (desktop), `48px` (mobile)
- Card gap: `24px`
- Gutter: `24px` (desktop), `16px` (mobile)
- Grid: 12-column on desktop, 4-column on tablet, 2-column on mobile

### 2.4 Component Tokens

```
--radius-card: 12px
--radius-btn: 999px (pill)
--radius-badge: 6px
--shadow-card: 0 4px 24px rgba(0,0,0,0.08)
--shadow-hover: 0 12px 40px rgba(0,0,0,0.14)
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 3. Global Components

### 3.1 Navigation Bar

**Behavior:**
- Transparent on hero scroll → white/glass on scroll down (transition at `80px` scroll depth)
- Desktop: Logo left · Nav links center · Search + Cart icon right
- Mobile: Hamburger menu → full-screen slide-in drawer

**Nav Links:** Home · Collections · About · Stores  
**Right Actions:** Search (icon), Wishlist (icon + count badge), Cart (icon + count badge)

**Specs:**
- Height: `72px` desktop, `60px` mobile
- Logo: "MAZAH" wordmark in Playfair Display · 28px
- Search: Expands inline input on click
- Sticky with `backdrop-blur: 12px` glass effect on scroll

---

### 3.2 Footer

Three-column layout on desktop, stacked on mobile.

**Column 1:** MAZAH logo + brand tagline + social icons (Instagram, TikTok, Pinterest)  
**Column 2:** Links — Collections, About Us, Stores, Careers, Press  
**Column 3:** Support — FAQ, Shipping, Returns, Contact  
**Bottom bar:** Copyright + Privacy Policy + Terms

**Visual:** Dark charcoal background (`#1C1C1C`) with cream text. Subtle gold separator line above footer.

---

## 4. Page Specifications

---

### 4.1 Page 1: Home

**Route:** `/`  
**Goal:** Immersive brand introduction → drive exploration of collections

---

#### Section 1: Hero

**Visual:** Full-viewport-height. Warm amber/gold gradient background with a large centered perfume bottle image. Sunflower accent in the lower right (decorative). Subtle particle / bokeh overlay (CSS only).

**Layout:**
```
[Navbar]
[Left: Hero Text Block]        [Right: Product Image]
  Elegance                       [Large bottle visual]
  in Bloom
  [Subtitle paragraph]
  [EXPLORE COLLECTIONS →]
[Bottom: Scrolling tag pills]
```

**Content:**
- H1: `Elegance` *(Playfair Display italic, 88px)*  
  `in Bloom` *(Playfair Display bold, 88px)*
- Subtitle: *"Experience timeless luxury perfumes crafted with passion and elegance, designed to leave a lasting impression."* (DM Sans 16px, cream, 60% opacity)
- CTA: `EXPLORE COLLECTIONS →` pill button (cream outline)
- Floating product tag: Small card with "Luxe" label + arrow appears mid-image
- Bottom scroller: Horizontal scrolling pill tags → Citrus Luxe · Social · Advance · Amber Royale · Glow

**Animations:**
- H1 slides up + fades in on load (staggered words)
- Bottle image fades in with a subtle scale (1.05 → 1.0)
- Tag pills scroll on infinite CSS marquee

---

#### Section 2: About — "Essence of Luxury"

**Layout:** Two columns  
- Left: `3 × overlapping image thumbnails` (products + model shots, stacked editorial style)  
- Right: "About us" label (gold, small caps) → `Essence of` *(Cormorant, italic)* `Luxury` → Body copy → no CTA

**Content:**
> *"Our master perfumers carefully blend rare ingredients sourced from around the globe to create perfumes that speak to the soul. Each bottle is a symbol of luxury, sophistication, and individuality."*

**Animation:** Images and text fade in on scroll entry (Intersection Observer).

---

#### Section 3: New Collection

**Layout:** Section heading left-aligned `New Collection` with arrow navigation right (← →). Horizontal scrolling product card row.

**Product Card:**
- Aspect ratio: `3:4` image area (soft background gradient per product)
- Wishlist heart icon top-right (toggle)
- Product name (Cormorant, 18px)
- Price (gold color)
- Quick-add button (pill, appears on hover)

**Products shown:** 4 on desktop (scroll to reveal more), 1.5 on mobile (peek next card)

**Interaction:** Carousel with drag/swipe support. Arrow buttons animate between sets of 4.

---

#### Section 4: Editorial Banner — "ILLURE"

**Full-width** editorial image: model photo left, product bottles right on warm neutral background.  
Overlaid text: `Vibrant & Everlasting` (Playfair, large, white or charcoal)  
CTA: `Explore →` pill button  
Badge: "ILLURE" serif wordmark overlay (editorial, large, 40% opacity background)

---

#### Section 5: Scent of Elegance (Features)

**Layout:** Three-column with central product image.

**Left column:**
- Direct delivery to your door
- Long-Lasting Scents

**Center:** Product bottle image (floating animation — gentle y-axis drift)

**Right column:**
- Premium Ingredients
- Free Worldwide Delivery

Each feature: Icon (thin line SVG) · Title (Cormorant 20px) · Body (DM Sans 14px)

---

#### Section 6: Gallery — "Elegance in Every Detail"

**Layout:** Masonry-style image grid, 5 images (2 large + 3 smaller)  
Section title centered: `Gallery` (gold, small-caps label) · `Elegance` *`in Every Detail`*  
CTA link: `Exclusive →` (gold, top right)

---

#### Section 7: Newsletter — "Stay in the Loop"

**Background:** Near-black (`#1A1A1A`) with warm gold gradient accent  
**Content:** Section label + heading + short description + email input + Subscribe button  
**Visual accent:** 2 small product thumbnail images on left side  
**Input style:** Cream/gold border input with pill submit button

---

### 4.2 Page 2: Collections

**Route:** `/collections`  
**Goal:** Browse all fragrances with filtering and sorting

---

#### Section 1: Collections Hero Banner

**Layout:** Full-width, `480px` tall  
- Background: Warm amber gradient (same palette as homepage)  
- Centered text: `Our Collections` heading + subtitle  
- Breadcrumb: Home / Collections

---

#### Section 2: Filter + Sort Bar

**Sticky below navbar on scroll.**

**Left:** Filter chips — All · Floral · Woody · Oriental · Fresh · Limited  
**Right:** Sort dropdown (Most Popular · Price Low–High · Price High–Low · Newest)  
**Mobile:** Collapsible filter drawer with checkboxes

---

#### Section 3: Product Grid

**Layout:** 3 columns desktop, 2 columns tablet, 2 columns mobile  
**Per row:** 3 products (up to `n` products total, lazy loaded in batches of 12)

**Product Card — Extended:**
- Image area (gradient bg, aspect 3:4)
- Wishlist toggle (top-right)
- Badge chips (NEW, BESTSELLER, LIMITED) — top left
- Name, Category label, Price
- `Add to Cart` button (appears on hover desktop, always visible mobile)
- Star rating + review count

**Empty state:** Illustrated "No fragrances found" with suggested categories.

**Pagination:** Infinite scroll (load more trigger at 80% scroll depth)

---

#### Section 4: Feature Callout (inline banner)

After row 2 of products, a full-width editorial inline banner featuring a seasonal collection with a CTA. Same visual language as homepage editorial banner.

---

### 4.3 Page 3: Product Detail

**Route:** `/collections/[slug]`  
**Goal:** Convert browsers into buyers — showcase scent story, build trust

---

#### Section 1: Product Hero

**Layout:** Two-column (60/40 split)

**Left — Image Gallery:**
- Main image: Large, aspect 1:1, with zoom on hover (CSS transform scale)
- Thumbnail strip: 4 smaller images below, clickable to change main image
- Badges: "BESTSELLER" / "NEW" overlay

**Right — Product Info:**
- Category label (gold, small caps): e.g., "Floral · Oriental"
- Product Name: Playfair Display, 40px
- Rating row: Stars + `(142 reviews)` link
- Price: Cormorant, 28px, gold — show original + discounted if applicable
- Scent description paragraph (2–3 sentences)
- **Size selector:** Pill buttons — 30ml · 50ml · 100ml (active = gold fill)
- **Quantity:** Stepper input (`−` count `+`)
- **CTA row:**  
  - `ADD TO CART` (full-width, gold fill, pill)  
  - `♡ Add to Wishlist` (outline pill)
- **Collapsible accordion:**  
  - Scent Notes (Top · Heart · Base note breakdown)  
  - Ingredients  
  - How to Apply  
  - Shipping & Returns

---

#### Section 2: Scent Story

**Layout:** Full-width editorial strip  
- Background: warm cream  
- Left: Large atmospheric lifestyle image  
- Right: Quote / brand copy about the specific fragrance  
- Decorative: large faint letter watermark behind text (first letter of fragrance name)

---

#### Section 3: Customer Reviews

**Layout:** Two columns  
**Left:** Rating summary (avg score, 5-star bar chart, total count)  
**Right:** Scrollable review cards (avatar, name, date, star rating, review text)  
**CTA:** `Write a Review` button  
**Load more:** Show 4 initially, `+ Load More Reviews` button

---

#### Section 4: You May Also Like

Same carousel component as Homepage "New Collection" section. Filtered to same scent family.

---

## 5. Shopping Cart

**Implementation:** Slide-in drawer (right side), accessible from all pages via navbar icon.

**Contents:**
- Header: "Your Cart (3)"
- Item list: thumbnail + name + size + qty stepper + remove + line price
- Subtotal + estimated shipping + promo code input
- `CHECKOUT` CTA (full-width gold button)
- `Continue Shopping` link

**State:** Persisted via `localStorage` + Zustand store.

---

## 6. Functional Requirements

### 6.1 Product Data Model

```typescript
interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: 'floral' | 'woody' | 'oriental' | 'fresh' | 'citrus'
  badges: Array<'NEW' | 'BESTSELLER' | 'LIMITED'>
  images: string[]
  sizes: Array<{ ml: number; price: number; originalPrice?: number }>
  scentNotes: { top: string[]; heart: string[]; base: string[] }
  description: string
  story: string
  ingredients: string
  rating: number
  reviewCount: number
  reviews: Review[]
  related: string[] // product slugs
}
```

### 6.2 Cart State (Zustand)

```typescript
interface CartItem {
  productId: string
  name: string
  size: number
  price: number
  qty: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: number) => void
  updateQty: (id: string, size: number, qty: number) => void
  clearCart: () => void
  total: number
}
```

### 6.3 Wishlist State (Zustand)

```typescript
interface WishlistStore {
  ids: Set<string>
  toggle: (id: string) => void
  has: (id: string) => boolean
}
```

---

## 7. Technical Architecture

### 7.1 Project Structure

```
mazah-perfume/
├── app/
│   ├── layout.tsx              # Root layout, Navbar, Footer
│   ├── page.tsx                # Home
│   ├── collections/
│   │   ├── page.tsx            # Collections listing
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CartDrawer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── NewCollection.tsx
│   │   ├── EditorialBanner.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── NewsletterSection.tsx
│   ├── collections/
│   │   ├── FilterBar.tsx
│   │   ├── ProductGrid.tsx
│   │   └── InlineBanner.tsx
│   ├── product/
│   │   ├── ImageGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── ScentStory.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── RelatedProducts.tsx
│   └── ui/
│       ├── ProductCard.tsx
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── StarRating.tsx
│       ├── SizeSelector.tsx
│       ├── QuantityStepper.tsx
│       └── Accordion.tsx
├── store/
│   ├── cart.ts                 # Zustand cart store
│   └── wishlist.ts             # Zustand wishlist store
├── lib/
│   ├── data/
│   │   └── products.ts         # Static product data (mock)
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

### 7.2 Dependencies

```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "typescript": "^5.4.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.0.0",
  "zustand": "^4.5.0",
  "@next/font": "included in next",
  "lucide-react": "^0.383.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.3.0"
}
```

### 7.3 Performance Requirements

- LCP < 2.5s (hero image preloaded with `priority` on `next/image`)
- CLS = 0 (fixed aspect ratios on all image containers)
- Fonts: subset + `font-display: swap`
- Images: WebP format, responsive `sizes` attribute, lazy load below fold
- Cart drawer: dynamically imported (`next/dynamic`) to reduce initial bundle

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout as specified |
| Wide | > 1440px | Max-width container centered |

---

## 9. Animations & Motion Spec

| Element | Animation | Trigger |
|---|---|---|
| Hero H1 | Slide up + fade (staggered per word) | Page load |
| Hero bottle | Scale 1.05→1 + fade | Page load, 400ms delay |
| Tag marquee | Infinite horizontal scroll | Always |
| Section headings | Fade up | Scroll into view |
| Product cards | Fade up staggered | Scroll into view |
| Card hover | Translate Y –4px + shadow | Hover |
| Product image zoom | Scale 1→1.08 | Hover |
| Cart drawer | Slide from right (x: 100%→0) | Click |
| Filter bar | Sticky slide-down | Scroll past hero |
| Accordion | Height expand/collapse | Click |
| Feature bottle | Gentle Y float (–8px ↔ 0) | Always (CSS keyframe) |

---

## 10. Accessibility

- All images have descriptive `alt` text
- Focus-visible outlines on all interactive elements
- Cart drawer traps focus when open; ESC closes
- Color contrast WCAG AA on all text
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`
- ARIA labels on icon-only buttons (cart, wishlist, close)

---

## 11. Milestones

| Phase | Deliverable | Est. Duration |
|---|---|---|
| 1 | Design system + globals + layout shell | 1 day |
| 2 | Home page (all 7 sections) | 2 days |
| 3 | Collections page | 1 day |
| 4 | Product detail page | 1.5 days |
| 5 | Cart drawer + Zustand stores | 0.5 day |
| 6 | Responsiveness + polish + animations | 1 day |
| **Total** | | **~7 days** |

---

## 12. Out of Scope (v1)

- Payment gateway integration
- User authentication / accounts
- Backend / CMS (static mock data only)
- Search functionality (UI shell only)
- Reviews submission backend
- Inventory management
