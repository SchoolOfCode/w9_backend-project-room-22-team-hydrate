import express from 'express';
<<<<<<< HEAD
//import resources from '../libs/resources.js';
import { getResources, getCSSResources} from '../models/resources.js';
=======
import { getTopicResources } from '../models/resources.js';
>>>>>>> 9da7e113fab117d0719fcd0ab4dcb76ee9d81541
const resourcesRoute = express.Router();

// this is for the / e.g. /html which will show the specific topic pages
resourcesRoute.get("/:id", async function(req, res) {
    const resourcesID = req.params.id;
    console.log(resourcesID)
    let resources = await getTopicResources(resourcesID)
                        
            const resourcesIdObject = {
            success: true,
            payload: resources,
        }

        res.json(resourcesIdObject);  
    })



export default resourcesRoute;






