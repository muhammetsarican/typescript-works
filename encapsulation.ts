class Village{
    private villageName:string;
    private villageNumber:number;
    protected peopleCount:number;
    constructor(villageName, villageNumber, peopleCount){
        this.villageName=villageName;
        this.villageNumber=villageNumber;
        this.peopleCount=peopleCount;
        console.log(`${this.villageName} village created.`);
    }
    get getVillageName():string{
        return this.villageName;
    }

    get getVillageNumber():number{
        return this.villageNumber;
    }

    set setVillageNumber(villageNumber){
        console.log(`Village number is ${this.villageNumber} changed to ${villageNumber}.`)
        this.villageNumber=villageNumber;
    }
}

let village=new Village("Kuşbaba", 1, 956);
console.log(`Village name is ${village.getVillageName}`)
console.log(`Village number is ${village.getVillageNumber}`)
village.setVillageNumber=89