//memory.js
$(function(){

		//Game 3 - cards

	var cardtable = new Array("annierabbit", "birds", "cloud", "furniture", "garden", "grass", "house", "jasonrabbit", "mallet", "mole", "ocarrot", "stool", "sun", "tree", "ycarrot");
	var cardbool = new Array();
	for (var i = 0; i < 15; i++){
		cardbool[i]=false;
	}


	function alea(){
		var nbr = Math.floor((Math.random() * 15)); 
		alert(nbr);
		return nbr;
	}
	function initializeGame(){
		$('#cards').empty();
		//tableau 3x10
		$("#cards").append("<table></table>");
		$("#cards table").append("<tr></tr><tr></tr><tr></tr>");
		var lines = $("#cards tr");
		lines.each(function(){
			for (var i = 0; i < 10; i++){
				$(this).append("<td><img src='./img/cards/"+cardtable[alea()]+"card.png'></td>");
			}
		});
	}

	$("button[go='memory']").click(function(){
		initializeGame();
	});

});
