let input = document.getElementById('inputtext');
let buttons = document.querySelectorAll('button');//button find all the element in your calculator (Html)
let string = ""; //This string will store what the user type or click (like 1 , 2 , 5 , * , + ,etc.....)
let arr = Array.from(buttons);
arr.forEach(button =>{//This goes through every single button (like 1, 2, +, -, =, etc.).
    button.addEventListener('click', (e) =>{//Inside the button you will decide that what to do in function inside..
        if(e.target.innerHTML == '='){//Its mean what is written inside the button when clicked(it is =)
            string = eval(string);//eval(string) takes something like "1+2" and turns it into 3.
            input.value = string;//Then you show that result on the screen with input.value = string;
            return; // stop here so "=" doesn't get added again
            //ye mene CGPT se likha hai return agar koi issue kare tu bad me hum isse delete bhi karskte hai..
        
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);//use to remove the last number
            //substring(start, end) is a function in JavaScript that cuts out a portion of a string
            input.value = string;
        }
        else{
            string += e.target.innerHTML;//You click 1, then string becomes "1"
            // Then you click +, it becomes "1+"
            // Then 2 makes it "1+2"
            input.value = string;//Then you show that result on the screen with input.value = string;
        }
        
    })
})