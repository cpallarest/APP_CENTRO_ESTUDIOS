import { OpticalDisk } from "./opticalDisk.js";
import { IRotatingDevice } from "./iRotatingDevice.js";
import { IReadableDevice } from "./iReadableDevice.js";
import { IWritableDevice } from "./iWritableDevice.js";
import { IPrintable } from "./iPrintable.js";
export class Dvd extends OpticalDisk implements IRotatingDevice, IReadableDevice, IWritableDevice, IPrintable{
    #size: number = 4.7;
    get size(){
        return this.#size;
    }
    spin(){
        console.log("El DVD está girando");
    };
    write(data: string){
        console.log("escribiendo datos en el DVD...");
    };
    read(filename: string):string{
        return "Datos leídos en el DVD";
    };
    delete(filename: string):void{
        console.log(`He borrado el archivo ${filename}`);
    };
    toString(): string {
        return `DVD.\nName: ${this.name}.\nSize: ${this.#size}.\nType: ${this.type}.`
    }
}