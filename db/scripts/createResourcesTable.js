import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS superLeague 
(team_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, team_name TEXT, team_color TEXT, country TEXT, inEuropeanCup TEXT);`;

async function createsuperLeagueTable() {
    const res = await query(sqlString);
    console.log(res.command, "create super league table")
}

createsuperLeagueTable();