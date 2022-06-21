import express from 'express';
//import resources from '../libs/resources.js';
const resourcesRoute = express.Router();

import {
    getResources,
    getCSSResources
} from "../models/resources.js";



//GET all resources
resourcesRoute.get('/', async function (req, res){
    const result = await getResources()
    const resourcesObject = {
    success: true, 
    payload: result
};

res.json(resourcesObject);
})

//GET CSS resources
resourcesRoute.get('/CSS', async function (req, res){
    const result = await getCSSResources()
    const resourcesObject = {
    success: Boolean, 
    payload: result
};

res.json(resourcesObject);
})


export default resourcesRoute;


// resourcesRoute.get('/', function (req, res){
//     const resourcesObject = {
//     success: Boolean, 
//     payload: resources
// };

// res.json(resourcesObject);
// })




