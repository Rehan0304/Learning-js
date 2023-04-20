const array=[];
for (let i = 0; i < 10; i++){
    let value1=i*5;
    let value2=i*i;
    let a=calculator(value1,value2);
    array.push(a);
    console.log(a);
} 


function calculator(x,y){
    return x+y;
}