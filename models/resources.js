//import pool from "../db/index.js";
import {query} from "../db/index.js";
//import resources from "../libs/resources.js";

// // GET ALL USERS
// export function getUsers() {

// }
// // GET A USER BY ID
// export function getUserByID() {}


// GET ALL RESOURCES
export async function getResources() {
    const result = query(`SELECT * FROM resources`);
    return result.rows;
};

//GET ALL CSS RESOURCES
export async function getCSSResources() {
    const result = query(`SELECT * FROM resources WHERE topic='CSS'`);
    return result.rows;
};

