export interface IWritableDevice{
    write(data: string):void;
    delete(filename:string):void;
}