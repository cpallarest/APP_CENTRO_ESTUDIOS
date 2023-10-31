import { OpticalDisk } from "./opticalDisk.js";
import { IRotatingDevice } from "./iRotatingDevice.js";
import { IReadableDevice } from "./iReadableDevice.js";
import { IWritableDevice } from "./iWritableDevice.js";
import { IPrintable } from "./iPrintable.js";
export class Cd extends OpticalDisk implements IRotatingDevice, IReadableDevice, IWritableDevice, IPrintable{
    #size: number = 0.7;
    get size(){
        return this.#size;
    }
    spin(){
        console.log("El CD está girando");
    };
    write(data: string){
        console.log("escribiendo datos en el CD...");
    };
    read(filename: string):string{
        return "Datos leídos en el CD";
    };
    delete(filename: string):void{
        console.log(`He borrado el archivo ${filename}`);
    };
    toString(): string {
        return `CD.\nName: ${this.name}.\nSize: ${this.#size}.\n Type: ${this.type}.`
    }
}