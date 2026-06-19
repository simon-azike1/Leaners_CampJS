let num = 4;
let num2 = 5;
let total= num + num2;
let increase =total;

function sumFigure(){
    increase +=1;
document.getElementById('sum').innerHTML=increase;
}


let number;

firstName = 34;
number=3*3+17;

number = 34 + firstName;

const fname="simon";

function profileMe(){
    document.getElementById('profile').innerHTML="His name is" + " " +  
    fname + " " + "and he is " + number + " " +  "years old";
}

function expressionsAndOperators(){
    document.getElementById('cal').innerHTML= 
    "The total would be" + " : " + 23*(44+23);
}




let a, b , c , d;

a;
b;
 c=78;

 d = a+b+c;
console.log(d);

//addition function for numbers
function sum(number){
   a + b;
   return number;
}
console.log(sum(949+645));

//you can not reassign a decleared vairable

//this is a multi-line comment
/*
going by the law and the syntax that governs programming
 the right time to start anything is now.
*/

let carName = "Tesla";
c = 4;
a = 6 ;
r = 4; 
n = c+a+r;
carName+n
nameCar= carName + "" + ":"+ n;
console.log(nameCar);

// Block scope 

// {
//     let name = "simon";
// }
 //console.log(name) //this will not return an  output its outside the scope.


//Function scope
function profile(){
    let name = "simon";
    expre = console.log("My name is " + "" + name);
    document.getElementById("profile2").inner.HTML=expre;
    
}



//this will not reture an output it outside the function scope

let age = 18
let hasId = false;

if( age >= 18 && !hasId ){
console.log("You may enter the club");
}



let isRaining = false;
isRaining ? console.log("it is raining") : console.log("it is not raining");


//Tinary operator
let loggedIn=true;
let hasMembership=true;

  let str =  loggedIn && hasMembership ? "show video" : "don't show video";
  console.log(str);

  
  //LOOPS
  //DRY RULE..DON'T REPEAT YOURSELF 
  //while loop , for loop
  
  
  let counter = 0;
while(counter <= 19 ){
    counter = counter + 1 ;
    console.log(counter);
}

//FOR loop
  for(let i = 0; i < 51 ; i++ ){
    console.log(i);
  }
  console.log("while and for loop finished running");


  for(let i = 1; i <= 15 ; i++){

    if( i%5 === 0 ){
        console.log("ASAP Frontend");
    
    } else if(i%2 === 0){
        console.log("Frontend");
      }

    else{
        console.log("ASAP");
      }
  }
  console.log("end of loop");



let alpha = "ASAP Frontend";

for(let i = 0; i < alpha.length; i++){
    console.log(alpha[i]);
}

//FUNCTIONS DECLEARATION
function greetUser(name, time){
    console.log(`Hello, ${name}, ${time}`);
    // console.log(name)
}
// cALL the FUction
greetUser("james","good morning.");

function main(){
    return "ASAP frontend";
    // console.log("Hell world");
}
console.log(main())


function addUp(){

    for(let i =1; i < 15; i++){
        console.log(i)
    }
}
console.log(addUp());

function readMe(){
    document.getElementById('check').textContent="Yes please, and I hope I am learning this correctly this time!!";
}
//Currency Converter(Regular function)
function convertUSDToAUD(USD){
    let AUD = USD*1.5;
    for(let i =0; i < 1000; ++i){
        return AUD;
    }

    return AUD;
}
console.log(convertUSDToAUD(1000));
console.log(convertUSDToAUD(500));
console.log(convertUSDToAUD(200));

//Arrow Function
const convertCurrency = (usd)=> {
let aud= usd*1.2
return aud;
}
console.log(convertCurrency(1500));


//ARRAYS and //Array methods
///////////////////////////////////////////////////////
//EXERCISE ONE

let array=["Apple","Banana","Eggs","Milk"];
console.log([array.length-1]);
array.push("bread");

/////////////////////////////////////////////
//EXERCISE TWO

let numberArray = [1,2,3,4];
let checkArray = numberArray.filter((element)=>{
if(element > 1){
    console.log(element);
}else{
    console.log("No number found")
}
})
console.log(checkArray);

////////////////////////////////////////////

//EXERCISE THREE
//AUD= USD*1.5;

let usDollar = [10,20,30,40];
let auArray = [];
for(let i=0; i < usDollar.length; i++){
    
    let newDollar = (usDollar[i]*1.5);
    auArray.push(newDollar)
  }  console.log(auArray);
