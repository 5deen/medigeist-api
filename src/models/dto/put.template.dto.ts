// Data transfer objects (DTOs)
export interface PutTemplateDto {
    id:string;
    name: string;
    attributes: object;
    children: any[]
}