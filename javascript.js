function divcolor() {
    document.getElementById("div1").style.backgroundColor = "MediumTurquoise";
}

function divcoloroption1() {
    document.getElementById("div2").style.backgroundColor = "Lightgrey";
}

function divcoloroption2() {
    document.getElementById("div2").style.backgroundColor = "Aquamarine";
}

function divcoloroption3() {
    document.getElementById("div2").style.backgroundColor = "RoyalBlue";
}

function getFirstname () {
  var firstname = doument.getElementById("yourfirstname").value;
  document.getElementById("thefirstname").innerHTML = firstname;
}

function getlastname () {
  var lastname = doument.getElementById("yourlastname").value;
  document.getElementById("thelastname").innerHTML = lastname;
}

function getdate () {
  var date = doument.getElementById("yourdate").value;
  document.getElementById("thedate").innerHTML = date;
}

function getemail () {
  var email = doument.getElementById("youremail").value;
  document.getElementById("theemail").innerHTML = email;
}

function gettelephone () {
  var telephone = doument.getElementById("yourtelephone").value;
  document.getElementById("thetelephone").innerHTML = telephone;
}

function getdeal () {
  var deal = doument.getElementById("yourdeal").value;
  document.getElementById("thedeal").innerHTML = deal;
}

function getnumber() {
    var num = document.getElementById("myNumber").value;
    document.getElementById("thenumber").innerHTML = num;
}

function getrange() {
    var range = document.getElementById("yourrange").value;
    document.getElementById("therange").innerHTML = range;
}

function getLocation() {
	var locate = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
		else {
        locate.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
		document.getElementById("location").innerHTML = "<br>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function initMap(){

  var view = {
    zoom:15,
    center:{lat:40.599228, lng: -73.989098}
  }

  var map = new google.maps.Map(document.getElementById('map'), view);
}

function allowDrop(logo) {
    logo.preventDefault();
}

function drag(logo) {
    logo.dataTransfer.setData("text", logo.target.id);
}

function drop(logo) {
    logo.preventDefault();
    var data = logo.dataTransfer.getData("text");
    logo.target.appendChild(document.getElementById(data));
}

function countword(word) {
    document.getElementById('counting').innerHTML = word.value.length;
}

function turntoupper() {
    document.form1.outstring.value = document.form1.instring.value.toUpperCase();
}

var checkpass = function() {
  if (document.getElementById('password').value == document.getElementById('confirm_password').value){
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Password is correct';
  }

  else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Password is not correct';
  }
}

function store () {
if (typeof(Storage) !== "undefined") {

    sessionStorage.setItem("Gym Shark", "Shark Team");

    document.getElementById("result").innerHTML = sessionStorage.getItem("Gym Shark");
}

else {
    document.getElementById("result").innerHTML = "Error, Broswer does support this";
	 }
}
