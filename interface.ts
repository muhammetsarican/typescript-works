interface IStudent{
    id:number;
    name:string;
    schoolNumber:number;
}

function Save(student:IStudent):void{
    console.log(`The student named as ${student.name} saved.`);
}

Save({id:21312213, name:"Aslan", schoolNumber:710512});

interface IPersonService{
    Save();
}

class CustomerService implements IPersonService{
    Save():void {
        console.log("Save method in CustomerService class.")
    }
}

let customer = new CustomerService();
customer.Save();