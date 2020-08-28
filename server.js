const express = require("express")
const app = express()
let port = process.env.PORT || 3001

const store = require("./json_store/store.json")

app.get("/store", (req, res) => {
    res.send(store)
})

app.get("/store/properties", (req, res) => {
    priceFilter(res, req.query, store.properties)
})

app.get("/store/fashion", (req, res) => {
    priceFilter(res, req.query, store.fashion)
})

const priceFilter = (res, query, array) => {
    if (query && query.price) {
        if (query.price == "decreasing") {res.send(array.sort((a,b) => {return b.price - a.price}))}
        if (query.price == "increasing") {res.send(array.sort((a,b) => {return a.price - b.price}))}
        res.send(array.filter(product => product.price == query.price))
    }
    else {
        res.send(array)
    }
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})