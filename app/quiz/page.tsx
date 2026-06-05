import type { Metadata } from 'next'
import ScentQuiz from '@/components/quiz/ScentQuiz'

export const metadata: Metadata = {
  title: 'Find Your Scent — Mazah Perfume',
  description:
    'Take the 30-second scent quiz and discover the Mazah fragrance made for you.',
}

export default function QuizPage() {
  return (
    <div className="pt-[120px] md:pt-[140px] min-h-screen">
      <section className="bg-hero-gradient py-12 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 px-6">
          <p className="font-body text-xs text-cream/70 uppercase tracking-[0.3em] mb-3">
            30-Second Scent Quiz
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight">
            Find <em className="font-normal">Your</em> Scent
          </h1>
          <p className="font-body text-base text-cream/80 mt-4 max-w-md mx-auto">
            Three quick questions. We’ll match you to your perfect fragrance.
          </p>
        </div>
      </section>
      <ScentQuiz />
    </div>
  )
}
