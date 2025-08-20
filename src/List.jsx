import React from 'react'

function List({ lists }) {
  return (
    <div>
      <ul>
        {lists.map((item) => (
          <li key={item.id}>
            {item.name}, {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
