'use client'

import dynamic from 'next/dynamic'

const DynamicQuoteBoard = dynamic(() => import('./QuoteBoard'), {
  ssr: false,
  loading: () => null,
})

export default function QuoteBoardWrapper() {
  return <DynamicQuoteBoard />
} 