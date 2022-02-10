import {IUser} from "./interface/starlink.interface";

const user: IUser = {name:'Alex', age:22, gender:'qwe'}



function sum(a:number,b:number){
    return a+b;
}
function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number){
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3);
console.log(incAge(user, 2));
