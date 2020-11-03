const fs = require("fs")

const fashion = require("../jsonStore/fashion.json")
const properties = require("../jsonStore/properties.json")

const store = {
    properties,
    fashion
}

const storeJSON = JSON.stringify(store)
fs.writeFile('store.json', storeJSON, function (err) {
    if (err) return console.log(err);
    console.log('Finished Writing Store');
});

