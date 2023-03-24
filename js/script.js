
// To append the string while button is Press
function myfunc(val){
    let screen = document.getElementById("screen");

    screen.value += val;  
}

// Equal to Button functioning 
function result() {
    let screen = document.getElementById("screen");
    screen.value = eval(screen.value);
}

// AC Button function
function clearscr(){
    let screen = document.getElementById("screen");
    screen.value = '';
}

// C Button function 
function clrcsr() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.toString().slice(0,-1);
}