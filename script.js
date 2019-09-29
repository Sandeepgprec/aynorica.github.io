var css = document.querySelector("h3");
var inp1 = document.querySelector(".input1");
var inp2 = document.querySelector(".input2");
var body = document.querySelector("#gradient");


function changeColor() {
	body.style.background = "linear-gradient(to right, " + inp1.value + ", " + inp2.value +")";
	css.appendChild(document.createTextNode("The background is: " + inp1.value + " " + inp2.value));
	// css.textContent = body.style.background + ";";
}

inp1.addEventListener("input", changeColor);

inp2.addEventListener("input", changeColor);

// u can use oninput="changeColor()" in the input tag in the html file