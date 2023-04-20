function recursive(a){
    console.log(a);
    if(a===0){
        return 1;
    }else{
        return a*recursive(a-1);
    }
}console.log(recursive(20));
