const express = require("express")
const app  = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.send("hello World")
})

app.get("/api/v1/instagram", (req, res) => {
    res.status(200).json({
        "username": "ankitgiri",
        "followers": "400",
        "following": "200",
        "Date": Date.now()
    })  
})

app.get("/api/v1/linkedIn", (req, res) => {
    res.status(200).json({
        "username": "Ankit Giri",
        "followers": "700",
        "following": "200",
        "Date": Date.now()
    })
})

app.get("/api/v1/facebook", (req, res) => {
    res.status(200).json({
        "username": "ankit.giri.1614",
        "followers": "500",
        "following": "200",
        "Date": Date.now()
    })
})

app.get("/api/v1/:token", (req, res) => {
    res.status(400).json({param : req.params.token })
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})