const express = require('./server')

express.get('/', (req, res) => {
  return res.send('Hello World')
})

express.listen(process.env.PORT || 3000)
