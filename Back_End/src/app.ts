import * as express from 'express';
import * as bodyParser from 'body-parser';
 import * as cors from 'cors';
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.app.use(cors());

 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      console.log(controller);
      
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;