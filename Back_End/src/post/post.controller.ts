import * as express from 'express';
import Data from './post.interface';
import fetch from 'node-fetch';
class PostController {
    public path = '/getData';
    public router = express.Router();



    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllData);
        this.router.get(this.path + '/:id', this.getData);


    }

    getAllData = (request: express.Request, response: express.Response) => {
        fetch(' https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((data: Data[]) => {
                response.send(data);
            });

    }
    getData = (request: express.Request, response: express.Response) => {
        const id = request.params.id;

        fetch(' https://jsonplaceholder.typicode.com/todos/'+id)
            .then(response => response.json())
            .then((data: Data) => {
                console.log(data);
                
                response.send(data);

            });

    }



}

export default PostController;