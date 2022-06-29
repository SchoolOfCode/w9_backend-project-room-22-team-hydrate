import express from 'express';
import { getTopicResources } from '../models/resources.js';
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






