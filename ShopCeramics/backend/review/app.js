const express = require('express')
const { getDb, connectToDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('5000', () => {
      console.log('app listening on port 5000')
    })
    db = getDb()
  }
})

// routes
app.get('/reviews', (req, res) => {
  let reviews = []

  db.collection('reviews')
    .find()
    // .sort({id: 1})+
    
    .forEach(reivew => reviews.push(review))
    .then(() => {
      res.status(200).json(reviews)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})