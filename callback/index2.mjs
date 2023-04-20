import promptsync from "prompt-sync";
var prompt=promptsync();
function breadToast(callback){
    let mood=prompt("give score about your mood:");
    setTimeout(() => {
        if(mood>=5){
            callback("bread is ready");
        }else{
            callback("mood is not good")
        }
    }, 3000);
}
function makeFryEgg(cb){
    let mood=prompt("give score about your mood:");
    setTimeout(() => {
        if(mood>=5){
            cb("egg is ready");
        }else{
            cb("mood is not good")
        }
    }, 3000);
}
breadToast((arg)=>{
    console.log(arg)
    makeFryEgg((arg1)=>{
        console.log(arg1)
    })
})
