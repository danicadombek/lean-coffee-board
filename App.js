const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'lean-coffee-board'

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.strictEqual(null, err)
  console.log('Connected correctly to server')

  const db = client.db(dbName)
  const collection = db.collection('users')

  collection.insertOne({ name: 'Danica', age: '39', email: 'dd@gmx.de' })

  client.close()
})
