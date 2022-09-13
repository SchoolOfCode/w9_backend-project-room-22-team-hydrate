import topic from "../libs/resources.js";
//import pool from "../db/index.js";
import {query} from "../db/index.js";


//GET ALL TOPIC RESOURCES
export async function getTopicResources(topic) {
    console.log('deploy')

// GET ALL RESOURCES
export async function getResources() {
    const result = await query(`SELECT * FROM resources`);
    return result.rows;
};

//GET ALL CSS RESOURCES
export async function getCSSResources(topic) {
    const result = await query(`SELECT * FROM resources WHERE topic=$1;`,[topic]);
    //const result = await query(`SELECT * FROM resources`);
    console.log(result)
    return result.rows;
};



