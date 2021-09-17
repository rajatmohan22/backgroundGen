
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let css = document.querySelector("h1");
let body = document.getElementById("grad");


function gradientcolor()
{
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value +")";
}

color1.addEventListener("input", gradientcolor)
color2.addEventListener("input", gradientcolor)




