export class Todo{
    private _nazwa:string;
    private _opis:string;
    private _zrobione:boolean;
    private _priorytet:number;
    public constructor (nazwa:string, opis:string, priorytet :number){
        this._nazwa = nazwa;
        this._opis = opis;
        this._priorytet = priorytet;
        this._zrobione = false;
    }
    public get nazwa(){
        return this._nazwa;
    }
    public get opis(){
        return this._opis;
    }
    public get zrobione(){
        return this._zrobione;
    }
    public get priorytet(){
        return this._priorytet;
    }
}