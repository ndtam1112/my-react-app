import React, { useState } from 'react'

function UserCard({ name, age }) {
  const [isOnline, setisOnline] = useState(true)
  const handleOnline = () => {
    setisOnline(!isOnline)
  }
  return (
    <div>
      <ul>
        <li>Ten: {name}</li>
        <li>Tuoi: {age}</li>
        <li>Trang thai: {isOnline ? 'Online' : 'Offline'}</li>
      </ul>
      <button onClick={handleOnline}>Change</button>
    </div>
  )
}

export default UserCard
