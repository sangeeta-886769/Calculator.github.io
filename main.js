const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";



//Define function to calulate based on button clicked.
const calculate = (btnvalue) => {
    if (btnvalue === "=" && btnvalue != "") {
        //If output has '%' replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = "";

    } else if (btnvalue === "DEL") {
        //If DEL button is clicked, remove the last charcter from the output.
        output = output.toString().slice(0, -1);
    } else {
        //If output is empty and button is specialChars then return.
        if (output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;

};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click listener calls calculate() with dataset value as arguments.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});