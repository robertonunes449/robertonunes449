import { Department } from "./Department.model";

export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    department : Department;
}