$( document ).ready(function() {

	//var roster = ["Alicia Weaver", "Alyssa Brasse", "Ari Cazeau", "Bing Li", "Catherine Atalig", "Clemone Reynolds", "Elaine Lau", "Erin Bouton", "Isabella Rivera", "Jessica Kukin", "Julie Margolin", "Katriona Durkin", "Leesett Nervil", "Sade Jansen", "Sanaa Mock", "Stacy Kim", "Sunjana Kulkarni", "Taylour Peters", "Tessa Sevieux", "Agnes Wong"];
	var initial_roster = [
		"Lily",
		"Josh",
		"Zaid",
		"Kyle",
		"Claire",
		"Julia",
		"Sam",
		"Heath",
		"Da'Veed",
		"Reeti",
	];

	var roster = initial_roster.slice(0);

	$("#go").on("click", function(){
		getName();
	});

	$("#order").on("click", function(){
		console.log("clicked order");
		getOrder();
	});

	function getName() {
		if (roster.length == 0) {
			$("#name").text("Done! No more people! :)");
			roster = initial_roster.slice(0); // reset
			return;
		}
		var num = Math.floor(Math.random() * roster.length);
		$("#name").text(roster[num]);
		roster.splice(num, 1); // remove that person from list
	}

	function getOrder() {
		var arr = shuffle(roster);
		var str = "";
		for (var i=0; i<arr.length; i++) {
			str = str + arr[i] + ',\n';
		}
		console.log(str);
		$("#classList").text(str);

	}


	function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

});
