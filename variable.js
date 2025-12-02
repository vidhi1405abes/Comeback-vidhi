const accountId=1111
let accountName="Babli Baliyan"
var accountType="common"
// accountId=1234
console.log(accountId)
{
    var accountType="private"

}
/*
var do not understand scope like we here changed the value of the var variable inside the scope but it instead of creating a new variable it changed the existing one
here no new variable is created 
*/
{
    let accountName="Vidhan"
}
//here the new variable is created
console.log(accountName);
console.table([accountId,accountName,accountType])