import { CRUD, params } from '../interfaces';
import { createSVGDocument } from "../../build/release.js";

function generate(p:params) {
    return createSVGDocument(p.ratio,p.lib,p.text);
}

class Service implements CRUD {

    async all(limit: number, page: number) {
        return "all";
    }
    async get(id: string) {
        return id;
    }
    async post(resource: object) {
        let body: params = <params><object>resource;
        let result: string = generate(body);
        return result;
    }
    async patch(id: string, resource: string) {
        return "patch";
    }
    async put(id: string, resource: string) {
        return "put";
    }
    async delete(id: string) {
        return "delete";
    }
}

export default new Service();