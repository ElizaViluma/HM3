function FizzBuzz(val1 = 3,val2 = 5){
        let returnArray = [];
        for(let i=1;i<=100;i++){
            returnArray[i] = ((i%val1 == 0 ? 'Fizz' : '' ) + (i%val2 == 0 ? 'Buzz' : '') || i);                   
        }
        return returnArray;
}
function buzzIt(){
    let output = "";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzz(val1,val2);
    document.getElementById('results').innerHTML = output;
}

function buzzItTemplate(){
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');
    
    var templateHTML = rowTemplate.innerHTML;
    var resultsHTML = headTemplate.innerHTML;

    //Values of Fizz and Buzz
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value; 

    //Call the Fizz Buzz Function
    output = FizzBuzz(val1,val2);
    for(i=1; i<output.length; i+=5){
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
            .replace('{{val2}}', output[i + 1])
            .replace('{{val3}}', output[i + 2])
            .replace('{{val4}}', output[i + 3])
            .replace('{{val5}}', output[i + 4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;
}