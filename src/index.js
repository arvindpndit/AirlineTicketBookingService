const express = require("express");

const {PORT} = require("./config/serverConfig")

const app = express();

const setupAndStartServer = ()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is up and running on PORT ${PORT}`)
    })
}

setupAndStartServer()
