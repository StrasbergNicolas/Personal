export class Usuario{
    _id?: string;
    mail:string;
    password:string;
    rol?: string;


    constructor(mail: string, password: string, rol: string) {
        this.mail = mail;
        this.password = password;
        this.rol = rol;
    }
}