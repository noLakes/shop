
const dataSet = require('./scryfall_oracle_list.json')

function getCard(index) {
  return dataSet[index]
}

function randCard() {
  return dataSet[Math.floor((Math.random() * dataSet.length - 1))]
}

function isUnique(card, array) {
  return array.every(c => c.name !== card.name)
}

function cardList(amt) {
  const result = []

  for (let i = 0; i < amt; i++) {
    let card = randCard()
    let unique = isUnique(card, result)
    
    while (!unique) {
      card = randCard()
      unique = isUnique(card, result)
    }
    result.push(card)
  }
  return result
}

export { getCard, randCard, cardList }