"use client"
import { useState } from "react"

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  console.log("client")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}
