function ShowLocalDate() {
    var my_time = new Date(); 
    // Creates a date object set to the current date and time
    document.getElementById("currentDate").innerHTML=my_time;
    // then document.getElementByIdmethod is used returns an element with a specified value
}

document.getElementById("demo").addEventListener("click", mouseClick);
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);
document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);


function mouseClick() {
    document.getElementById("demo").innerHTML = "Clicked.";
    console.log("Clicked__");
}

function mouseOver() {
    document.getElementById("demo").innerHTML = "Moused Over.";
    console.log("Moused Over");
}

function mouseOut() {
    document.getElementById("demo").innerHTML = "Moused Out.";
    console.log("Moused Out");
}

function mouseDown() {
    document.getElementById("demo").innerHTML = "Moused Down.";
    console.log("Moused Down");
}

function mouseUp() {
    document.getElementById("demo").innerHTML = "Moused Up .";
    console.log("Moused Up");
}
