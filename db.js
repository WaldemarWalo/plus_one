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

async function geCount() {
    const res = await client.query("select * from pg_database;")
    const dbnames = res.rows.map(r => ({ oid: r.oid, datname: r.datname }));
    return dbnames
}

export default listDBs