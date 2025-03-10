// SCRIPT BY JADE

//NAV

// CHANGES SEARCH BUTTON COLOR ON HOVER
function changeSearchColor() {
	const search = document.getElementById('search');
	search.style.color = "white";
	search.style.background = "green";
}

// RESETS SEARCH BUTTON COLOR WHEN REMOVING HOVER 
function resetSearchColor() {
	const search = document.getElementById('search');
	search.style.color = "green";
	search.style.background = "white";
}

// ON CLICK, WILL TELL USER THE SEARCH MECHANIC DOES NOT WORK
function searching() {
	window.alert("Sorry, currently unavailable. Please search manually :)");
}

// CHANGES SEARCH BUTTON COLOR ON HOVER
function changeSearchColor1() {
	const search = document.getElementById('search1');
	search.style.color = "white";
	search.style.background = "green";
}

// RESETS SEARCH BUTTON COLOR WHEN REMOVING HOVER 
function resetSearchColor1() {
	const search = document.getElementById('search1');
	search.style.color = "green";
	search.style.background = "white";
}

// ON CLICK, WILL TELL USER THE SEARCH MECHANIC DOES NOT WORK
function searching1() {
	window.alert("Sorry, currently unavailable. Please search manually :)");
}

//HOME PAGE

// TO CHANGE REGULAR BUTTON COLOR ON HOVER 
function changeRegColor() {
	const reg = document.getElementById('reg');
	reg.style.color = "green";
	reg.style.background = "white";
}

// TO RESET REGULAR BUTTON COLOR WHEN HOVER IS REMOVED
function resetRegColor() {
	const reg = document.getElementById('reg');
	reg.style.color = "white";
	reg.style.background = "green";
}

// TO CHANGE DISCOUNTED BUTTON COLOR ON HOVER
function changeDiscColor() {
	const disc = document.getElementById('disc');
	disc.style.color = "green";
	disc.style.background = "white";
}

// TO RESET DISCOUNTED BUTTON COLOR ON HOVER
function resetDiscColor() {
	const disc = document.getElementById('disc');
	disc.style.color = "white";
	disc.style.background = "green";
}

// TO CALCULATE THE REGULAR PRICE
function regular() {
	var og = document.getElementById('origin').value;
	var dest = document.getElementById('destination').value;
	var price = Math.abs(dest-og);
	var pri = price.toFixed(2);
	document.getElementById('ticket').innerHTML = pri;
}

// TO CALCULATE THE DISCOUNTED PRICE
// MATH ABS = ABSOLUTE VALUE 
//  TOFIXED = FOR TWO DECIMAL PLACES
function discount() {
	var og = document.getElementById('origin').value;
	var dest = document.getElementById('destination').value;
	var price = Math.abs((dest-og)*0.8); 
	var pri = price.toFixed(2);
	document.getElementById('ticket').innerHTML = pri;
}

// CONTACT PAGE

// TO CHANGE INPUTED NAME TO CAPITAL LETTERS
function namechange() {
	const fname = document.getElementById('fname');
	fname.value = fname.value.toUpperCase();
}

// TO CHANGE SUBMIT BUTTON COLOR WHEN HOVERED 
function changeSbmtColor() {
	const subfeed = document.getElementById('subfeed');
	subfeed.style.color = "green";
	subfeed.style.background = "white";
}

// TO RESET THE SUBMIT BUTTON COLOR WHEN NO LONGER HOVERED
function resetSbmtColor() {
	const subfeed = document.getElementById('subfeed');
	subfeed.style.color = "white";
	subfeed.style.background = "green";
}
