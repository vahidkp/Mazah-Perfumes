# Mazah — Image Generation Prompts (Dossier-style redesign)

Prompts to generate the real imagery for the **new version** of the site (home,
collection, product pages). Works with any text-to-image tool — Midjourney,
DALL·E / GPT-Image, Flux, Ideogram, Bloom, Nano Banana, etc.

Each prompt is mapped to the **exact filename the code already loads**, so you
can drop the output straight into `public/images/` with **zero code changes**.

> This replaces the previous prompt file, which described the older gold/amber
> design (gold caps, "ILLURE" banner, 5-tile gallery, transparent/cream bottle
> backgrounds). That guidance is obsolete and the cream-background advice is now
> wrong — see §0.

---

## 0. Read this first — two image types, two rule sets

The site renders images in two completely different ways. Getting the background
right is the single most important thing.

### Type A — Product bottle shots (`*.png`)
Composited onto coloured cards with `mix-blend-mode: multiply`
(`components/ui/ProductCard.tsx`, `ImageGallery.tsx`, `HeroSection.tsx`,
`globals.css:78`).

- **Background MUST be pure white `#FFFFFF`** — a flat, seamless studio sweep.
  With multiply, white disappears and only the bottle shows on the coloured
  card. Any grey/gradient/cream/tinted background renders as an ugly box.
- No reflections fading to grey, no coloured floor — keep the surround pure
  white. A soft contact shadow directly under the bottle is fine.
- Subject centred, generous margin (shown `object-contain`, so don't crop the
  bottle to the edges).
- Square or 4:5 portrait canvas.

### Type B — Lifestyle / editorial photos (`*.jpg`)
Used full-bleed with `object-cover` (category cards, boutique banner, about).

- Normal photography. Real backgrounds, real light. No white-background rule.
- Shoot/crop with the stated aspect ratio in mind — they're cover-cropped.

---

## 1. Brand art direction (applies to every prompt)

Mazah is a **next-generation perfume house** — affordable luxury, "premium
French fragrance without the markup." The look intentionally follows
**Dossier.co**: clean, modern, warm-minimal, confident.

- **Palette:** warm off-white / cream (`#FBFAF8`, `#F4F1EC`), soft honey-gold
  (`#E8C56A`, `#C8962A`), ink near-black (`#141414`), Dossier-style coral-red
  accent (`#D6492E`). Avoid cold/clinical blue-white unless the scent calls for it.
- **Bottle design — keep it ONE consistent bottle across all scents** (this is
  what makes a Dossier-style line look like a line): a simple **rectangular
  flat-shouldered clear glass flacon** so the liquid colour shows, a **matte
  black rectangular cap** (or pale wood cap — pick one and keep it), and a
  **minimal typographic label** (small "mazah" wordmark + scent name). Only the
  **liquid colour changes** per scent. Same bottle, cap, label layout and
  lighting every time.
- **Lighting:** soft, diffused studio light, gentle gradient on the glass, one
  soft shadow. Premium e-commerce, not harsh flash.
- **Mood for lifestyle shots:** sunlit, editorial, skin-forward, warm neutrals,
  modern and inclusive. Think Aesop × Glossier × Dossier.

### Universal negative prompt (append to bottle prompts)
```
no text errors, no gibberish label text, no extra bottles, no hands, no people,
no coloured background, no gradient background, no grey backdrop, no cream backdrop,
no reflective floor, no clutter, no props touching the bottle, not blurry,
no watermark, no drop-shadow box, photorealistic, sharp focus
```

---

## 2. Product bottles (Type A — `*.png`, WHITE background)

> **Reusable base** (paste before each scent's specifics):
> `Product photography of a minimalist luxury perfume bottle, rectangular
> flat-shouldered clear glass flacon with a matte black rectangular cap, simple
> typographic label reading "mazah", centred on a seamless pure white #FFFFFF
> studio background, soft diffused lighting, subtle soft contact shadow, premium
> e-commerce hero shot, 1:1, ultra detailed.`
> Then change only the **liquid colour + label name** and append the negative prompt.

These are the PNG filenames the code currently loads. Liquid colour = each
scent's signature colour from `lib/data/products.ts`.

| File | Product | Inspired by | Liquid colour |
|---|---|---|---|
| `midnight-bloom-1.png` | Midnight Bloom | Chanel Coco Mademoiselle | mauve-pink `#A8567E` |
| `midnight-bloom-2.png` | Midnight Bloom (alt angle) | — | mauve-pink `#A8567E` |
| `ocean-whisper-1.png` | Ocean Whisper | Dior Sauvage | pale aqua-grey `#CBD3D7` |
| `ocean-whisper-2.png` | Ocean Whisper (alt angle) | — | pale aqua-grey `#CBD3D7` |
| `amber-royale-2.png` | Amber Royale | MFK Baccarat Rouge 540 | amber gold `#C2772A` |
| `citrus-luxe-1.png` | Citrus Luxe | Jo Malone Lime Basil & Mandarin | bright orange `#D98324` |
| `hero-bottle.png` | Velvet Oud | Tom Ford Oud Wood | deep plum/wine `#6E3B4E` |
| `feature-bottle.png` | Golden Hour | Carolina Herrera Good Girl | honey terracotta `#C16A37` |

> **Reused placeholders:** the catalog currently reuses some of the PNGs above
> for **Rose Noir** (deep red `#CB4030`) and **White Orchid** (pale sage `#9AAE8E`).
> For unique bottles, generate `rose-noir-1.png` and `white-orchid-1.png` with the
> base prompt + those colours, then point `lib/data/products.ts` at them (I can do
> that swap).

### Copy-paste prompts

**`midnight-bloom-1.png` — Midnight Bloom**
```
Product photography of a minimalist luxury perfume bottle, rectangular flat-shouldered
clear glass flacon filled with translucent mauve-pink liquid (#A8567E), matte black
rectangular cap, simple typographic label reading "mazah — Midnight Bloom", centred on
a seamless pure white #FFFFFF studio background, soft diffused lighting, subtle soft
contact shadow, premium e-commerce hero shot, 1:1, ultra detailed.
[+ universal negative prompt]
```

**`ocean-whisper-1.png` — Ocean Whisper**
```
...clear glass flacon filled with pale aqua-grey liquid (#CBD3D7), matte black cap,
label "mazah — Ocean Whisper", fresh marine feel, seamless pure white #FFFFFF
background... 1:1. [+ negative prompt]
```

**`amber-royale-2.png` — Amber Royale**
```
...clear glass flacon filled with rich glowing amber-gold liquid (#C2772A), matte
black cap, label "mazah — Amber Royale", opulent oriental feel, seamless pure white
#FFFFFF background... 1:1. [+ negative prompt]
```

**`citrus-luxe-1.png` — Citrus Luxe**
```
...clear glass flacon filled with bright sunny orange liquid (#D98324), matte black
cap, label "mazah — Citrus Luxe", crisp citrus feel, seamless pure white #FFFFFF
background... 1:1. [+ negative prompt]
```

**`hero-bottle.png` — Velvet Oud**
```
...clear glass flacon filled with deep plum-wine liquid (#6E3B4E), matte black cap,
label "mazah — Velvet Oud", dark woody luxe feel, seamless pure white #FFFFFF
background... 1:1. [+ negative prompt]
```

**`feature-bottle.png` — Golden Hour**
```
...clear glass flacon filled with warm honey-terracotta liquid (#C16A37), matte black
cap, label "mazah — Golden Hour", glowing warm amber feel, seamless pure white #FFFFFF
background... 1:1. [+ negative prompt]
```

**Alt angles** (`midnight-bloom-2.png`, `ocean-whisper-2.png`): reuse the matching
prompt above but swap `hero shot` → `three-quarter angle view, slight top-down,
showing the cap and shoulder, same bottle same lighting`.

---

## 2.5 Home hero section (`components/home/HeroSection.tsx`)

The home hero recreates Dossier's "Smell into **The Future of Fragrance.**" banner:
perfume bottles scattered over a warm honey pool, with the headline + two buttons
(`Shop Bestsellers` / `Shop All`) anchored **bottom-left**.

### How it's built today (no new asset needed)
The hero is **composited in code**, not a single image:
- Background = a CSS honey gradient (cream → glossy honey pool low-centre) defined
  inline in `HeroSection.tsx`.
- Foreground = the **Type A white-background bottle PNGs from §2** (Ocean Whisper,
  Midnight Bloom, Amber Royale, Citrus Luxe, Golden Hour/`feature-bottle.png`),
  scattered, tilted, and floated in with `mix-blend-mode: multiply`.

So **regenerating the §2 bottles automatically upgrades the hero** — keep those on
pure white `#FFFFFF` (the multiply trick is what makes them sit on the honey).
The text-overlay zone (bottom-left third) is intentionally kept clear of bottles so
the dark `#141414` headline stays legible.

### Option B — single photographic hero (`hero-honey.jpg`, Type B full-bleed)
If you'd rather use one real photograph instead of the composited bottles, generate
this and I'll swap `HeroSection` to render it full-bleed (`<Image fill object-cover>`)
with the copy overlaid — small code change, ask me to do it.

· Landscape, wide **16:9** (≈2400×1350), shoot for a **desktop hero**.

```
Bright, airy overhead-ish product hero: five minimalist luxury perfume bottles —
the same rectangular flat-shouldered clear-glass flacon with a matte black cap —
scattered and half-floating over a glossy pool of golden honey, each bottle a
different translucent liquid colour (mauve-pink, pale aqua, amber-gold, bright
orange, honey-terracotta). Warm cream-to-honey gradient, soft top light, gentle
reflections and a few honey droplets, lots of clean negative space in the LOWER-LEFT
third for headline text, modern minimal luxury fragrance campaign in the style of
Dossier, warm palette (#F7F0E0 cream, #E8C56A honey, #C8962A gold), horizontal 16:9,
photorealistic, ultra detailed.
no text, no logos, no people, no hands, no clutter in the lower-left area,
not blurry, no watermark, sharp focus
```

> Mobile note: the hero is also shown on narrow screens. If you want a separate
> tighter crop for phones, generate a **4:5** version (`hero-honey-mobile.jpg`) with
> the bottles grouped toward the top and clear space at the bottom for the copy.

---

## 3. Lifestyle / editorial (Type B — `*.jpg`, real backgrounds)

**`editorial-model.jpg` — "Women" category card** · portrait **3:4** (≈1200×1600)
```
Editorial beauty portrait of a woman with glowing natural skin holding a minimalist
perfume bottle near her collarbone, warm cream and soft honey-gold tones, soft window
light, modern luxury fragrance campaign, shallow depth of field, vertical 3:4,
photorealistic. No text, no logos, no clutter.
```

**`gallery-2.jpg` — "Men" category card** · portrait **3:4** (≈1200×1600)
```
Editorial portrait of a man in a neutral linen shirt, warm minimalist studio, soft
directional light, calm confident mood, modern unisex fragrance campaign aesthetic,
cream and tan palette, vertical 3:4, photorealistic. No text, no logos.
```

**`gallery-1.jpg` — "Unisex" category card** · portrait **3:4** (≈1200×1600)
```
Two people of different genders side by side in warm neutral knitwear, soft natural
light, inclusive modern fragrance campaign, cream and honey tones, editorial,
vertical 3:4, photorealistic. No text, no logos.
```

**`about-1.jpg` — Boutique / Father's Day gifting banner** · landscape **4:3** (≈1600×1200)
```
Lifestyle still life of an elegant perfume gift set on a warm marble surface with a
silk ribbon and dried botanicals, soft morning light, warm cream and gold palette,
luxury boutique gifting mood, horizontal 4:3, photorealistic. No text, no logos.
```

**`about-2.jpg` — About page "ingredients" image** · landscape **4:3** (≈1600×1200)
```
Artful flat-lay of natural perfume ingredients — rose petals, citrus slices, amber
resin, vetiver root, oud wood chips — on a warm cream linen background, soft diffused
daylight, organic premium apothecary mood, horizontal 4:3, photorealistic.
No text, no logos.
```

> `about-3.jpg`, `gallery-3/4/5.jpg` exist on disk but are **not referenced** by the
> current pages — only generate them if you add a new section that uses them.

---

## 4. Export & file specs

| Use | Format | Background | Size | Aspect |
|---|---|---|---|---|
| Product bottles | **PNG** | **pure white #FFFFFF** (or transparent) | ≥1600×1600 | 1:1 |
| Bottle alt angle | PNG | white | ≥1600×1600 | 1:1 |
| Category cards | JPG | photo | ≥1200×1600 | 3:4 portrait |
| Banners / about | JPG | photo | ≥1600×1200 | 4:3 landscape |
| Home hero (optional, §2.5 Option B) | JPG | photo | ≥2400×1350 | 16:9 wide |

- **Save into:** `public/images/` using the exact filenames in the tables above
  (overwrite the current `.png`/`.jpg` placeholders — the code already points at them).
- Bottles: white background is preferred over transparent — it composites cleanly
  with `mix-blend-mode: multiply`. Transparent also works; just keep edges clean.
- Compress JPGs to ~80% quality; keep each under ~300 KB for performance.
- `next dev` is running, so the site picks up new files on reload.

### Tool-specific tips
- **Midjourney:** add `--ar 1:1` (bottles), `--ar 3:4` / `--ar 4:3` (lifestyle),
  `--style raw` for product realism. For consistent bottles, generate one you like,
  then reuse it as a `--cref` / image reference and only change the liquid colour.
- **DALL·E / GPT-Image / Flux:** say "seamless pure white background" and "studio
  product photography" explicitly to stop it inventing a backdrop.
- **Consistency is king:** lock ONE master bottle (shape/cap/label) first, then
  derive all colour variants from it.

---

## 5. Quick checklist

- [ ] Home hero (§2.5): either regenerate the §2 bottles (composited hero, default)
      or generate `hero-honey.jpg` for the single-photo option
- [ ] One consistent bottle design across all scents (only liquid colour changes)
- [ ] All bottle PNGs on **pure white**, centred, soft shadow, square
- [ ] Liquid colours match each scent's signature colour (§2 table)
- [ ] Lifestyle JPGs cropped to the right aspect (3:4 cards, 4:3 banners)
- [ ] Warm cream/honey/coral palette, modern Dossier-style mood throughout
- [ ] Files saved to `public/images/` with the exact existing filenames
