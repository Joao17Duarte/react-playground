import React from 'react'
import AppHeader from '../AppHeader'
import Card from '../Card'
import './App.css'

export default function App({ question, answer, radius }) {
  return (
    <>
      <AppHeader title="React Intro" />
      <Card
        radius="20"
        question="Do you like React?"
        answer="Yes, it's very Cool"
      />
      <Card
        radius="20"
        question="Do you like JS?"
        answer="No, it's very hard"
      />
      <Card
        radius="20"
        question="Do you like Hamburg?"
        answer="Yes, it's a very nice City but really cold "
      />
    </>
  )
}
