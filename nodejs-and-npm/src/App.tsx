import { useState } from 'react'
import { Form } from './Form/Form.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
    </>
  )
}

export default App
