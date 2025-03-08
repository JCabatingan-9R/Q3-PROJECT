// SCRIPT BY JADE

//NAV
function changeSearchColor() {
	const search = document.getElementById('search');
	search.style.color = "white";
	search.style.background = "green";
}

function resetSearchColor() {
	const search = document.getElementById('search');
	search.style.color = "green";
	search.style.background = "white";
}

function searching() {
	window.alert("Sorry, currently unavailable. Please search manually :)");
}

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
	var og = document.getElementById('origin').value;
	var dest = document.getElementById('destination').value;
	var price = Math.abs(dest-og);
	var pri = price.toFixed(2);
	document.getElementById('ticket').innerHTML = pri;
}

function discount() {
	var og = document.getElementById('origin').value;
	var dest = document.getElementById('destination').value;
	var price = Math.abs((dest-og)*0.8);
	var pri = price.toFixed(2);
	document.getElementById('ticket').innerHTML = pri;
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
