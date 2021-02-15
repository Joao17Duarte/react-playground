import Card from './Card'
import React from 'react'
export default {
  title: 'Card',
  component: Card,
}

export const CardExample = () => (
  <Card radius="20" question="Question??" answer="Your Answer" />
)
