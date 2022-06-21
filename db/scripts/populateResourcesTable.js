import {query} from "../index.js";
import {resourcesTable} from "../../libs/resrouceTable.js";

async function populateTable(){
    for(let i=0; i<resourcesTable.length; i++){
    const result = await query(
        `INSERT INTO resources(topic, video_link, docs_link, description) 
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,
        [cats[i].name, cats[i].human, cats[i].hobby]
    );
    console.log("Our table has been populated with cats!")
    console.log(result.rows[0].name)
}
}
populateTable();