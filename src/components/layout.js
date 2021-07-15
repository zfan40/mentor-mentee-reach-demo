import React from "react"
import '../style/_reset.css'

export default function Layout({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}