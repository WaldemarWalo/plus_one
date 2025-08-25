
import express from "express";

console.log("App Starting ....")

const app = express()
app.use(express.json())

app.get("/hc", (req, res) => {
    res.send("OK")
})

app.listen(3000, ()=> {
    console.log("App started !")
})