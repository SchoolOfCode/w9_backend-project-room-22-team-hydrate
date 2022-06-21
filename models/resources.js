import pool from "../db/index.js";


// GET ALL RESOURCES
export async function getResources() {
    const result = await pool.query(`SELECT * FROM resources`);
    return result.rows;
};

//GET ALL CSS RESOURCES
export async function getCSSResources() {
    const result = await pool.query(`SELECT * FROM resources WHERE topic='CSS'`);
    return result.rows;
};

