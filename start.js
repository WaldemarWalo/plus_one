
import express from "express";
import { getCount, increment, reset } from "./db.js";

console.log("App Starting ....")

const app = express()
app.use(express.json())


app.get("/c", async (req, res) => {
    const resp = await getCount()
    const c = resp.rows[0].val
    res.send(c)
})

app.get("/i", async (req, res) => {
    const resp = await increment()
    const c = resp.rows[0].val
    res.send(c)
})

app.get("/r", async (req, res) => {
    const resp = await reset()
    const c = resp.rows[0].val
    res.send(c)
})



app.listen(3000, ()=> {
    console.log("App started !")
})