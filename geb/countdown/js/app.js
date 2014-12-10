// set the date we're counting down to
var target_date = new Date("Jan 05, 2015").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
var d = document.getElementById("days");
var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60); 

    d.innerHTML = days;
    h.innerHTML= hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
}, 1000);


var emailValid =  {
    content: "Success",
    style: "success",
    timeout: 3000
}

var emailNotValid =  {
    content: "Please insert a valid mail",
    style: "error",
    timeout: 3000
}

var register = $('#register');

register.submit(function(e){
    var email = $('#email').val();    
    e.preventDefault();

    //email validation
    var regex = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    if( regex.test(email) ) {
        if (email !== "") {
            console.log("valid");
            $.snackbar(emailValid);
            return true;
        } else {
            console.log("Please insert an email");
            $.snackbar(emailNotValid);
            return false;
        }
    } else {
        $.snackbar(emailNotValid);
        console.log("not valid");
        return false;
    }
});