let user = {
    profile:{
        name:"Furqan"
    }
}
console.log(user.profile?.name);
console.log(user.profile?.greet)//this will not throw an error rather it will return undefined because greet is not a property of profile
// Expected output: "Furqan"
// Expected output: undefined

