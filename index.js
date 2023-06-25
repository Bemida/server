require('dotenv').config()
require('./DL/db').connect()
const cors = require('cors')
const mainRouter = require("./Config/mainRoutes")

const express = require('express'),
    app = express(),
    port = process.env.PORT  || 5000

app.use(express.json())
app.use(cors())

app.use("/", mainRouter)

app.listen(port, () => {
    console.log('Server is up 🖥️')
})