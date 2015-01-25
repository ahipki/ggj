$(function(){
//hide all divs excepted the logoScreen
	var divs = $(".content").not(":first"); 
	divs.hide();
	var guy = "Jason";
	var girl = "Annie";

//buttons to navigate between screens
	var button = $("*[go]").not(":first");  

	button.click( function() {
		$(this).closest("div[id]").hide();
		gotoSection($(this).attr("go"));
	});

	function gotoSection(key) {
		$("#"+key).show();
	}
//on logoScreen pass to the next screen
	$("#logoScreen").on("click", function(event){
		$("#logoScreen").hide();
		gotoSection("home");
	});
//Credits
	$("#credits").click(function(){
		$(this).hide();
		gotoSection("home");
	});

//Configurations
$("#configuration button").click(function(){
	guy = $("#configuration input:first").val();
	if (guy.length == 0){
		guy = $("#configuration input:first").attr("placeholder");
	}
	girl = $("#configuration input:last").val();
	if (girl.length == 0){
		girl = $("#configuration input:last").attr("placeholder");
	}
	var spanguy = $(".guy");
	var spangirl = $(".girl");

	spanguy.each(function(){
		$(this).replaceWith(guy);
	});
	spangirl.each(function(){
		$(this).replaceWith(girl);
	});
	$("#configuration").hide();
	gotoSection("home");
});
	
//Game 1 - carrots

//Game 2 - moles

//Game 3 - cards
function initializeGame(){
	//tableau 3x10
	$("#cards").append("<table></table>");
	$("#card table")

}
$("button[go='memory']").click(function(){
	initializeGame();
});
//Game 4 - dance
	$("button[go='dance']").click(function(){
		$("body").append(" <audio src='./music/song1.mp3' autoplay></audio>  ")
	});
	$("#dance button[class='quit']").click(function(){
		$("audio").remove();
	});


	
});
