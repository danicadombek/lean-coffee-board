const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    title: 'Explain Express',
    author: 'Donald Duck',
    votes: '4',
    id: '0',
  },
  {
    title: 'MongoDB',
    author: 'Daisy Duck',
    votes: '6',
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundCards = cards.find(card => card.id === id)
  foundCards ? res.json(foundCards) : next()
})

router.post('/', (req, res, next) => {
  const newCards = { ...req.body, id: uuidv4() }
  cards.push(newCards)
  res.status(201).json(newCards)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const card = cards[index]
  const updatedCards = { ...card, ...req.body }
  cards.splice(index, 1, updatedCards)
  res.json(updatedCards)
})

router.delete('/id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.export = router
