let header = document.getElementsByTagName("header")[0];
header.style.background = "green";

let title = document.getElementsByClassName("urgente");

for (i = 0; i < title.length; i += 1) {
    title[i].style.background = 'purple';
};
 

let footer = document.querySelector("footer");
footer.style.background = "green";

let backgroundiv = document.querySelectorAll(".emergency-tasks .backgroundiv")[0];
backgroundiv.style.background = 'pink';
backgroundiv = document.querySelectorAll(".emergency-tasks .backgroundiv")[1];
backgroundiv.style.background = 'pink';

let backgroundivv = document.querySelectorAll(".backgroundivv")[0];
backgroundivv.style.background = 'yellow';
backgroundivv = document.querySelectorAll(".no-emergency-tasks .backgroundivv")[1];
backgroundivv.style.background = 'yellow';