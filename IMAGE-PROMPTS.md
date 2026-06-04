# Mazah Perfume — Image Generation Prompts (for ChatGPT / DAL·E / GPT-4o)

This file lists **every image the website needs**, with a ready-to-paste prompt for each.
Generate them in ChatGPT, then save each file with the **exact filename** shown into
`mazah-perfume/public/images/`.

> ⚠️ The project currently ships `.svg` placeholders. When you generate real images,
> save them as **`.png`** (bottles, transparent) or **`.jpg`** (lifestyle/gallery).
> After you've generated them, tell me and I'll switch the code references from
> `.svg` → `.png`/`.jpg` for you (it's a 2-minute find-and-replace across
> `lib/data/products.ts` and the home components).

---

## 🎨 Brand Style Guide (read once — applies to ALL images)

**Brand:** Mazah — a luxury fragrance house. Warm, golden, editorial, unhurried.

**Master style block** — paste this at the END of every prompt for a consistent look:

```
Style: luxury perfume brand editorial, warm amber and gold palette (#C8962A gold,
#E8C56A light gold, #D4903A amber, #FAF6EE cream), soft natural studio lighting,
high-end advertising photography, elegant and minimal, shallow depth of field,
subtle film grain, 8k, photorealistic. No text overlays, no watermarks, no logos
unless requested, no harsh shadows, no clutter.
```

**Consistency tips**
- Generate the 8 product bottles in **one session** so the bottle shape stays consistent.
- Ask ChatGPT to keep the **same bottle silhouette** across all 8 (only the liquid color changes).
- For bottles, request a **transparent or clean seamless background** so they sit nicely on the site's gold cards.
- Recommended sizes: bottles **1024×1024**, lifestyle/portrait **1024×1536**, wide banners **1536×1024**.

---

## 1. Product Bottles (16 images — 8 fragrances × 2 angles)

Save as **PNG, transparent background**, square **1024×1024**. `-1` = front hero shot, `-2` = alternate angle.

### Midnight Bloom — floral (deep violet liquid)
- **`midnight-bloom-1.png`**
```
A luxury perfume bottle, elegant tall rectangular glass flacon with a polished gold
cap, filled with deep violet-to-magenta translucent perfume. A single dewy rose and
jasmine petals resting at the base. Centered product shot, isolated on a transparent
background. [+ Master style block]
```
- **`midnight-bloom-2.png`**
```
The same violet luxury perfume bottle as before, photographed at a 35-degree angle,
gold cap removed and resting beside it, soft petals scattered around. Transparent
background. [+ Master style block]
```

### Ocean Whisper — fresh (aqua / teal liquid)
- **`ocean-whisper-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a gold cap, filled with
crisp aqua-teal translucent perfume, a few water droplets on the glass. Centered
product shot, transparent background. [+ Master style block]
```
- **`ocean-whisper-2.png`**
```
The same aqua perfume bottle at a 35-degree angle beside a small piece of driftwood
and a slice of lemon, light misty atmosphere. Transparent background.
[+ Master style block]
```

### Amber Royale — oriental (rich amber/gold liquid) ⭐ hero scent
- **`amber-royale-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with an ornate gold cap, filled
with rich glowing amber-gold perfume, faint saffron threads and an oud chip at the base.
Centered, opulent, transparent background. [+ Master style block]
```
- **`amber-royale-2.png`**
```
The same amber-gold royal perfume bottle at a 35-degree angle, gold cap off, warm
spotlight, a few cardamom pods nearby. Transparent background. [+ Master style block]
```

### Citrus Luxe — citrus (bright yellow liquid)
- **`citrus-luxe-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a gold cap, filled with
bright sunny yellow translucent perfume, fresh grapefruit and neroli blossom at the base.
Centered, transparent background. [+ Master style block]
```
- **`citrus-luxe-2.png`**
```
The same yellow citrus perfume bottle at a 35-degree angle beside grapefruit halves and
white blossoms, airy bright lighting. Transparent background. [+ Master style block]
```

### Velvet Oud — woody (deep brown liquid)
- **`velvet-oud-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a matte gold cap, filled
with deep cognac-brown translucent perfume, a piece of oud wood and suede fabric at the
base. Centered, moody, transparent background. [+ Master style block]
```
- **`velvet-oud-2.png`**
```
The same brown oud perfume bottle at a 35-degree angle on dark suede, smoky atmosphere,
warm rim light. Transparent background. [+ Master style block]
```

### Rose Noir — floral (dark crimson liquid)
- **`rose-noir-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a gold cap, filled with dark
crimson-burgundy translucent perfume, a single black-red rose at the base. Centered,
sensual, transparent background. [+ Master style block]
```
- **`rose-noir-2.png`**
```
The same dark crimson rose perfume bottle at a 35-degree angle with scattered dark rose
petals and pink peppercorns, dramatic lighting. Transparent background.
[+ Master style block]
```

### Golden Hour — oriental (warm honey-gold liquid)
- **`golden-hour-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a gold cap, filled with warm
honey-gold glowing perfume catching sunset light, orange blossom at the base. Centered,
luminous, transparent background. [+ Master style block]
```
- **`golden-hour-2.png`**
```
The same honey-gold perfume bottle at a 35-degree angle bathed in golden-hour sunlight,
warm lens flare, a drizzle of honey nearby. Transparent background. [+ Master style block]
```

### White Orchid — fresh (pale lilac/white liquid)
- **`white-orchid-1.png`**
```
A luxury perfume bottle, tall rectangular glass flacon with a gold cap, filled with pale
lilac-white translucent perfume, a single white orchid bloom at the base. Centered, clean
and airy, transparent background. [+ Master style block]
```
- **`white-orchid-2.png`**
```
The same pale orchid perfume bottle at a 35-degree angle beside a white orchid and a
ripe pear, soft morning light. Transparent background. [+ Master style block]
```

---

## 2. Homepage Hero & Feature Bottles (2 images)

- **`hero-bottle.png`** — PNG transparent, **portrait 1024×1536** (the big homepage hero bottle)
```
A single hero luxury perfume bottle for the brand "Mazah", elegant tall glass flacon with
a sculptural gold cap, filled with glowing golden-amber perfume. A blooming sunflower and
soft golden bokeh behind it to the lower right, warm amber gradient light wrapping the
glass. Premium centered product hero shot, transparent or soft amber background, lots of
negative space. [+ Master style block]
```

- **`feature-bottle.png`** — PNG transparent, **portrait 1024×1536** (floats in the "Scent of Elegance" section)
```
A luxury perfume bottle floating against a clean transparent background, tall glass flacon
with a gold cap, warm amber perfume inside, soft reflection beneath it, gentle studio
lighting. Minimal, premium, lots of empty space around it. [+ Master style block]
```

---

## 3. About Section — "Essence of Luxury" (3 images)

Stacked editorial thumbnails. Save as **JPG, portrait 1024×1536**, photographic (not transparent).

- **`about-1.jpg`**
```
Close-up editorial photograph of a luxury amber perfume bottle on a cream marble surface,
soft warm window light, a few rose petals nearby, shallow depth of field, refined and
expensive mood. [+ Master style block]
```
- **`about-2.jpg`**
```
Editorial flat-lay of rare perfume ingredients — saffron threads, dried roses, oud wood,
citrus peel and amber resin — arranged on a cream linen background, warm golden light,
overhead artistic composition. [+ Master style block]
```
- **`about-3.jpg`**
```
Elegant editorial portrait of a woman's wrist and neck as she applies luxury perfume,
warm golden skin tones, soft cream and gold styling, intimate and sophisticated, face
mostly out of frame. [+ Master style block]
```

---

## 4. Editorial Banner — "ILLURE" (1 image)

- **`editorial-model.jpg`** — JPG, **portrait 1024×1536** (sits on the left of the gold ILLURE banner)
```
High-fashion editorial portrait of an elegant model holding a luxury golden perfume bottle
near her shoulder, warm amber and cream styling, golden-hour lighting, sophisticated and
serene expression, soft warm gradient background that blends into gold. Luxury fragrance
campaign aesthetic. [+ Master style block]
```

---

## 5. Gallery — "Elegance in Every Detail" (5 images)

Masonry grid. Save as **JPG**. `gallery-1` is the large feature tile (square/landscape),
the rest are square. Use **1024×1024** for all (gallery-1 can be **1536×1024**).

- **`gallery-1.jpg`** (large feature tile)
```
Luxury fragrance campaign hero photograph: a golden perfume bottle surrounded by blooming
flowers and soft golden bokeh, warm amber atmosphere, dreamy and abundant, editorial
advertising quality. [+ Master style block]
```
- **`gallery-2.jpg`**
```
Macro detail of golden perfume mist spraying against warm amber light, glistening droplets
frozen in air, dark warm background. [+ Master style block]
```
- **`gallery-3.jpg`**
```
Close-up of an ornate gold perfume cap and bottle neck, reflective glass, warm cream
background, minimal luxury detail shot. [+ Master style block]
```
- **`gallery-4.jpg`**
```
Editorial still life of a perfume bottle among silk fabric in cream and gold tones, soft
draping, warm light, expensive and tactile. [+ Master style block]
```
- **`gallery-5.jpg`**
```
Overhead detail of fresh flower petals and a single drop of golden perfume on a cream
surface, warm soft light, delicate and refined. [+ Master style block]
```

---

## 📋 Quick Checklist (27 files total)

**Product bottles — `public/images/` (PNG, transparent, 1024×1024)**
- [ ] midnight-bloom-1.png / midnight-bloom-2.png
- [ ] ocean-whisper-1.png / ocean-whisper-2.png
- [ ] amber-royale-1.png / amber-royale-2.png
- [ ] citrus-luxe-1.png / citrus-luxe-2.png
- [ ] velvet-oud-1.png / velvet-oud-2.png
- [ ] rose-noir-1.png / rose-noir-2.png
- [ ] golden-hour-1.png / golden-hour-2.png
- [ ] white-orchid-1.png / white-orchid-2.png

**Home bottles (PNG, transparent, portrait)**
- [ ] hero-bottle.png
- [ ] feature-bottle.png

**Lifestyle / editorial (JPG)**
- [ ] about-1.jpg / about-2.jpg / about-3.jpg
- [ ] editorial-model.jpg
- [ ] gallery-1.jpg … gallery-5.jpg

---

## 🔧 How to put them into the site

1. Drop all generated files into `mazah-perfume/public/images/` (overwrite/keep alongside the `.svg` placeholders).
2. Tell me you're done — I'll update the file extensions in `lib/data/products.ts` and the
   home components (`.svg` → `.png`/`.jpg`) and re-enable Next.js image optimization in
   `next.config.mjs`. Then the real photos appear everywhere automatically.

> Tip: if a generator can't do transparent PNGs, generate bottles on a **plain warm-cream
> background** instead — they'll still look good on the gold cards. Just keep them
> consistent.
