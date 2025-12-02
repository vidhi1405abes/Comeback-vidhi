"use strict"// by default sab kuch js k new version ki tarah hi treat hoga
let name="Vidhi"
let age=20
let state;
console.log(typeof name);
console.log(typeof age);
console.log(typeof state);
console.log(typeof null);//iska answer object aayega 
//basic datatypes 
/*
number=>range 2 raise to the power 53
string
boolean
bigint for storing larger numbers
undefinesd
object

*/

/*
primitive datatypes:Number,String,Boolean,BigInt,Symbol,undefined,null
all of these are call by value
non-primitive datatypes:array,objects,functions
all of these are call by reference

since we here don't need to tell the type of the variable while declaring it
*/
const bigNumber=1323433445421143234n;//here n shows that the number is bigint
console.log(typeof bigNumber);
//null ka typeof karne p object aata hai
//saare non-primitive ka typeof object hi aata hai



//symbol
//it always gives unique value even if the description is same
let value1=Symbol("if");
let value2=Symbol("if")
console.log(value1==value2);
console.log(value1);
console.log(value2);

 

