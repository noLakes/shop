import React, { useState, useEffect } from 'react'

function Card(props) {
  const card = props.card

  return(
    <div 
      className='card-product-container'
    >
      <img src={card.image_uris.normal} alt="card-art"></img>
      <h3>{card.id}</h3>
      <h3>{card.name}</h3>
    </div>
  )
}

export default Card
