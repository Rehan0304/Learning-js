const allaowepasswors = ["rehan", "value", "alxendar", "password"];

function checkPassword(Password) {
  return allaowepasswors.includes(Password);  
}
function validity(Password) {
  return new Promise((resolve, reject) => {
    if (checkPassword(Password)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}
function Passwordchecker(Password) {
  validity(Password)
    .then((value) => {
      console.log("authorized user");
      console.log(value);
    })
    .catch((error) => {
      console.log("unothorized user");
      console.log(error);
    });
}
// Passwordchecker("passwod")
Passwordchecker("rehan");
// console.log(validity());





// // password checker
// const originalPassword="rehan"
// // let userInput;
// function checkPassword(userInput){
//     if(userInput===" "){
//       console.log("enter your password")
//     }else if(userInput===originalPassword){
//       console.log("corect password ")
//     }else{
//       console.log("oops! wrong password");
//     }
// }checkPassword("rehan")