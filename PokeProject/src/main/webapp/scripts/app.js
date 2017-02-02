/**
 * 
 */

$(document).ready(function(){
	//DOM is ready
	
	$("#submitTeam").click(function(){
		var poke1 = $("#poke1").val();
		var poke2 = $("#poke2").val();
		var poke3 = $("#poke3").val();
		var poke4 = $("#poke4").val();
		var poke5 = $("#poke5").val();
		var poke6 = $("#poke6").val();
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke1 + "/",
			success: function(data) {
				$("#1name").html(data.name);
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke2 + "/",
			success: function(data) {
				$("#2name").html(data.name);
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke3 + "/",
			success: function(data) {
				$("#3name").html(data.name);
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke4 + "/",
			success: function(data) {
				$("#4name").html(data.name);
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke5 + "/",
			success: function(data) {
				$("#5name").html(data.name);
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke6 + "/",
			success: function(data) {
				$("#6name").html(data.name);
			}
		});
		
	});
	
	
});