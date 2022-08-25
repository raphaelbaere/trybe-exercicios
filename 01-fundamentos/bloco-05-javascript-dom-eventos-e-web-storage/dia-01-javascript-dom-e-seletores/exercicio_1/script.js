let headerContainer = document.getElementById("header-container");

let urgenth3s = document.querySelectorAll(".emergency-tasks h3")

let urgentDivs = document.querySelectorAll(".emergency-tasks div")

let noUrgentH3s = document.querySelectorAll(".no-emergency-tasks h3")

let noUrgentDivs = document.querySelectorAll(".no-emergency-tasks div")

let footerContainer = document.getElementById("footer-container")


headerContainer.style.backgroundColor = "green";

footerContainer.style.backgroundColor = "black"

for (let items of urgenth3s) {
    items.style.backgroundColor = "purple"
}
for (let items of urgentDivs) {
    items.style.backgroundColor = "pink"
}
for (let items of noUrgentDivs) {
    items.style.backgroundColor = "yellow"
}
for (let items of noUrgentH3s) {
    items.style.backgroundColor = "black"
}




