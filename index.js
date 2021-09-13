require('dotenv').config()
const express = require("express")
const PORT = 5000
const emailRouter = require("./routes/email")

const app = express()

app.get("/", (req, res) => {
    res.send(Date.now().toString())
})
app.use("/email", emailRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})