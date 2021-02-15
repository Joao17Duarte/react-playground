import './Card.css'
import React from 'react'

export default function Card({ question, answer, radius }) {
  const styleRadius = { borderRadius: radius + 'px' }

  return (
    <>
      <div style={styleRadius} className="Card">
        <h2>{question}</h2>
        <span>{answer}</span>
      </div>
    </>
  )
}
