var x = 15;

if(x > 12) {
    console.log(x);
    console.log('groovin with if');
}
else {
    console.log('too small');
}

// 1. Initialize
// 2. Condition
// 3. Post Loop Action
for(var i = 0; i < x; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
    
}

function sayHello(){
    console.log('hi');
}

if(x % 2 === 0) {
    sayHello();
}

//eslint-disable-next-line
function evenOrOdd(){
    var input = document.getElementById('number');

    var y = input.value;

    if(y % 2 === 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}