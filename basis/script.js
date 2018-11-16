"use strict";

// Declare variables
const studentName = "Ticho Plug";
const studentGroup = "MD2A";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    // document.getElementById("studentName").innerText = studentName;

    // document.getElementsByClassName("studentGroup")[0].innerHTML = studentGroup;
    // document.getElementsByClassName("studentName")[0].innerHTML = studentName;
    // document.getElementsByClassName("studentGroup")[1].innerHTML = studentGroup;
    // document.getElementsByClassName("studentName")[1].innerHTML = studentName;
    // document.getElementsByClassName("pageYear")[0].innerHTML = year;
    // document.getElementsByClassName("pageYear")[1].innerHTML = year;
    // document.getElementById("year").innerHTML = pageYear;
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    // Activate the first navigation link
    intro();
    var i;
    for (i = 0; i < studentGroup.length; i++) {
        document.getElementsByClassName("studentGroup")[i].innerHTML = studentGroup;
        document.getElementsByClassName("studentName")[i].innerHTML = studentName;
        document.getElementsByClassName("pageYear")[i].innerHTML = year;
    }
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Ticho Plug";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p); 
}