let people= {
    friends:[]
}
let varA={
    firstNAme:"Muhammad",
    lastName:"Umair",
    ID:11122
}
let varB={
    firstNAme:"Ali",
    lastName:"Hassan",
    ID:11123
}
let varC={
    firstNAme:"Hassan",
    lastName:"Shahid",
    ID:11124
}
let array=people.friends.push(varA,varB,varC);
console.log(array);
console.log(people);
console.log(people.friends[0].ID);
console.log(people.friends[2].lastName);