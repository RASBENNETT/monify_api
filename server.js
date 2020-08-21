const express = require("express")
const app = express()
let port = process.env.PORT || 3001

const properties = require("./json_store/Properties.json")

app.get("/houses/", (req, res) => {
    res.send(properties)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})