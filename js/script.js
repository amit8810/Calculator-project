// To append the string while button is Press
function myfunc(val){
    let screen = document.getElementById("screen");

    screen.value += val;  
}

// for result 
let btn = document.getElementById('equal-to-btn');
btn.addEventListener('click', () => {
  let screen = document.getElementById('screen');
  let result = parseFloat(eval(screen.value));
  screen.value = result;
});

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