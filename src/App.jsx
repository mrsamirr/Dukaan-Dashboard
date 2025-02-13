import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { PayoutCard } from './components/PayoutCard'

function App() {

  return (
    <div className='grid grid-cols-4 p-4 space-around'>
     <PayoutCard title={"Amount Pending"} amount = {"92,312.20"} orderCount={13}/>
     <RevenueCard title={"Amount Processed"} amount = {"23,92,312.19"} orderCount={13}/>
    </div>
  ) 
} 

export default App
