
const dataSet = require('./scryfall_oracle_list.json')

// returns random card if no index given
function getCard(index) {
  if (!index) {
    index = Math.floor((Math.random() * dataSet.length - 1))
  }
  return {...dataSet[index], index:index}
}

function isUnique(card, array) {
  return array.every(c => c.id !== card.id)
}

function randCards(amt) {
  const result = []

  for (let i = 0; i < amt; i++) {
    let card = getCard()
    let unique = isUnique(card, result)
    
    while (!unique) {
      card = getCard()
      unique = isUnique(card, result)
    }
    result.push(card)
  }
  return result
}

function rangeCards(from, to=false) {
  let result = dataSet.slice(from, to || dataSet.length)
  return result.map(function(card, index) {
    return {...card, index:index+from}
  })
}

export { getCard, randCards, rangeCards }
