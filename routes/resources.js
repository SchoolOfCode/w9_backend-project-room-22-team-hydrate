import express from 'express';
import resources from '../libs/resources.js';
const resourcesRoute = express.Router();

import {
    getResources,
    getCSSResources
} from "../models/resources.js";

// resourcesRoute.get('/', function (req, res){
//     const resourcesObject = {
//     success: Boolean, 
//     payload: resources
// };

// res.json(resourcesObject);
// })

//GET all resources
resourcesRoute.get('/', async function (req, res){
    const resourcesObject = {
    success: Boolean, 
    payload: await getResources()
};

res.json(resourcesObject);
})

//GET CSS resources
resourcesRoute.get('/CSS', async function (req, res){
    const resourcesObject = {
    success: Boolean, 
    payload: await getCSSResources()
};

res.json(resourcesObject);
})


export default resourcesRoute;






