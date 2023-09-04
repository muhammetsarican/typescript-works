// in js
function add(numberOne, numberTwo){
    return numberOne+numberTwo;
}
// in ts
function add2(numberOne:number, numberTwo:number):number{
    return numberOne+numberTwo
}

let add3=(numberOne:number, numberTwo:number):number=>numberOne+numberTwo;

console.log(add2(3, 13));
console.log(add("Ankara", 13));
console.log(add3(21, 16));
console.log(add(33, 83));

let add4=(numberOne:number, numberTwo:number=4):number=>numberOne+numberTwo;

console.log(add4(19));

let add5=(numberOne:number, numberTwo?:number):number=>{
    if (numberTwo){
        return numberOne+numberTwo
    }
    return numberOne
};

console.log(add5(12));

// Rest Parameters
function invite(firstGuest:string, ...others:string[]):string{
    return firstGuest+" "+others.join(" ");
}

console.log(invite("Ahmet", "Osman", "Belgin"));

// It can works like this
function invite2(...others:string[]):string{
    return others.join(" ");
}

console.log(invite2());