import express from 'express';
import Service from '../services/templates.service';

class TemplatesController {

    async list(req: express.Request, res: express.Response) {
        const services = await Service.list(100, 0);
        res.status(200).send(services);
    }

    async getById(req: express.Request, res: express.Response) {
        const service = await Service.readById(req.body.id);
        res.status(200).send(service);
    }

    async create(req: express.Request, res: express.Response) {
        const Id = await Service.create(req.body);
        res.status(201).send({ id: Id });
    }

    async patch(req: express.Request, res: express.Response) {
        await Service.patchById(req.body.id, req.body)
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        await Service.putById(req.body.id, req.body)
        res.status(204).send();
    }

    async remove(req: express.Request, res: express.Response) {
        await Service.deleteById(req.body.id);
        res.status(204).send();
    }

}

export default new TemplatesController();