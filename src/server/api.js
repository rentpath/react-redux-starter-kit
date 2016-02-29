const express = require('express')

const api = express.Router()

api.get('/whoami', (req, res) => {
  res.send('You are a winner')
})

export default api
