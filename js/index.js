// Iteration 1: Names and Input
// 
var hacker1="Chun"
console.log(`the drive's name is ${hacker1}`);
var hacker2="Henri-Pierre"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function longestName(driver,conductor){
    if(driver.length > conductor.length){
        console.log(`The driver has the longest name, it has ${driver.length} characters.`)
    }else if(driver.length < conductor.length){
        console.log(`It seems that the navigator has the longest name, it has ${conductor.length} characters`)
    }else{
        console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
    }
}

longestName(hacker1, hacker2);
// Iteration 3: Loops

let uppercasedName = hacker1.toUpperCase()

function nameSplit(name){
    let array=[];
    for(let i = 0; i < name.length; i++){
        array.push(name[i]);
    }
    console.log(array.join(" "))
}
nameSplit(uppercasedName)

function reverseName(name){
    let array=[];
    for(let i = 0; i < name.length; i++){
        array.unshift(name[i]);
    }
    console.log(array.join(''))
}
reverseName(hacker1)

function lexicographic(driver,navigator){
   if( driver.charCodeAt(0) > navigator.charCodeAt(0) ){
       console.log("The driver's name goes first.")
   }else if( driver.charCodeAt(0) < navigator.charCodeAt(0)){
       console.log("Yo, the navigator goes first definitely.")
   }else{ 
       console.log("What?! You both have the same name")
   }
}

lexicographic(hacker1,hacker2)