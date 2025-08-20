import React from 'react'

function Javascript() {
  const price = '100000'
  const quantity = 3
  let total = price * quantity

  const username = null
  const isVerified = false

  if (username === null || isVerified === false) {
    console.log('Vui long dang nhap')
  }

  return (
    <div>
      Javascript {total}
      <p></p>
    </div>
  )
}

export default Javascript
