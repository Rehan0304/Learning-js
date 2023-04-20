const array=[
    {
        id:1,
        description :"task1",
    },
    {
        id:2,
        description :"task2",
    },
    {
        id:3,
        description :"task3",
    }
];
array.forEach((item)=>{
    console.log(item.id)
    console.log(item.description)
})
function deleteitem(id){
    const index=array.findIndex(item=> item.id===id);
    array.splice(index,1);
}    
deleteitem(2)

console.log(array);