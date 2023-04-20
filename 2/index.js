let myCAr={
    brandName:"Honda",
    carName:"civic",
    model: 2022,
    color: "Red",
    goodCondition:true,
    running:"200Km",
}
let color=["blue","yellow"];
let update=myCAr.color=color;
console.log(update);
myCAr.forSale="yes";
console.log(myCAr);
console.log( "Brand name: "+ myCAr.brandName + "\n car name: " + myCAr.carName + "\n for sale: " + myCAr.forSale);
