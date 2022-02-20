import { IProduct } from './iproduct';

export class Product implements  IProduct {
    id?: number;
    name: string;
    description?: string;

    constructor(data: IProduct) {
        this.id = data.id ? +data.id : undefined;
        this.name = data.name;
        this.description = data.description;
    }
}
