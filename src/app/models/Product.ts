export class Product{
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
    description: string;

    constructor(){
        this.id = 1;
        this.name= '';
        this.img= '';
        this.price= 1;
        this.quantity= 1;
        this.description= '';
    }
}