
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

//var name = document.getElementById("name");
//var email = document.getElementById("email");
//var message = document.getElementById("message");

var namee = document.getElementById("name");
if (namee.innerHTML = "")
{
    btn.disabled =  true;
}
document.getElementById("hvala").style.display = "none";

function btn() {
    var dugme = document.getElementById("button");       var lb1 = document.getElementById("Lb1");
    var name_F = document.getElementById("name");        var lb2 = document.getElementById("Lb2");
    var email_F = document.getElementById("email");      var lb3 = document.getElementById("Lb3");
    var message_F = document.getElementById("message");  var hvl = document.getElementById("hvala");

    
    if (name_F.innerHTML == "")
     {
            lb1.style.color = "#ff3333";
            name_F.style = "border-left: 4px solid #ff3333;";    
    }
    if (email_F.innerHTML == "") {
        lb2.style.color = "#ff3333";
        email_F.style = "border-left: 4px solid #ff3333;";

    }
    if (message_F.innerHTML == "") {
        lb3.style.color = "#ff3333";
        message_F.style = "border-left: 4px solid #ff3333;";

    }

   
       
}
                      







function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("body").style = "overflow-y: hidden";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("body").style = "overflow-y: show";
}






function onclick_yt() {
    window.location.href = 'https://www.youtube.com/SuperKuazar/';
    target = "_blank";


}



function onclick_in() {
    window.location.href = 'https://instagram.com/nikoliccc02/';
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

// _Pages


/* _ PLUGIN SA MATIČNE STRANICE https://eronelit.com _ */
/* _*/
/* _*/
/* _ PLUGIN SA MATIČNE STRANICE https://eronelit.com _ */
