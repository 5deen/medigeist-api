// Routes for templates
import { CommonRoutesConfig } from './common.routes.config';
import TemplatesController from '../controllers/templates.controller';
import TemplatesMiddleware from '../middleware/templates.middleware';
import express from 'express';

import { Routes } from './common.routes.interfaces';
const routeId: Routes = { name: "TemplatesRoutes", route: "templates" };


export class TemplatesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, routeId.name);
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/${routeId.route}`)
            .get(TemplatesController.list)
            .post(
                TemplatesMiddleware.validate,
                TemplatesController.create
            );
        return this.app;
    }
}