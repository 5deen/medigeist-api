//import { nanoid } from 'nanoid';
import { CreateTemplateDto } from '../dto/create.template.dto';
import { PatchTemplateDto } from '../dto/patch.template.dto';
import { PutTemplateDto } from '../dto/put.template.dto';

// Data access objects (DAOs)
class TemplatesDao {
    templates: Array<CreateTemplateDto> = [];

    constructor() {
        console.log('Created new instance of TemplatesDao');
    }
    async add(template: CreateTemplateDto) {
        template.id = "user_template";
        this.templates.push(template);
        return template.id;
    }
    async get() {
        return this.templates;
    }

    async getById(templateId: string) {
        return this.templates.find((template: { id: string }) => template.id === templateId);
    }
    // Update will mean either overwriting the complete object (as a PUT) or just parts of the object as a PATCH
    async putById(templateId: string, template: PutTemplateDto) {
        const objIndex = this.templates.findIndex(
            (obj: { id: string }) => obj.id === templateId
        );
        this.templates.splice(objIndex, 1, template);
        return `${template.id} updated via put`;
    }

    async patchById(templateId: string, template: PatchTemplateDto) {
        const objIndex = this.templates.findIndex(
            (obj: { id: string }) => obj.id === templateId
        );
        let currentTemplate = this.templates[objIndex];
        const allowedPatchFields = [
            'name',
            'attributes',
            'children',
        ];
        for (let field of allowedPatchFields) {
            if (field in template) {
                // @ts-ignore
                currentTemplate[field] = template[field];
            }
        }
        this.templates.splice(objIndex, 1, currentTemplate);
        return `${template.id} patched`;
    }

    async removeById(templateId: string) {
        const objIndex = this.templates.findIndex(
            (obj: { id: string }) => obj.id === templateId
        );
        this.templates.splice(objIndex, 1);
        return `${templateId} removed`;
    }
}

export default new TemplatesDao();