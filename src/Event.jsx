import React, { useState } from 'react'

function Event() {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = () => {
    alert(`Xin chao, ${name}`)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <div>
      <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" />
      <button onClick={handleSubmit} type="submit">
        Chao ban
      </button>
    </div>
  )
}

export default Event
