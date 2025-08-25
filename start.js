
import express from "express";
import listDBs from "./db.js";

console.log("App Starting ....")

const app = express()
app.use(express.json())

app.get("/hc", (req, res) => {
    res.send("OK")
})

app.get("/list", async (req, res) => {
    const resp = await listDBs()
    res.send(resp)
})

app.listen(3000, ()=> {
    console.log("App started !")
})