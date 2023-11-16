import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountCreation from './components/AccountCreation'
import UserDetails from './components/UserDetails'
import ContextHolder from './context/ContextHolder'

function App() {
  const [tab, setTab] = useState('UD') // to show on which tab the user is ."UD" is user Details && "AC" is Account Creation
  return (
    <ContextHolder>
      <div className="container">
        <div className='navbar'>
          <button onClick={() => setTab("UD")} style={{
            background: tab == "UD" ? '#262a41' : "none",
            color: tab == "UD" ? 'white' : "#262a41",
          }}>User Details</button>
          <button onClick={() => setTab("AC")} style={{
            background: tab == "AC" ? '#262a41' : "none",
            color: tab == "AC" ? 'white' : "#262a41",
          }}>Account Creation</button>
        </div>
        {tab == 'AC' ? <AccountCreation /> : <UserDetails />}
      </div>

    </ContextHolder>
  )
}

export default App
