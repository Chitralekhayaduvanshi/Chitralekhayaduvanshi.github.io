'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Stewart Brand" },
  { text: "Change with time or time will change.", author: "Chitralekha Yaduvanshi" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  // Add more quotes here...
]

export default function QuoteBoard() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentQuote, setCurrentQuote] = React.useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-slate-800 text-white rotate-180 p-2"
        variant="ghost"
        style={{ writingMode: 'vertical-rl' }}
      >
        Quotes Board
      </Button>

      {isOpen && (
        <div className="fixed inset-y-0 left-0 w-96 bg-slate-900 text-white shadow-2xl transform transition-transform z-50">
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h2 className="text-xl font-chalk">Daily Wisdom</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-6 bg-[url('/chalkboard-texture.png')] overflow-y-auto">
              <Card className="bg-transparent border-slate-700 shadow-inner">
                <div className="p-6 min-h-[200px] flex flex-col justify-center">
                  <p className="text-2xl mb-4 font-chalk leading-relaxed">
                    "{quotes[currentQuote].text}"
                  </p>
                  <p className="text-right text-slate-300 font-chalk">
                    — {quotes[currentQuote].author}
                  </p>
                </div>
              </Card>

              <div className="flex justify-center mt-6 space-x-4">
                <Button variant="outline" onClick={prevQuote} className="bg-slate-800 hover:bg-slate-700">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={nextQuote} className="bg-slate-800 hover:bg-slate-700">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 