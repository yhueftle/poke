/**
 * 
 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}






$(document).ready(function(e) {
    width = "+=" + $(document).width()*0.96;
    $("#Jmove").animate({
    	left: width
    }, 5000, function() {
    	// Animation complete.
    });
});

$(document).ready(function(){
	//DOM is ready
	function increment(){
		var counter = 0;
		counter++;
		console.log(counter);
	}
	
	
	$("#submitTeam").click(function(){
		var poke1 = $("#poke1").val().toLowerCase();
		var poke2 = $("#poke2").val().toLowerCase();
		var poke3 = $("#poke3").val().toLowerCase();
		var poke4 = $("#poke4").val().toLowerCase();
		var poke5 = $("#poke5").val().toLowerCase();
		var poke6 = $("#poke6").val().toLowerCase();
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke1 + "/",
			success: function(data) {
				$("#1name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke2 + "/",
			success: function(data) {
				$("#2name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke3 + "/",
			success: function(data) {
				$("#3name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke4 + "/",
			success: function(data) {
				$("#4name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke5 + "/",
			success: function(data) {
				$("#5name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		$.ajax({
			method:"GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + poke6 + "/",
			success: function(data) {
				$("#6name").html(data.name.charAt(0).toUpperCase()+data.name.substring(1));
			}
		});
		
	});
	
	
});