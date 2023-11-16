import React, { useContext, useState } from 'react'
import './accountcreate.css'
import Context from '../context/context'
const AccountCreation = () => {
  const { users, setUsers } = useContext(Context)
  const [showmsg, setShowmsg] = useState(false) //this is to display the success message on successfully creation of user
  //handleSubmit - handle the form submit and creates a new user in the table
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {}
    obj.username = e.target[0].value
    obj.email = e.target[1].value
    obj.id = e.target[2].value
    obj.phone = e.target[3].value
    obj.creationDate = new Date().toDateString().slice(4)
    obj.password = e.target[4].value
    setUsers([...users, obj])
    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
    e.target[3].value = ""
    e.target[4].value = ""
    setShowmsg(true)
  }
  return (
    <div className='container-form' onSubmit={handleSubmit}>
      <form action="" className='creationform'>
        <h2>Add Details</h2>
        <p>Username:</p>
        <input type="text" placeholder='enter your username' required />
        <p>Email:</p>
        <input type="email" placeholder='enter your email' required />
        <p>Id:</p>
        <input type="text" placeholder='enter your id' required />
        <p>Number:</p>
        <input type="number" placeholder='enter your number' required />
        <p>Password:</p>
        <input type="password" placeholder='enter your password' required />
        {
          showmsg && <p style={{ textAlign: "center" }}>Account Created Successfully!</p>
        }
        <button className='CAbutton' type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default AccountCreation