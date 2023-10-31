import { Disk } from "./disk.js";
import { IReadableDevice } from "./iReadableDevice.js";
import { IRotatingDevice } from "./iRotatingDevice.js";

export class Vinyl extends Disk implements IRotatingDevice, IReadableDevice{
   
    spin(): void {
        console.log("El vinilo está girando");
    }
    read(filename: string): string {
        return 'leyendo el vinilo';
    }
}