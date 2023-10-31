import { Disk } from "./disk.js";
export class Vinyl extends Disk {
    spin() {
        console.log("El vinilo está girando");
    }
    read(filename) {
        return 'leyendo el vinilo';
    }
}
