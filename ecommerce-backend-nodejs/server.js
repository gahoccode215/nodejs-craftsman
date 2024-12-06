const app = require("./src/app");

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`server start with port ${PORT}`)
})


process.on(`SIGINT`, () => {
    server.close(() => console.log(`Exit Server Express`))
})