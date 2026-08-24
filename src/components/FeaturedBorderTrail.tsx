'use client'

import { useReducedMotion } from 'motion/react'
import { BorderTrail } from './motion-primitives/border-trail'

export function FeaturedBorderTrail() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <BorderTrail
      size={90}
      className="bg-gradient-to-l from-rosso via-rosso/40 to-transparent"
      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
    />
  )
}
