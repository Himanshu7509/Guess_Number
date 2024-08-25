let ItNum = document.getElementById("userInput");
let Msg = document.getElementById("message");
let randomNum;
let attemptCount = 0; 
function resetAll(){
    randomNum = Math.ceil(Math.random()*100);
    console.log(randomNum);
    attemptCount = 0; 
}

resetAll();

function checkAns(){
    
    let inputNum = parseInt(ItNum.value);
    attemptCount++; 
    
    if(inputNum === randomNum){
        Msg.textContent = `Correct! You guessed it in ${attemptCount} attempts!`;
        resetAll();
    }

    else{
        if(inputNum > randomNum){
            Msg.textContent = "Too high! Try again.";
        }
        else
        {
            Msg.textContent = "Too low! Try again.";
        }
    }

}
