$( document ).ready(function() {

	var roster = ["Alicia Weaver", "Alyssa Brasse", "Ari Cazeau", "Bing Li", "Catherine Atalig", "Clemone Reynolds", "Elaine Lau", "Erin Bouton", "Isabella Rivera", "Jessica Kukin", "Julie Margolin", "Katriona Durkin", "Leesett Nervil", "Sade Jansen", "Sanaa Mock", "Stacy Kim", "Sunjana Kulkarni", "Taylour Peters", "Tessa Sevieux", "Agnes Wong"];

	$("#go").on("click", function(){
		getName();
	});

	function getName() {
		var num = Math.floor(Math.random() * roster.length);
		$("#name").text(roster[num]);		
	}

});

