// This is a faoulty calculator that sometimes gives the wrong answer. It will randomly change the operator you entered to a different one, It Gives Wrong answer 10% of the time and 90% of the time it gives the correct answer!

// And it works on console that is why I add a blank HTML file here haha
// And it works on console,
//works on console 


let random = Math.random();

let a = prompt("Enter the First number:");
let b = prompt("Enter the Second number:");
let c = prompt("Enter the operator (+, -, *, /):");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*",
    "-" : "*",
}

if(random >0.1)
{
    console.log(`The result is: ${a} ${c} ${b}`)
    alert(`the result is: ${eval(`${a}${c}${b}`)}`)
}

else
{
    c = obj[c];
    console.log(`The result is: ${a} ${c} ${b}`)
    alert(`the result is: ${eval(`${a}${c}${b}`)}`)
}
