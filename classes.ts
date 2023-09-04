class Home{
    _roomCount:number;
    _windowCount:number;
    _floor:number;

    constructor(roomCount:number, windowCount:number, floor:number){
        this._roomCount=roomCount;
        this._windowCount=windowCount;
        this._floor=floor;
    }

    getInfo():object {
        return {
            roomCount:this._roomCount,
            windowCount:this._windowCount,
            floor:this._floor
        }
    }
}

let home=new Home(21, 12, 7);
console.log(home.getInfo())