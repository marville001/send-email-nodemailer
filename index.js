require('dotenv').config()
const express = require("express")
const path = require("path")
const PORT = 5000
const emailRouter = require("./routes/email")

const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send(Date.now().toString())
})
app.use("/email", emailRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})