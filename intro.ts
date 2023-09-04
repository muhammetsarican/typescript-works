function printName(name: string) {
    return `Hello ${name}, Welcome!`;
}

console.log(printName("Muhammet"));

let number: number = 10;
number = 0.3;
number = -1;

let city: string;
city = "Ankara";
city = "Burdur";

let isTrue: boolean;
isTrue = true;
isTrue = false;

let array:number[];

array=[1, 2, 4, 21];
array=[1.2, 54, -12, 0]

let array2:Array<string>;

array2=["Muhammet", "Sarıcan"];

let array3:[number, string];
array3=[1, "Kastamonu"];

enum Color{Red=1, Blue, Black};
let color=Color.Red

let value:any = "Ankara"
value=2
value=false

let value2 : void = undefined

function hiFive():void{
    console.log("Hello")
}
class Person{
    name:any;
    Person(name:string) {
        this.name=name;
    }
}