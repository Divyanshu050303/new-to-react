import React from 'react'
import Card from '../UI/Card'
import Userlist from './UserList.module.css'
const UserList = (props) => {
  return (
    <div>
    <Card ClassName={Userlist.users}>
      <ul>
        {props.users.map((user) =>( 
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
        ))}
      </ul>
      </Card>
    </div>
  )
}

export default UserList
