import {query} from "../db/index.js";

//GET ALL TOPIC RESOURCES
export async function getTopicResources(topic) {
    console.log('deploy')
    const result = await query(`SELECT * FROM resources WHERE topic=$1;`,[topic]);
    //const result = await query(`SELECT * FROM resources`);
    console.log(result)
    return result.rows;
};
