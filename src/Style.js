import "./Style.css"


import React from 'react'

const Style = (props) => {
  return (
    <div className="card" >{props.children}</div>
  )
}

export default Style