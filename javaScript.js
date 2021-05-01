/****Drop Down Menu for mobile screen*****/
$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $(".main-nav").slideToggle("slow");
  });
});

/****Navbar Stickey Function *****/

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

/****button control read more about Sichuan*****/
$(document).ready(function(){
    $("#display-brief").click(function(){
      $("#brief-two").slideToggle("slow");
    });
  });


/****image roll for natural views*****/
var imageNumber = 1;
var timer = setInterval(switchImage, 3000);
function switchImage(){
    imageNumber +=1;
    if (imageNumber > 2) {
        imageNumber = 1
    }
    document.getElementById("vi").src = "./images/" + imageNumber + ".jpg"
}


/*******Map position*********/
        
jQuery(document).ready(function () {
    $('#map').mouseout(function(){
        $("#map").attr('src', './images/China_map.png');
    }),
    $('#map').mouseover( function(){
        $("#map").attr('src', './images/China_map_sichuan.png');
    });
});	


/****Sichuan Local Time*****/
function calcTime(city) {    
    // create Date object for current location
    d = new Date();
    offset = 8;
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    // return time as a string
    return nd.toLocaleString();
}


/****Sichuan Current Local Weather*****/
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Sichuan&units=metric&APPID=bedd8abe64db097471411c5b774e6ae8", function(a){
var cel = Math.round(a.main.temp*1.8+32);

a.main.temp = Math.floor(a.main.temp);
$('#weather-icon').html('<img src =' + "https://openweathermap.org/img/w/" + a.weather[0].icon + ".png" + '>');
$('#weather-describe').html(a.weather[0].description);
$('#weather-location').html(a.name+" " + a.sys.country);
$('#local-time').html(calcTime);
$('#weather-temp').html(cel + " &#8457");
$('#humi').html("Humidity " + a.main.humidity + "%");
})

				