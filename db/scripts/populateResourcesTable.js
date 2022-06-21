import { query } from "../index.js";
import { resourceTable } from "../../libs/resourceTable.js";

async function populateResourceTable() {
    for (let i=0; i< resourceTable.length; i++)  {
        const res = await query(
            `INSERT INTO resourceTable (topic, video_link, docs_link, description)
            VALUES ($1, $2, $3, $4);`,
            [resourceTable[i].topic, resourceTable[i].video_link, resourceTable[i].docs_link, resourceTable[i].description]
       );
       console.log(`populate with ${resourceTable[i].topic}`);
    
    }
    }

populateResourceTable();