'use client'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { products } from '@/lib/data/products'
import type { Product } from '@/types'
import ProductCard from '@/components/ui/ProductCard'

type Category = Product['category']

interface Option {
  label: string
  desc: string
  weights: Partial<Record<Category, number>>
}
interface Question {
  id: string
  title: string
  options: Option[]
}

const QUESTIONS: Question[] = [
  {
    id: 'mood',
    title: 'What mood are you after?',
    options: [
      { label: 'Bold & Mysterious', desc: 'Make an entrance', weights: { oriental: 2, woody: 2 } },
      { label: 'Fresh & Energetic', desc: 'Clean and alive', weights: { fresh: 2, citrus: 2 } },
      { label: 'Romantic & Soft', desc: 'Pretty and intimate', weights: { floral: 3 } },
      { label: 'Warm & Comforting', desc: 'Cozy and golden', weights: { oriental: 2, woody: 1 } },
    ],
  },
  {
    id: 'occasion',
    title: 'When will you wear it most?',
    options: [
      { label: 'Every Day', desc: 'Effortless signature', weights: { fresh: 2, citrus: 1 } },
      { label: 'Date Night', desc: 'Turn heads', weights: { floral: 1, oriental: 2 } },
      { label: 'The Office', desc: 'Refined, never loud', weights: { fresh: 2, floral: 1 } },
      { label: 'Special Events', desc: 'Unforgettable', weights: { oriental: 2, woody: 2 } },
    ],
  },
  {
    id: 'note',
    title: 'Which note speaks to you?',
    options: [
      { label: 'Florals & Petals', desc: 'Rose, jasmine, peony', weights: { floral: 3 } },
      { label: 'Citrus & Sea', desc: 'Grapefruit, salt, neroli', weights: { citrus: 2, fresh: 2 } },
      { label: 'Amber & Spice', desc: 'Saffron, amber, vanilla', weights: { oriental: 3 } },
      { label: 'Wood & Smoke', desc: 'Oud, leather, cedar', weights: { woody: 3 } },
    ],
  },
]

function recommend(scores: Record<Category, number>): Product[] {
  const ranked = (Object.keys(scores) as Category[])
    .filter((c) => scores[c] > 0)
    .sort((a, b) => scores[b] - scores[a])
  const picks: Product[] = []
  for (const cat of ranked) {
    products
      .filter((p) => p.category === cat)
      .sort((a, b) => b.rating - a.rating)
      .forEach((p) => {
        if (picks.length < 3 && !picks.includes(p)) picks.push(p)
      })
  }
  // Fallback: top-rated bestsellers
  if (picks.length < 3) {
    products
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .forEach((p) => {
        if (picks.length < 3 && !picks.includes(p)) picks.push(p)
      })
  }
  return picks.slice(0, 3)
}

const EMPTY_SCORES: Record<Category, number> = {
  floral: 0,
  woody: 0,
  oriental: 0,
  fresh: 0,
  citrus: 0,
}

export default function ScentQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Option[]>([])

  const done = step >= QUESTIONS.length

  const scores = useMemo(() => {
    const s: Record<Category, number> = { ...EMPTY_SCORES }
    answers.forEach((opt) =>
      Object.entries(opt.weights).forEach(([cat, w]) => {
        s[cat as Category] += w ?? 0
      })
    )
    return s
  }, [answers])

  const results = useMemo(() => (done ? recommend(scores) : []), [done, scores])

  const choose = (opt: Option) => {
    setAnswers((a) => [...a.slice(0, step), opt])
    setStep((s) => s + 1)
  }
  const back = () => setStep((s) => Math.max(0, s - 1))
  const restart = () => {
    setAnswers([])
    setStep(0)
  }

  const progress = Math.min(step, QUESTIONS.length) / QUESTIONS.length

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      {/* Progress */}
      {!done && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="eyebrow">
              Step {step + 1} of {QUESTIONS.length}
            </span>
            {step > 0 && (
              <button
                onClick={back}
                className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink transition-colors"
              >
                <ArrowLeft size={14} /> Back
              </button>
            )}
          </div>
          <div className="h-1 rounded-pill bg-line overflow-hidden">
            <motion.div
              className="h-full bg-ink"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest mb-8 text-center">
              {QUESTIONS[step].title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(opt)}
                  className="text-left p-6 rounded-card border border-line bg-paper hover:border-ink hover:shadow-hover transition-all duration-200 group"
                >
                  <p className="font-display text-lg font-bold group-hover:text-coral transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-sm text-muted mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="eyebrow !text-coral mb-3">Your Matches</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest mb-2">
              We found your scent
            </h2>
            <p className="text-sm text-muted mb-10 max-w-md mx-auto">
              Based on your answers, these three Mazah fragrances are your closest
              match. Not sure? Try the Discovery Kit and sample them all.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <Link href="/discovery-kit" className="btn-solid px-8">
                Sample All 3 — $19
              </Link>
              <button onClick={restart} className="btn-outline px-8">
                <RotateCcw size={15} /> Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
