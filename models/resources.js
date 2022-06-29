import {query} from "../db/index.js";

//GET ALL TOPIC RESOURCES
export async function getTopicResources(topic) {
    const result = await query(`SELECT * FROM resources WHERE topic=$1;`,[topic]);
    return result.rows;
};
