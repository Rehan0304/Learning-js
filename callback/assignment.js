// call back function
// start making breakfast
// omelette ready in 5 sec
function omelette(callback){
    setTimeout(() => {
       callback("omelete is ready");
    }, 5000);return 
}
// paratha ready in 3 second
function paratha(callback1){
    setTimeout(() => {
        callback1("paratha is ready");
    }, 3000);
}
// coffe ready in 1 sec
function coffe(callback2,){
    setTimeout(() => {
        callback2("coffe is ready");        
    }, 1000);
}
omelette((arg)=>{
    console.log(arg);
    paratha((arg1)=>{
        console.log(arg1);
        coffe((arg2)=>{
            console.log(arg2);
        })
    })
})
