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
