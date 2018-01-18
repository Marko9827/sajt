
document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault() }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault() }, false);


////km


function myFunction() {
    var x = document.getElementById("Meni");
    if (x.className === "Meni_mobilni") {
        x.className += "Normalno";
    } else {
        x.className = "Meni_mobilni";
    }
}

var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

function btn() {
    //  var name = document.getElementById("name");
    //name.innerHTML = "Unesi te ime!";
    //name.style.color = "red";

    // name.value = "Unesi te ime!";
    var test = document.getElementsByClassName("Normalno");
    test.value = "aer";

}















function onclick_yt() {
    window.location.href = 'https://www.youtube.com/SuperKuazar/';
    target = "_blank";


}

function onclick_Go1() {
    window.location.href = '/pages/page1.html';


}


function onclick_Go2() {
    window.location.href = '/pages/page2.html';

}



function onclick_Go3() {
    window.location.href = '/pages/page3.html';

}




function onclick_Go4() {
    window.location.href = '/pages/page4.html';

}







function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
    </script >








function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();