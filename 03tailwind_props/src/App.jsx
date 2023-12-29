import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Aman",
    age:21
  }

  let newArr = [1,2,3,4,5,6,7]

  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card  user="reactAman" btnText="visit"/>
      <Card  user="amnnnnn" btnText="click"/>
    </>
  )
}

export default App
