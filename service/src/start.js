import express from "express";
import { getCount, increment } from "./db.js";

console.log("App Starting ....")

const app = express()
app.use(express.json())


app.get("/", async (req, res) => {
    console.log("GET /")
    res.send("OK\n")
})

app.get("/count", async (req, res) => {
    console.log("GET /getCount")
    const count  = await getCount()
    res.json({"count": count})
})

app.get("/increment", async (req, res) => {
    console.log("GET /increment")
    await increment()
    res.send("Incremented")
})

app.listen(3000, ()=> {
    console.log("App started !")
})
