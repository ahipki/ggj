//memory.js
$(function(){
	$("img").on('dragstart', function(event){
		event.preventDefault();
	});
		//Game 3 - cards

	var cardtable = new Array("annierabbit", "birds", "cloud", "furniture", "garden", "grass", "house", "jasonrabbit", "mallet", "mole", "ocarrot", "stool", "sun", "tree", "ycarrot");
	var cardbool = new Array();
	initializeCardBool();
	function score(num){
		var tot = $("#memory .score span").html();
		var tot = parseInt(tot) + num;
		$("#memory .score span").html(tot);
	}

	function alea(){
		var nbr = Math.floor((Math.random() * 15)); 
		if (cardbool[nbr]<2){
			cardbool[nbr]++;
			return nbr;
		}
		else{
			return alea();
		}
	}
	function initializeCardBool(){
		for (var i = 0; i < 15; i++){
			cardbool[i]=0;
	}

	}
	function initializeGame(){
		$('#cards tr').empty();
		initializeCardBool();
		var index=0;
		//tableau 3x10
		var lines = $("#cards tr");
		lines.each(function(){
			for (var i = 0; i < 10; i++){
				$(this).append("<td><img id='"+index+"' src='./img/cards/"+cardtable[alea()]+"card.png'></td>");
				index++;
			}
		});
		$('#hide tr').empty();
		var index = 0;
		var lineshide = $("#hide tr");
		lineshide.each(function(){
			for (var i = 0; i < 10; i++){
				$(this).append("<td><img id='"+index+"'src='./img/cards/emptycard.png'></td>");
				index++;
			}
		});

		//game

		var nbClick = 0;
		var pickCard = $("#hide img");
		var coord1;
		var coord2;
		var open1;
		var open2;
		pickCard.click(function(){
			if (nbClick <2){
				$(this).hide();
				if (nbClick==0){
					open1= $(this);
					coord1 = $(this).attr('id');
					nbClick++;
				}
				else if(nbClick==1){ //deux images ouvertes
					coord2 = $(this).attr('id');
					open2 = $(this);
					var card1 = $("#"+coord1).attr('src');
					var card2 = $("#"+coord2).attr('src');
					if(card1 != card2){
					//si non identiques
						open1.show(500);
						open2.show(500);
						nbClick=0;
						card1="1";
						card2="2";
						score(-1);

					}
					if(card1 == card2){
						nbClick=0;
						score(5);
					}
				}

			}
				


		});
	}

	$("button[go='memory']").click(function(){
		initializeGame();
	});

	
});
