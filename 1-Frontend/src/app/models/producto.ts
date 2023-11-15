export class Producto {
    _id?: string; //el signo de pregunta es porque tranquilamente podria ser nulo el id
    name: string; //si se queja es porque no lo tengo inicializado en el constructor que es a donde le llega la data
    description: string;
    price: number;
    stock: number;

    constructor(name: string, description: string, price: number, stock: number){
        this.name = name
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}