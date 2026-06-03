fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>  { 
    
    if (!res.ok){
    throw new Error("Not okay");
    } return res.json();})
    
.then(data=>{document.getElementById('p').innerHTML=data.name}).catch(error =>{console.warn(error)}


);



async function getUser(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com')

        if(!res.ok){
            throw new Error('Not ok')
        }
        const data = await res.json();
        console.log(document.getElementById ('p').innerHTML= data[6].company)
    } catch (error) {
        console.log(error)
    }
}

getUser();


function myFunction(){
    document.getElementById('demo').innerHTML="Paragraph change.";
}
function readFile(){
    document.getElementById('read').innerHTML='I am not sure this will work'
}
function powerSwitchOn(){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'
}
function powerSwitchOff(){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'
}

function changeColor(){
    document.getElementById('changeColor').style.color="red"
}
function changeText(){
    document.getElementById('changeText').style.fontSize="45px"
}

function changeTextDeff(){
    document.getElementById('changeText').innerHTML='My name is simon azike and I am now learning Javascript after a long year'
}

function domObject(){
    document.getElementById('changeText').innerHTML=Date()
}

let num = 4;
let num2 = 5;
let total= num + num2;
let increase =total;

function sumFigure(){
    increase +=1;
document.getElementById('sum').innerHTML=increase;
}