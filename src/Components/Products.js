import React, { useState, useEffect } from 'react'
import { rangeCards } from '../scryfall_api/mtgCards.js'
import Card from './Card.js'

function Products() {
  const [cards, setCards] = useState([rangeCards(0, 10)])
  const [page, setPage] = useState(1)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const from = (page - 1) * 10
    const to = page > 1 ? (page * 10) + 1 : 10
    setCards(rangeCards(from, to))
    console.log(`build card list from ${from} - ${to}`)
  },[page])

  return(
    <div className='products-container'>
      <ul className='products-list'>
        {cards.map(c => {
          return <Card key={c.index} card={c} />
        })}
      </ul>
    </div>
  )
}

export default Products