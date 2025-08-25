import { Client } from "pg"

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'mydb'
});

console.log("Connecting to DB")
await client.connect()
console.log("Connected")


async function listDBs() {
    const res = await client.query("select * from pg_database;")
    const dbnames = res.rows.map(r => ({ oid: r.oid, datname: r.datname }));
    return dbnames
}

async function getCount() {
    const res = await client.query("SELECT val FROM counter;")
    return res
}

async function increment() {
    const res = await client.query("UPDATE counter SET val = val + 1 WHERE id = 1 RETURNING val;")
    return res
}

async function reset() {
    const res = await client.query("UPDATE counter SET val = 0 WHERE id = 1 RETURNING val;")
    return res
}

export { getCount, increment, reset }
