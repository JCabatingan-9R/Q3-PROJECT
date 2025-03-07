//HOME PAGE
function changeRegColor() {
	const reg = document.getElementById('reg');
	reg.style.color = "green";
	reg.style.background = "white";
}

function resetRegColor() {
	const reg = document.getElementById('reg');
	reg.style.color = "white";
	reg.style.background = "green";
}

function changeDiscColor() {
	const disc = document.getElementById('disc');
	disc.style.color = "green";
	disc.style.background = "white";
}

function resetDiscColor() {
	const disc = document.getElementById('disc');
	disc.style.color = "white";
	disc.style.background = "green";
}

function regular() {
	var origin = document.getElementById('origin').value;
	var destination = document.getElementById('destination').value;
	var price = destination - origin;
	var price.value = price.value.toFixed(2);
	document.getElementById('ticket').innerHTML = price.value;
}

function discount() {
	var origin = document.getElementById('origin').value;
	var destination = document.getElementById('destination').value;
	var price = (destination - origin) * .2;
	var price.value = price.value.toFixed(2);
	document.getElementById('ticket').innerHTML = price.value;
}

// CONTACT PAGE
function namechange() {
	const fname = document.getElementById('fname');
	fname.value = fname.value.toUpperCase();
}


function changeSbmtColor() {
	const subfeed = document.getElementById('subfeed');
	subfeed.style.color = "green";
	subfeed.style.background = "white";
}

function resetSbmtColor() {
	const subfeed = document.getElementById('subfeed');
	subfeed.style.color = "white";
	subfeed.style.background = "green";
}
