// Start server
import express from 'express';
import server from './server.json';
import { CommonRoutesConfig, TemplatesRoutes, ItemsRoutes } from './routes';

// const port: number = config.port;
const runningMessage: string = `Server running at ${server.host}:${server.port}`;

const app: express.Application = express();
app.use(express.json());

const routes: Array<CommonRoutesConfig> = [
  new TemplatesRoutes(app),
  new ItemsRoutes(app)

];

// Setup directory for static files (html, css, etc.)
app.use(express.static(server.dir));

// Root endpoint of server displays a static website
app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(server.file);
});

app.post('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

app.listen(server.port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});