import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/user'


const app = express()
const port = 3000

app.use('/user', userController)
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
