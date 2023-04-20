

function timeduration(time){
    if(time>=00&&time<12){
        console.log("good morning")
    }else if(time>=12&&time<17){
        console.log("good afternoon")
    }else if(time>=17&&time<21){
        console.log("good evening")
    }else if(time>=21&&time<=23){
        console.log("good night")
    }else{
        console.log("enter time in right formate");
    }
}timeduration(21)