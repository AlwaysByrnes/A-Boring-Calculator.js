
//get the value
const display = (value) =>{
    document.getElementById('result').value += value
    return value
}
//Solution function
const solution = () =>{
    //Take each number and calculate the solution.
    //eval takes a representation of a string and prints it's value.
    document.getElementById('result').value
    = eval(document.getElementById('result').value)

}

const clearScreen = () =>{
    
    document.getElementById("result").value = ""
    
   
}

