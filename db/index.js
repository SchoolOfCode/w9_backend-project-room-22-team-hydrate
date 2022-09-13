import pg from "pg";

// This links our heroku databse to our code in the script folder

const pool = new pg.Pool({
  /*user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,*/
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) { 
  return pool.query(text, params, callback);
}

