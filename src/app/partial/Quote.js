"use client"
import {useState, useEffect} from "react"
export default function Quote() {
  const [quote, setQuote] = useState("Wczytywanie...")
  useEffect(() => {
    const fn = async () => {
      const resp = await fetch("http://api.kanye.rest")
      const q = await resp.json()
      setQuote(q.quote)
    }
    fn()
  }, [])

  return(
    <h1>Quote: {quote}</h1>
  )
}