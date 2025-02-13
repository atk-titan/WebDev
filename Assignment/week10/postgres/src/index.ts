import { Client } from "pg";
require("dotenv").config();

const client = new Client({
    connectionString: process.env.POSTGRES
});

client.connect()
    .then(() => console.log("connection done"));

async function createTable() {
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );    
    `);

    console.log("created"+result);
}

async function insertData(){
    const input = `INSERT INTO users (username,email,password) VALUES ('gaurav','gm@gmail.com','dingdongding')`
    const result = await client.query(input);

    console.log("inserted"+result);
}

// createTable();
insertData();