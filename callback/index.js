function greet(fullName){
console.log(`hello ${fullName[0]} ${fullName[1]}`);
}
function mainfunction(userName,callback){
  const name =  userName.split(" ")
  callback(name);
}
mainfunction("muhammad rehan",greet);