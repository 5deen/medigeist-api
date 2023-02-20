import express from 'express';


class TemplatesMiddleware {

    async validate(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.name) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required field: name`
            });
        }
    }

    async extractId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.templateId;
        next();
    }

}

export default new TemplatesMiddleware();