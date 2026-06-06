import type { Metadata } from 'next'
import ScentQuiz from '@/components/quiz/ScentQuiz'

export const metadata: Metadata = {
  title: 'AI Scent Finder — Mazah',
  description:
    'Take the 30-second scent quiz and discover the Mazah fragrance made for you.',
}

export default function QuizPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-canvas border-b border-line py-12 text-center">
        <div className="container-page">
          <p className="eyebrow mb-3">AI Scent Finder</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tightest">
            Find <span className="font-normal">your</span> scent
          </h1>
          <p className="text-muted mt-3 max-w-md mx-auto">
            Three quick questions. We&apos;ll match you to your perfect fragrance.
          </p>
        </div>
      </section>
      <ScentQuiz />
    </div>
  )
}
