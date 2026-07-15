const accountId = 144553;
let accountEmail = "santoshpant@gmail.com";
var accountPassword = "12345";
accountCity = "Pithoragarh";
let accountState;

//accountId = 2;
console.log(accountId);
accountEmail = "sp@sp.com";
accountPassword= "21212121";
accountCity= "Bengaluru";

/*
Prefer not to use var because of issues in block and functional scopes
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);