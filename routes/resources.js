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

resourcesRoute.get("/:id", function(req, res) {
    const resourcesID = req.params.id;
    let searchResult = [];

     for(var i = 0; i < resourcesRoute.length; i++){
            if(resourcesID == resources[i].id){
                searchResult = resources[i];
                break;
            }
        }

                              
            const resourcesIdObject = {
            success: true,
            payload: searchResult,
        }

        res.json(resourcesIdObject);  
    })



export default resourcesRoute;






