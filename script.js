var mode = document.getElementById('mode');
var mode_icon = document.getElementById('mode_icon');
console.log(mode)
var value = 0;
console.log('value=', value)
// values 0=light , 1=dark
// apllying if else to see current mode and change mode
if (value == 0) {
    mode.addEventListener('click', darkmode);
    value=1;
}
else if(value == 1){
    mode.addEventListener('click', lightmode);
    value=0;
}
else{
    alert("something wrong happens");
}

function darkmode(){
    
    var body=document.getElementById('body').style;
    body.color='white';
    body.backgroundColor='#181818';
    mode_icon.className='fa fa-sun-o';
    value=0;
    console.log(value)
}
function lightmode(){
    
    var body=document.getElementById('body').style;
    body.color='black';
    body.backgroundColor='white';
    mode_icon.className='fa fa-moon-o';
    value=1;
    console.log(value)
}