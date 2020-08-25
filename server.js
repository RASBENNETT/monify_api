const express = require("express")
const app = express()
let port = process.env.PORT || 3001

const properties = require("./json_store/Properties.json")


app.get("/houses", (req, res) => {

    if (req.query.price) {
        if (req.query.price == "decreasing") {res.send(properties.sort((a,b) => {return b.price - a.price}))}
        if (req.query.price == "increasing") {res.send(properties.sort((a,b) => {return a.price - b.price}))}
        
        res.send(properties.filter(property => property.price == req.query.price))
    }
    else {
        res.send(properties)
    }

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})