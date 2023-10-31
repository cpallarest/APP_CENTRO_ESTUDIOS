export class Disk{
    #name: string;
    #type: string;
    constructor(name:string, type:string){
        this.#name = name;
        this.#type = type;
    }
    get name(){
        return this.#name
    }

    set name(name:string){
        this.#name =name ;
    }

    get type(){
        return this.#type
    }

    set type(type: string){
        this.#type = type;
    }

   
} 