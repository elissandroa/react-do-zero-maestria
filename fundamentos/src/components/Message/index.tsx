import React from 'react'

function Message({ myFunction }) {
  return (
    <>
    <h3>Titulo do elemento filho</h3>
     <div><button onClick={myFunction}>Clique aqui</button></div>
    </>
  )
}

export default Message