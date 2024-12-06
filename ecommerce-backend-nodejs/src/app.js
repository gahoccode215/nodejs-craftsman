const express = require('express')
require('dotenv').config()
const compression = require('compression')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

//console.log(`Process::`, process.env)

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// init db
require('./dbs/init.mongodb.v2')
const {checkOverload} = require("./helpers/check.connect")
//checkOverload()
// init routes
app.get("/", (req, res, next) => {
    return res.status(500).json({
        message: "Welcome"
    })
})


// handling error



module.exports = app