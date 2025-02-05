import bodyParser from "body-parser"
import cors from "cors"
import "dotenv/config"
import express from "express"
import http from "http"
import application from "./config/application"
import SocketIO from "./lib/Socket"
import router from "./router"

const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

new SocketIO(httpServer)

httpServer.listen(application.port, async () => {
  console.log(
    `Api "${application.name}" running on: ${application.host}:${application.port}`
  )
})
