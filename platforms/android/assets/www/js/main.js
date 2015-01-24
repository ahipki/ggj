$(function(){
//hide all divs excepted the logoScreen
	var divs = $(".content").not(":first"); 
	divs.hide();

//buttons to navigate between screens
	var button = $("*[go]");  

	button.click( function() {
		$(this).closest("div").hide();
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
});
