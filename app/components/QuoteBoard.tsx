'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, Pen } from 'lucide-react'

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
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-r-xl shadow-lg"
        variant="ghost"
      >
        <Pen className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-y-0 left-0 w-96 bg-[#2A2A2A] text-white shadow-2xl transform transition-all duration-300 ease-in-out z-50 border-r border-slate-700">
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800">
              <div className="flex items-center gap-2">
                <Pen className="h-5 w-5 text-slate-300" />
                <h2 className="text-xl font-chalk text-slate-200">Wisdom Board</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="hover:bg-slate-700 text-slate-300"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-6 bg-[url('/chalkboard-texture.png')] overflow-y-auto">
              <Card className="bg-transparent border border-slate-700 shadow-inner backdrop-blur-sm">
                <div className="p-6 min-h-[200px] flex flex-col justify-center relative">
                  <div className="absolute -top-3 -left-3 text-4xl text-slate-500 font-chalk opacity-50">"</div>
                  <div className="absolute -bottom-3 -right-3 text-4xl text-slate-500 font-chalk opacity-50 rotate-180">"</div>
                  <p className="text-2xl mb-4 font-chalk leading-relaxed text-slate-200 px-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    {quotes[currentQuote].text}
                  </p>
                  <p className="text-right text-slate-400 font-chalk italic" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                    — {quotes[currentQuote].author}
                  </p>
                </div>
              </Card>

              <div className="flex justify-center mt-6 space-x-4">
                <Button 
                  variant="outline" 
                  onClick={prevQuote} 
                  className="bg-slate-800/50 hover:bg-slate-700/50 border-slate-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={nextQuote} 
                  className="bg-slate-800/50 hover:bg-slate-700/50 border-slate-600"
                >
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