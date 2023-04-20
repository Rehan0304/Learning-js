const promse= new Promise((resolve,reject)=>{
    resolve("start counting");
})
.then(value=>{
    console.log(value)
    return "one"
})
.then(value=>{
    console.log(value)
    return "two"
})
.then(value=>{
    console.log(value)
    return "three"
})
.then(value=>{
    console.log(value);
})