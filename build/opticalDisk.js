var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _OpticalDisk_file;
import { Disk } from "./disk.js";
export class OpticalDisk extends Disk {
    constructor() {
        super(...arguments);
        _OpticalDisk_file.set(this, []);
    }
    get file() {
        return __classPrivateFieldGet(this, _OpticalDisk_file, "f");
    }
    set file(file) {
        __classPrivateFieldSet(this, _OpticalDisk_file, file, "f");
    }
}
_OpticalDisk_file = new WeakMap();
