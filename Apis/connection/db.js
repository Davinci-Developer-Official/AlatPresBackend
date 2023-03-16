const {Pool} = require('pg')
const pool = new Pool({
    user:'alatpres',
    host:'localhost',
    database:'OfficialDB',
    password:'alatpres',
    port:5432,
});

module.exports= {pool};