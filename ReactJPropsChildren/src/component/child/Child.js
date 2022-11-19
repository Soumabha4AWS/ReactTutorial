import React from 'react'

function Child({name,email}) {
  return (
    <div>
      Child Page
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  )
}

export default Child