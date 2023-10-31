import { Disk } from "./disk.js";

export class OpticalDisk extends Disk {
    
    #file: BinaryData[] = [];
    

    get file(){
        return this.#file
    }

    set file(file: BinaryData[]){
        this.#file = file;
    }
   
}