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
    console.log(array.join(" "));
}
nameSplit(uppercasedName);

function reverseName(name){
    let array=[];
    for(let i = 0; i < name.length; i++){
        array.unshift(name[i]);
    }
    console.log(array.join(''));
}
reverseName(hacker1);

function lexicographic(driver,navigator){

    for(let i = 0; i < driver.length; i++){
        for(let j = 0; j < navigator.length; j++){
            if( driver.charCodeAt(i) > navigator.charCodeAt(j) ){
               return "The driver's name goes first.";
            }else if( driver.charCodeAt(i) < navigator.charCodeAt(j)){
                return "Yo, the navigator goes first definitely.";
            }else{ 
                return "What?! You both have the same name";
            };
        };
    };
};

console.log(lexicographic(hacker1,hacker2));


/*BONUS 1*/ 
let paragraph = "Mauris ultrices eu est nec cursus. Praesent imperdiet risus vehicula nunc laoreet aliquet. Phasellus suscipit, metus a bibendum feugiat, urna eros rhoncus leo, vel condimentum metus dui eu justo. Fusce quis massa diam. Sed vel mi nisl. Phasellus vestibulum dignissim odio vitae rutrum. Maecenas placerat velit quis molestie auctor.Vestibulum varius molestie lorem vel aliquam. Cras tellus metus, efficitur a tincidunt et, sodales non velit. Integer eu quam pulvinar, sagittis ex ac, rhoncus ligula. Sed fringilla neque at lectus volutpat eleifend. Integer luctus iaculis elit, sit amet convallis dolor ornare nec. Nulla eget ligula quis nunc laoreet aliquam. Nulla facilisi. Donec ac nisi turpis. Integer lobortis nulla ac imperdiet venenatis. Suspendisse accumsan orci tempus scelerisque molestie.Quisque et pulvinar lacus. Donec sagittis vulputate urna id ornare. Duis tempor maximus diam, eu malesuada justo bibendum sit amet. In non leo sed lacus elementum elementum. Pellentesque in dolor a nibh lacinia rhoncus. Fusce venenatis et urna sit amet semper. Nulla elementum porttitor pellentesque. In hac habitasse platea dictumst."

console.log(`the paragraph has ` + paragraph.split(' ').length + ' ' + 'words');
function countEt(text){
    let arrayParagraph = paragraph.split(' ');
    let count = 0;
    for(let i = 0; i <arrayParagraph.length; i++){
        if(arrayParagraph[i].includes("et")){
            count++
        }
    }
    return `there are ${count} words wich contain "et"`;
}

console.log(countEt(paragraph))

/*BONUS 2*/ 
function reverseString(name){
    let array=[];
    for(let i = 0; i < name.length; i++){
        array.unshift(name[i]);
    }
    return array.join('');
}
function palindromeCheck(sentence){
    let str = sentence.split(" ").join("")
    let sentenceReversed = reverseString(str);
    if(str === sentenceReversed){
        return 'palindrome';
    }else{
        return 'pas palindrome';
    }
}

console.log(palindromeCheck("raced car"));
