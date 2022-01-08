var displayDiv = document.querySelector("#display");
var num_holder = [];
var opSet = false;

function press(num){
    num_holder.push(num);
    if(opSet === true){
        displayDiv.innerText="";
        opSet = false;
    }
    if(displayDiv.innerText !== "0"){
    displayDiv.innerText = displayDiv.innerText + num;
    } else {
        displayDiv.innerText = num;
    }
}

function clr(){
    displayDiv.innerText = 0;
    num_holder = [];
}

function setOP(op){
    num_holder.push(op);
    opSet = true;
    // console.log(op);
    // console.log(num_holder);
}

function calculate(){
    console.log(num_holder);
    var answer = "";
    for(var i = 0; i < num_holder.length; i++){
        answer += num_holder[i];
    }
    console.log(answer);
    displayDiv.innerText = eval(answer);
}