import { Client } from "pg"

const client = new Client({
    host: '172.18.0.2',
    port: 5432,
    user: 'postgres',
    password: 'pass',
    database: 'appdb'
});

console.log("Connecting to DB ...")
await client.connect()
console.log("Connected")


async function getCount() {
    const res = await client.query("SELECT val FROM counter where id=1;")
    return res.rows[0].val
}

async function increment() {
    await client.query("UPDATE counter SET val = val + 1 WHERE id = 1 RETURNING val;");
}

export { getCount, increment }
