import React, { useContext, useState } from 'react'
import "./userdetail.css"
import Context from '../context/context'
const UserDetails = () => {
  var keys = ['id', 'username', 'email', 'phone', 'creationDate']; //list of keys helps in querying in the table
  const { users, setUsers } = useContext(Context)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState({}) // selected stores the index of the user which is clicked from the table to display in the pop up
  const [modal, setModal] = useState(false)

  // onchange - for any change in the search bar and query the changes immediately  
  const onchange = (e) => {
    setSearch(e.target.value)
  }

  // filterItem - to filter the table according to the search query and display the table accordingly
  const filterItem = (item) => {
    if (search != "")
      return keys.some((key) => String(item[key]).toLowerCase().includes(search.toLowerCase()))
    else
      return item
  }

  //DeleteUser - to delete a user from the table
  const DeleteUser = () => {
    var arr = users;
    console.log(selected)
    arr.splice(selected, 1)
    setUsers(arr)
    setModal(false)
  }

  //Message component to display when there is no users in the table
  const Message = () => {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>No User To Dispaly !</p>
    )
  }
  return (
    <>
      <div className='user-cont'>

        <input type="text" onChange={onchange} className='searchBar' placeholder='Search Here....' />
        <div className='user-detail'>
          <h2>User Details</h2>
          {users.filter(filterItem).length == 0 ? <Message /> :  //when no users is returned from the search query
            <table className='table' align='center'>
              <tbody>
                <tr className='top'>
                  <th>Id</th>
                  <th>username</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>Creation Date</th>
                </tr>
                {users.length == 0 ? <Message /> :                //when there is no users in the table
                  users.filter(filterItem).map((ele, ind) => {
                    return (
                      <tr className="border_bottom" onClick={() => { setSelected(ind); setModal(true); }} key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.creationDate}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>}
        </div>
      </div>
      {modal && <div className="modal-container">
        <div className="modal">
          <div className="but">
            <button onClick={() => setModal(false)} >X</button>
          </div>
          <div className="content">
            <span>Name:</span> <span>{users[selected]?.username}</span>
          </div>
          <div className="content">
            <span>Email:</span> <span>{users[selected]?.email}</span>
          </div>
          <div className="content">
            <span>ID:</span> <span>{users[selected]?.id}</span>
          </div>
          <div className="content">
            <span>Phone:</span> <span>{users[selected]?.phone}</span>
          </div>
          <div className="content">
            <span>Date of Creation:</span> <span>{users[selected]?.creationDate}</span>
          </div>
          <div className="content">
            <span>Password:</span> <span>{users[selected]?.password}</span>
          </div>
          <div className="bottomButton">
            <button>Generate Report</button>
            <button onClick={DeleteUser}>Delete</button>
          </div>
        </div>
      </div>}
    </>
  )
}

export default UserDetails
