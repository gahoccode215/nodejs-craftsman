const express = require('express')
const compression = require('compression')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// init db
require('./dbs/init.mongodb.v1')

// init routes
app.get("/", (req, res, next) => {
    return res.status(500).json({
        message: "Welcome"
    })
})


// handling error



module.exports = app