let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let eraseButton = document.querySelector("#erase");
let clearButton = document.querySelector("#clear");
let evaluateButton = document.querySelector("#evaluate");
let realTimeScreenValue = [];

clearButton.addEventListener('click', () =>{
    realTimeScreenValue = [""];
    answerScreen.innerHTML = 0;
    currentInput.className="currentInput";
    answerScreen.className="answerScreen";
    answerScreen.style.color = '#fff';
});
buttons.forEach((button) =>{
    button.addEventListener('click' ,() =>{
        if(!button.id.match('erase')){
            realTimeScreenValue.push(button.value);
            currentInput.innerHTML = realTimeScreenValue.join("");
            if(button.classList.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
            }
        }

        if(button.id.match("erase")){
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join("");
            answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
        }
        if(button.id.match("evaluate")){
            currentInput.className="answerScreen";
            answerScreen.className="currentInput";
            answerScreen.style.color= '#fff';
        }
        if(typeof eval(realTimeScreenValue.join("")) == "undefined"){
            answerScreen.innerHTML = 0;
        }
    });
});
