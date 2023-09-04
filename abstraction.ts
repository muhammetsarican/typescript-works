abstract class CreditBase{
    protected name:string;
    constructor(name){
        this.name=name;
    }
    save():void{
        console.log(`Dear ${this.name}, your credit saved.`);
    }
    abstract calculate():void;
}

class ConsumerCredit extends CreditBase{
    constructor(parameters:string){
        super(parameters);
    }
    calculate(): void {
        console.log("Calculated as Consumer Credit.");
    }
}

class MortgageCredit extends CreditBase{
    constructor(parameters:string){
        super(parameters);
    }
    calculate(): void {
        console.log("Calculated as Mortgage Credit.");
    }
}

let mortgage=new MortgageCredit("Yaşar");
let customer=new ConsumerCredit("Hasan");
mortgage.save()
customer.save()

let mortgageCredit:CreditBase;
let customerCredit:CreditBase;
mortgageCredit=new MortgageCredit("Mevlüt");
customerCredit=new ConsumerCredit("Rahmi");

mortgageCredit.calculate();
customerCredit.calculate();