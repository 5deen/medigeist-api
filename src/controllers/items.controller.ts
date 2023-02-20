import express from 'express';

// This is just a placeholder class. Please customize!
// See TemplatesController for a working example

class ItemsController {

    async list(req: express.Request, res: express.Response) {
        res.status(200).send("list");
    }

    async getById(req: express.Request, res: express.Response) {
        res.status(200).send("getById");
    }

    async create(req: express.Request, res: express.Response) {
        res.status(200).send("create");
    }

    async patch(req: express.Request, res: express.Response) {
        res.status(200).send("patch");
    }

    async put(req: express.Request, res: express.Response) {
        res.status(200).send("put");
    }

    async remove(req: express.Request, res: express.Response) {
        res.status(200).send("remove");
    }

}

export default new ItemsController;