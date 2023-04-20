import PromptSync from "prompt-sync";
const prompt=PromptSync();
const value1=Number(prompt("enter first value"));
const value2=Number(prompt("enter second value"));
const operator=prompt("enter operotor,+ or -");
function calculator(a,b,c){
    if(!c){
        return a+b;
    }else if(c==="+"){
        return a+b;
    }else if(c=== "-"){
        return a-b;
    }else{
        return "please enter"
    }    
}
console.log(calculator(value1,value2,operator));