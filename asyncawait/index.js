let counter=0;
function func(value){
    return new Promise(resolve=>{
        setTimeout(() => {
        counter++;
        resolve(`counter ${counter} value: ${value}`)
        }, 1000);
    
    })
}
async function func1(value){
    console.log(`counter ${counter} value: ${value}`);
    const value1=await func(value);
    console.log(value1);
}
for (let index = 1; index < 4; index++) {
    func1(index);
    
}