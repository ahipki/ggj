$(function(){
	function score(num){
		var tot = $("#moles .score span").html();
		var tot = parseInt(tot) + num;
		$("#moles .score span").html(tot);
		if (tot == 100){
			alert("Very good job !");
		}
	}
	function aleaMole(){
		$("#holes").append("<img class='mole' src='img/mole.png' style='top: 80 px; left: 100 px;'/>");
	}
	function initializeGame(){
		$("#moles .score span").html("0");
		$("body").css("background-color", "#9ccf31");
		$("body").css("cursor", "url('./img/mallet.png'), pointer");

		for (var i = 0; i< 101; i++){
			aleaMole();
		}

		$(".mole").on("click", function(){
			$(this).hide();
			score(1);
		});

	}

	$("button[go='moles']").click(function(){
		initializeGame();
	});
});
