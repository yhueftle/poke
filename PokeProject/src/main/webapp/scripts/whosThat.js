/**
 * 
 */

var score = 0;
var poke;

var guess = document.getElementById("guess");
var start = document.getElementById("start");
var image = document.getElementById("pokeImage");
var con = document.getElementById("continue");

start.onclick = function(){
	guess.style.visibility = "visible";
	start.style.visibility = "hidden";
	var rand = Math.floor(Math.random() *152);
	$.ajax({
		method:"GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + rand + "/",
		success: function(data) {
			poke = data.name.charAt(0).toUpperCase()+data.name.substring(1);
		}
	});
	image.innerHTML = "<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + rand + ".png\"/>";
	document.getElementById("score").innerHTML = "Score: " + score;
}

document.getElementById("fGuess").onclick = function(){
	guess.style.visibility = "hidden";
	var poke1 = document.getElementById("inputName").value.toLowerCase();
	poke1 = poke1.charAt(0).toUpperCase()+poke1.substring(1);
	if(poke1 === poke){
		score++;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	document.getElementById("response").innerHTML = "It's " + poke +"!";
	con.style.visibility = "visible";
}

con.onclick = function(){
	document.getElementById("response").innerHTML = "";
	con.style.visibility = "hidden";
	guess.style.visibility = "visible";
	var rand = Math.floor(Math.random() *152);
	$.ajax({
		method:"GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + rand + "/",
		success: function(data) {
			poke = data.name.charAt(0).toUpperCase()+data.name.substring(1);
		}
	});
	image.innerHTML = "<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + rand + ".png\"/>";
	
}

