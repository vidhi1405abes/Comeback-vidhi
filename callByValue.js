/* 
primitive datatypes like number,boolean,bigInt,string,null,undefined are also known as call by value datatypes 
call by value ka simple matlab y hota hai ki m jab bhi inn variables ko function m pass karungi ya inko kisi aur variable ko assign karungi toh inki copy assign hogi
and the changes made in the copy will not reflect in the original ones
*/
let a=10;
let b=a;
b++
console.log(a);
console.log(b);
//primitive datatypes are given in memory in stack this is the reason why we get a copy of variable in stack

