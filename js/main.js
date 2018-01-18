
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








function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
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


