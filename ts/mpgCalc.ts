/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid(){
    //function should validate form entries
    //and return true or false corresponding to validity
    let isAllDataValid:Boolean = true;

    //validate miles driven, display error if invalid
    let milesBox:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("miles");
    let milesDriven:string = milesBox.value;
    if(milesDriven == "" || isNaN(parseFloat(milesDriven))){
        isAllDataValid = false
        milesBox.nextElementSibling.innerHTML = 
        "Miles Driven is required and must be a number";
    }
    return isAllDataValid
}

/** 
 * This function should be called when the calculate button is clicked
*/

function main(){
    if(isValid){
        let miles:string =
            (<HTMLInputElement>document.getElementById("miles")).value;
        let gallons:HTMLInputElement =
            <HTMLInputElement>document.getElementById("gallons");
    let gallonsData:number = parseFloat(gallons.value);

    let mpg = calculateMPG(parseFloat(miles), gallonsData);
    displayResults(mpg);
    }
    //check if data is valid
    //if data is valid
        //calculate MPG
    
}

/**
 * Displays given MPG on the form
 * @param milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon: number):void{
    //Get <input> element containing mpg
    //Must cast as <HTMLInputElement> otherwise getElementById
    //return HTMLElement which does not have a .value
    let mpgBox:HTMLInputElement =
    <HTMLInputElement>document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param {number} milesDriven The number of miles driven
 * @param {number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number{
    let mpg:number = milesDriven / gallonsUsed; 
    return mpg;
}

//TODO: Create a function that Clears all the form textboxes

//TODO: Add a function to Miles Driven and Gallons of gas used to clear out the inputs
//      They can clear out both textboxes or just the textbox that triggers the double click event

window.onload = function(){
    let calcBtn:HTMLElement = document.getElementById("calculate");
    calcBtn.onclick = main;

    let clearBtn = document.getElementById("clear");
    clearBtn.onclick = resetForm;


}

function resetForm():void{
    //clear out all textboxes
    let allBoxes = document.querySelectorAll("input[type=text]");
    for(let i = 0; i< allBoxes.length;i++){
            let currBox = <HTMLInputElement>allBoxes[i];
            currBox.value = "";
    }
    //reset <span> text
    let allSpans = document.querySelectorAll("span");
    for(let i = 0; i< allSpans.length;i++){
        let spans = <HTMLInputElement>allSpans[i];
        spans.value = ""
    }
    
{


}

}