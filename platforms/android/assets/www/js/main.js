$(function(){
//hide all divs excepted the logoScreen
	var divs = $(".content").not(":first"); 
	divs.hide();

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

	$("button[go='dance']").click(function(){
		/*var audio = {};
        audio["song1"] = new Audio();
        audio["song1"].src = "./music/song1.mp3"
        audio["song1"].addEventListener('load', function () {
            audio["song1"].play();
        });*/
	$("body").append(" <audio src='./music/song1.mp3' autoplay></audio>  ")
	});
});
