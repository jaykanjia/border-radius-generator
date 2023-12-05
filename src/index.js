import "./global.css";

const topSlider = document.getElementById("top-slider");
const rightSlider = document.getElementById("right-slider");
const bottomSlider = document.getElementById("bottom-slider");
const leftSlider = document.getElementById("left-slider");

const shape = document.getElementById("shape");

const output = document.getElementById("output");

const copyBtn = document.getElementById("copy_btn");

const obj = {
	top: 30,
	left: 30,
	bottom: 30,
	right: 30,
};

function changeShape() {
	const borderRadius = `${obj.top}% ${100 - obj.top}% ${100 - obj.bottom}% ${
		obj.bottom
	}% / ${obj.left}% ${obj.right}% ${100 - obj.right}% ${100 - obj.left}%`;
	shape.style.borderRadius = borderRadius;
	output.innerText = borderRadius;
}

function setInitialSlider() {}

// calc a / b
function changeTopSlider(e) {
	obj.top = e.target.value;
	changeShape();
}

// calc f / g
function changeRightSlider(e) {
	obj.right = e.target.value;
	changeShape();
}

// calc a / b
function changeBottomSlider(e) {
	obj.bottom = e.target.value;
	changeShape();
}

// calc a / b
function changeLeftSlider(e) {
	obj.left = e.target.value;
	changeShape();
}

function handleCopy() {
	const outputStr = output.innerText;
	navigator.clipboard.writeText(outputStr).then(
		() => {
			window.alert("css copied!");
		},
		() => {
			window.alert("something went wrong...");
		}
	);
}

topSlider.addEventListener("change", changeTopSlider);
rightSlider.addEventListener("change", changeRightSlider);
bottomSlider.addEventListener("change", changeBottomSlider);
leftSlider.addEventListener("change", changeLeftSlider);

copyBtn.addEventListener("click", handleCopy);

//        a  /   b
//      --------------
//    e |            |  f
//      |            |
//    h |            |  g
//      --------------
//        d  /   c

changeShape();
