
import express from "express";
// import { getCount, increment, reset } from "./db.js";

console.log("App Starting ....")

const app = express()
app.use(express.json())


app.get("/", async (req, res) => {
    console.log("GET /")
    res.send("OK")
})


app.listen(3000, ()=> {
    console.log("App started !")
})