// Figure out which credentials to return, based on prod or dev environment.

if (process.env.NODE_ENV === "production") {
    // return prod keys
    module.exports = require("./prod.js")
} else {
    // return dev keys
    module.exports = require("./dev.js")
}