$( document ).ready(function() {

	var roster = ["Ari Cazeau", "Bing Li", "Catherine Atalig", "Clemone Reynolds", "Elaine Lau", "Erin Bouton", "Isabella Rivera", "Jessica Kukin", "Julie Margolin", "Katriona Durkin", "Leeset Nervil", "Sade Jansen", "Sanaa Mock", "Stacy Kim", "Sunjana Kulkarni", "Taylour Peters", "Tessa Sevieux"];

	$("#go").on("click", function(){
		getName();
	});

	function getName() {
		var num = Math.floor(Math.random() * roster.length);
		$("#name").text(roster[num]);		
	}

});

