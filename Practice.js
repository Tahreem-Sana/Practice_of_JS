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

if(random >0.1){

    console.log(`The result is: ${a} ${c} ${b}`)
    alert(`the result is: ${eval(`${a}${c}${b}`)}`)
}

else{
    c = obj[c];
    console.log(`The result is: ${a} ${c} ${b}`)
    alert(`the result is: ${eval(`${a}${c}${b}`)}`)
    }