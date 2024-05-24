let currentDisplay = "0";
let doneCalculating = false;

$(".btn").click(function(){
    let currentButton = $(this).text();
    console.log(currentButton);
    calculate(currentButton);   
});

function calculate(current){
    if(doneCalculating)
        resetDisplay();
    if(current == "c")
        resetDisplay();
    else if(current == "<")
        deleteLastChar();
    else{
        try{
            if(current == "="){
                let result = eval(currentDisplay);
                $(".display").append("<br/><span style='color: black'>" + result + "</span>");
                doneCalculating = true;
            }
            else{
                if(currentDisplay == "0")
                    currentDisplay = "";
                currentDisplay += current;
                $(".display").html(currentDisplay);
            }
        }
        catch(error){
            $(".display").append("<br><span style='color: black'>Undefined</span>");
        }
    }
}

function deleteLastChar(){
    currentDisplay = currentDisplay.slice(0, -1);
    $(".display").html(currentDisplay);
    if(currentDisplay == "")
        resetDisplay();
}

function resetDisplay(){
    currentDisplay = "0";
    $(".display").html(currentDisplay);
    doneCalculating = false;
}