import express from 'express';
import resources from '../libs/resources.js';
const resourcesRoute = express.Router();

resourcesRoute.get('/', function (req, res){
    const resourcesObject = {
    success: Boolean, 
    payload: resources
};

res.json(resourcesObject);
})


export default resourcesRoute;






