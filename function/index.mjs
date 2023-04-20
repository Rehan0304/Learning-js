// function addTwo(a,b) {
//     let c =a+b;
//     console.log(c);
// };
// addTwo(2,4);
// addTwo(5,7);

// game
import PromptSync from "prompt-sync";
const prompt=PromptSync();
const discriptiveWords=["ugly","smart","clever","happy"];
function userName(){
const input=prompt("enter your name");
const random=Math.floor(Math.random()*discriptiveWords.length);
const discriptive=discriptiveWords[random];
console.log(`${input},you are ${discriptive} `);
}
console.log(userName());
