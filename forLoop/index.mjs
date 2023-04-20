let myWork=[];
for (let i = 1; i < 11; i++) {
    let status=i%2? true:false;
    let temporory={
        name:`lesson ${i}`,
        status:status,
    }
    myWork.push(temporory);
}
console.log(myWork);