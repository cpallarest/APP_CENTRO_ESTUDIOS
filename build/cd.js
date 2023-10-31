var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cd_size;
import { OpticalDisk } from "./opticalDisk.js";
export class Cd extends OpticalDisk {
    constructor() {
        super(...arguments);
        _Cd_size.set(this, 0.7);
    }
    get size() {
        return __classPrivateFieldGet(this, _Cd_size, "f");
    }
    spin() {
        console.log("El CD está girando");
    }
    ;
    write(data) {
        console.log("escribiendo datos en el CD...");
    }
    ;
    read(filename) {
        return "Datos leídos en el CD";
    }
    ;
    delete(filename) {
        console.log(`He borrado el archivo ${filename}`);
    }
    ;
    toString() {
        return `CD.\nName: ${this.name}.\nSize: ${__classPrivateFieldGet(this, _Cd_size, "f")}.\n Type: ${this.type}.`;
    }
}
_Cd_size = new WeakMap();
