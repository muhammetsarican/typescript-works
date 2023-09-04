class Person{
    private name:string;
    protected age:number;
    public address:string;
    constructor(name:string, age:number, address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }
    getInfo():object{
        return {
            name:this.name,
            age:this.age,
            address:this.address
        }
    }
    get Name():string{
        return this.name;
    }
}

class Customer extends Person{
    sellItem(){
        console.log(`An item selled to ${this.address}`)
    }
}

class Personal extends Person{
    giveSalary(){
        console.log(`Salary gave to ${this.Name}`)
    }
}

let customer=new Customer("Ahmet", 23, "Istanbul");
let personal=new Personal("Ali", 24, "Ankara");

customer.sellItem();
personal.giveSalary()