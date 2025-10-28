import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenerateButton from './components/Buttons'
import { DangerButton,PrimaryButton,SecondaryButton } from './components/Buttons'
import Product2 from './components/Product2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Product2 name={"Regime Change"} company={"BlackRock"} price={250000}>
    <PrimaryButton text="Add to cart"></PrimaryButton>
    <SecondaryButton text="Add to wishlist"></SecondaryButton>
    <DangerButton text="Not Intrested"></DangerButton>
    <GenerateButton text="Buy Now"></GenerateButton>
    </Product2>
    </>
  )
}

export default App
