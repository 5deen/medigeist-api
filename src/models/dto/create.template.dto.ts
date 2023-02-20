// Data transfer objects (DTOs)
export interface CreateTemplateDto {
    id:string;
    name: string;
    attributes?: object;
    children?: any[]
}