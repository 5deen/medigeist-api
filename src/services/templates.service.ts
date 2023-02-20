import TemplatesDao from '../models/daos/templates.dao'
import { CRUD } from '../interfaces/crud.interface';
import { CreateTemplateDto } from '../models/dto/create.template.dto';
import { PatchTemplateDto } from '../models/dto/patch.template.dto';
import { PutTemplateDto } from '../models/dto/put.template.dto';

class TemplatesService implements CRUD {
    async create(resource: CreateTemplateDto) {
        return TemplatesDao.add(resource);
    }

    async deleteById(id: string) {
        return TemplatesDao.removeById(id);
    }

    async list(limit: number, page: number) {
        return TemplatesDao.get();
    }

    async patchById(id: string, resource: PatchTemplateDto): Promise<any> {
        return TemplatesDao.patchById(id, resource);
    }

    async putById(id: string, resource: PutTemplateDto): Promise<any> {
        return TemplatesDao.putById(id, resource);
    }

    async readById(id: string) {
        return TemplatesDao.getById(id);
    }

}

export default new TemplatesService();