
document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault() }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault() }, false);



window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
       
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop -= 1;
    document.documentElement.scrollTop = 0;
}

////km


function myFunction() {
    var x = document.getElementById("Meni");
    if (x.className === "Meni_mobilni") {
        x.className += "Normalno";
    } else {
        x.className = "Meni_mobilni";
    }
}

document.getElementById("indeks").innerHTML = "Marko Nikolić - MN2017200219IR";


document.getElementById("hvala").style.display = "none";

function btn() {
    var dugme = document.getElementById("button"); var lb1 = document.getElementById("Lb1");
    var name_F = document.getElementById("name"); var lb2 = document.getElementById("Lb2");
    var email_F = document.getElementById("email"); var lb3 = document.getElementById("Lb3");
    var message_F = document.getElementById("message"); var hvl = document.getElementById("hvala");



    if (name_F.innerHTML == "") {
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





//Sve

function openNav() {
    //document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.width = "250px";
    document.getElementById("Sve").style.marginLeft = "250px";
    document.getElementsByClassName("footer").style.marginLeft = "250px";

    document.getElementById("body").style = "overflow-y: hidden";

    //greskamoguce
    document.getElementsByClassName("Sve").style.marginLeft = "250px";

}

function closeNav() {
    //   document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("Sve").style.marginLeft = "0px";


    document.getElementsByClassName("footer").style.marginLeft = "0px";
    document.getElementById("body").style = "overflow-y: show";
}






function onclick_yt() {
    window.open('https://www.youtube.com/SuperKuazar/', '_blank'); 

}



function onclick_in() {
    window.open('https://instagram.com/nikoliccc02/', '_blank');
}

function onclick_Go1() {
    window.location.href = 'https://marko9827.github.io/sajt/pages/page1.html';


}


function onclick_Go2() {
    window.location.href = 'https://marko9827.github.io/sajt/pages/page2.html';

}



function onclick_Go3() {
    window.location.href = 'https://marko9827.github.io/sajt/pages/page3.html';

}




function onclick_Go4() {
    window.location.href = 'https://marko9827.github.io/sajt/pages/page4.html';

}



