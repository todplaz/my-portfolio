'use client'

export default function myImageLoader({ src, width, quality }) {
  if(src.starsWith('https://images.pexels.com')) return src
  return `https://my-portfolio.com/${src}?w=${width}&q=${quality || 75}`
}