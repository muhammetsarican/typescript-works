function Name<T>(name:T):T{
    return name;
}

let personOne=Name("Muhammet");
let personTwo=Name(23);

class GenericClass<T>{
    parameter:T;
    Num(parameter:T):T {
        return parameter
    }
}

let classRoom=new GenericClass<string>();
console.log(classRoom.Num("A class"));

let personId=new GenericClass<number>();
console.log(personId.Num(213));