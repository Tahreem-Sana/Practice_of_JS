//To calculate a factorial of a number by using loop.

let a = prompt("Enter a number to calculate its factorial:");

let factorial = 1;
let i = 1;

while(i <= a)
{
    factorial *= i;
    i++;
}
alert("The factorial of " + a + " is " + factorial);