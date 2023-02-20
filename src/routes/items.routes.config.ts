// Routes for templates
import { CommonRoutesConfig } from './common.routes.config';
import ItemsController from '../controllers/items.controller';
import express from 'express';

import { Routes } from './common.routes.interfaces';
const routeId:Routes = {name:"ItemsRoutes",route:"items"};

export class ItemsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, routeId.name);
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/${routeId.route}`)
            .get(ItemsController.list)
            .post(ItemsController.create);
        return this.app;
    }
}