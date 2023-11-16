import React, { useState } from 'react'
import Context from './context'

const ContextHolder = (props) => {
  const [users, setUsers] = useState([         // to have some initial data in the table
    {
      username: "rohit",
      id: 23,
      email: "rohit@gmail.com",
      phone: 987636522,
      creationDate: "Nov 12 2023",
      password: 'password'
    }
  ])
  return (
    <Context.Provider value={{ users, setUsers }}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextHolder
