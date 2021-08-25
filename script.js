var mode = document.getElementById('mode');
var mode_icon = document.getElementById('mode_icon');
var body = document.getElementById('body').style;
var navbar = document.getElementsByClassName('navbar');
console.log(mode)
var value = 0;


function changemode() {
    console.log('value=', value)
    // values 0=light , 1=dark
    // apllying if else to see current mode and change mode
    if (value == 0) { 
        darkmode();
        value = 1;
    }
    else if (value == 1) {

        lightmode();
        value = 0;
    }
    else {
        alert("something wrong happens");
    }

    function darkmode() {

        body.color = 'white';
        body.backgroundColor = '#181818';
        mode_icon.className = 'fa fa-sun-o';
        document.getElementById('mode').className="btn btn-light";
        document.getElementsByClassName('card').className=' card bg-info'
        console.log(value);
    }
    function lightmode() {

        body.color = 'black';
        body.backgroundColor = 'white';
        mode_icon.className = 'fa fa-moon-o';
        document.getElementById('mode').className="btn btn-dark";
        console.log(value);
    }
}
