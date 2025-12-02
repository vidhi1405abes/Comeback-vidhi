/*
non primitive datatypes jaise function,object,array etc ko hum call by reference kehte hai
as inki copy nhi create hoti m jab bhi inhe dusre variable ko pass karu ya function m pass karu they are passed by reference

*/
let obja={a:"vidhi"}
let objb=obja
objb.a="vidhan"
console.log(obja.a);
function Myfunc(a){
    a.push(999);
}
let b=[10,20]
Myfunc(b);
console.log(b);
//but if i reassign the array inside function then the origoinal array won't be affected and a new array will be created
function Myfunc2(a){
    a=[1111]
}
b=[1,23]
Myfunc2(b)
console.log(b);
//non-primitive datatypes are allocate din heap this is the reason why we always get a reference to the original value


