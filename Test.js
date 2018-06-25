var currDate = new Date();

function prevDay(){
	document.getElementById("header").style.color = 'Yellow';
	moveDay(-1);
	updateScreen();
}
function nextDay(){
	document.getElementById("header").style.color = 'Blue';
	moveDay(1);
	updateScreen();
}

function moveDay(x){
	currDate.setDate(currDate.getDate() + x);
}

function updateScreen(){
	document.getElementById("header").innerHTML = buildURL();
	document.getElementById	("dotd").src = buildURL();
}

function buildURL(){
	var year = currDate.getFullYear();
	var month = currDate.toLocaleString("en-us", { month: "long" });
	var day = currDate.getDate();
	return "http://www.dogoftheday.com/archive/" + year + "/" + month + "/" + day + ".jpg"
} 