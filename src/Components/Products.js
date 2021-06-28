import React, { useState } from 'react'
import { cardList } from '../scryfall_api/mtgCards.js'
import Card from './Card.js'

function Products() {
  const [cards, setCards] = useState(cardList(10))
  const [cart, setCart] = useState([])

  return(
    <div className='products-container'>
      <h2>I am products!</h2>
      <ul className='products-list'>
        {cards.map(c => {
          return <Card key={c.id} card={c} />
        })}
      </ul>
    </div>
  )
}

export default Products