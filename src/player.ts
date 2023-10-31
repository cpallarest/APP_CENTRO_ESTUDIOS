import { IReadableDevice } from "./iReadableDevice.js"
export class Player{
    play(device: IReadableDevice){
        console.log(device.read("archivo"));
    }
}