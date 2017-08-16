const { MongoClient, ObjectId } = require('mongodb')
const express = require('express')
const path = require('path')

const PORT = 3001

const app = express()
const pathPublic = path.join(__dirname, 'public')
app.use(express.static(pathPublic))

const urlDb = 'mongodb://localhost:27017/test'

MongoClient.connect(urlDb, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  app.use((req, res, next) => {
    console.log('Jojola')
    const {limit = 20, fields, fieldshide, page} = req.query
    const projection = {}
    let skip = (page * limit) - limit || 0

    if (fields) {
      fields.split(',').forEach(fields => {
        projection[fields] = 1
      })
    }

    if (fieldshide) {
      fieldshide.split(',').forEach(fields => {
        projection[fieldshide] = 0
      })
    }

    req.projection = projection
    req.limit = limit
    req.skip = skip

    next()
  })

  app.get('/restaurants', (req, res) => {
    const projection = req.projection
    const limit = req.limit
    const skip = req.skip

    db.collection('restaurants')
      .find({}, projection)
      .limit(+limit)
      .skip(skip)
      .toArray((err, aRestaurants) => {
        if (err) throw err
        res.json(aRestaurants)
      })
  })

  app.get('/restaurants/borough/:borough', (req, res) => {
    const projection = req.projection
    const limit = req.limit
    const skip = req.skip

    const { borough } = req.params

    db.collection('restaurants')
        .find({ borough }, projection)
        .limit(+limit)
        .skip(skip)
        .toArray((err, aRestaurants) => {
          if (err) throw err
          res.json(aRestaurants)
        })
  })

  app.get('/restaurants/cuisine/:cuisine', (req, res) => {
    const projection = req.projection
    const limit = req.limit
    const skip = req.skip

    const { cuisine } = req.params

    db.collection('restaurants')
      .find({ cuisine }, projection)
      .limit(+limit)
      .skip(skip)
      .toArray((err, aRestaurants) => {
        if (err) throw err
        res.json(aRestaurants)
      })
  })

  app.get('/restaurants/cuisine/not/:cuisine', (req, res) => {
    const projection = req.projection
    const limit = req.limit
    const skip = req.skip

    const { cuisine } = req.params

    db.collection('restaurants')
      .find({ cuisine: {$ne: cuisine} }, projection)
      .limit(+limit)
      .skip(skip)
      .toArray((err, aRestaurants) => {
        if (err) throw err
        res.json(aRestaurants)
      })
  })

  app.get('/restaurants/:id', (req, res) => {
    const projection = req.projection
    const limit = req.limit
    const skip = req.skip

    const { id } = req.params

    db.collection('restaurants')
      .find({_id: ObjectId(id)}, projection)
      .limit(+limit)
      .skip(skip)
      .toArray((err, aRestaurants) => {
        if (err) throw err
        res.json(aRestaurants)
      })
  })
})

/*
app.get('/', (req, res) => {
  res.render('index', {})
})
*/

app.listen(PORT)
console.log(`Listening to PORT ${PORT}`)
