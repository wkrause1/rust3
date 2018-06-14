function switchActiveElement(elemToUnhide, navToActivate) {
	$(".content-container").addClass("content-container-hidden");
	$(elemToUnhide).removeClass("content-container-hidden");
	$(".vertical-nav-num").removeClass("active");
	$(navToActivate).parent().addClass("active");
}

$(".nav-item.vertical-nav-num").click(function() {
	var elementId = "#" + $(this).children().attr("id");
	if (!(elementId.includes("-nav"))) {
		switchActiveElement((elementId + "-container"), elementId);
	}
});

$("#exp-nav").scrollspy()