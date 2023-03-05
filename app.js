const express = require('express')

const frontend = express()
const frontendPort = 3000

const backend = express()
const backendPort = 3001

async function fetchDataJSON() {
  const response = await fetch('http://localhost:3001/', { method: 'GET' })
  const user = await response.json()
  return user
}

frontend.get('/', (_req, res) => {
  fetchDataJSON().then((user) => {
    res.send(`Hi ${user.username}`)
  })
})

backend.get('/', (req, res) => {
  res.json({ username: 'J.' })
})

frontend.listen(frontendPort, () => {
  console.log(`Debugging cy.contains on frontendPort ${frontendPort}`)
})

backend.listen(backendPort, () => {
  console.log(`Debugging cy.contains on backendPort ${backendPort}`)
})
