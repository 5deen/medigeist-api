// Start server
/* import express from 'express';
import server from './server.json';

// const port: number = config.port;
const runningMessage: string = `Server running at ${server.host}:${server.port}`;

const app: express.Application = express();
app.use(express.json());

// Setup directory for static files (html, css, etc.)
app.use(express.static(server.dir));

// Root endpoint of server displays a static website
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(server.file);
});

app.post('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});


app.listen(server.port, () => console.log(runningMessage)) */

// Start server
import express from 'express';
// import { AllRoutes } from './routes/index'

export class ExpressServer {

    private app: express.Application;
    private server: any;
    private routes: any;

    constructor(config: any, routes: any) {
        this.app = express();
        this.server = config;
        this.routes = routes;
    }
    public run() {
        // Set json parser
        this.app.use(express.json());

        // Setup directory for static files (html, css, etc.)
        this.app.use(express.static(this.server.dir));

        // Setup all routess
        new this.routes(this.app).init();
        this.app.listen(this.server.port);
    }
}