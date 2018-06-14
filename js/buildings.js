/* ------------------ COLLAPSE ------------------ */

/*
 * Collapses all other elements once clicked, only allowing one to be shown.
 * TODO: wrap this all in one method
 */

/*
this doesnt work yet

$(".cat-header").click(function() {
	$(".nav-collapse").collapse("hide");	// collapse all
	var elemToShow = "#" + $(this).children().attr("id");
	elemToShow = elemToShow.substring(0, elemToShow.length - 4);
	if (!($(elemToShow).hasClass("show"))) {
		$(elemToShow).collapse("show");
		console.log(elemToShow);
	} else {
		console.log("doesnt have show")
	}
});
*/


$("#residential-collapse-nav").click(function() {
	$("#residential-collapse").collapse("show");
	$("#academic-collapse").collapse("hide");
	$("#recreational-collapse").collapse("hide");
});

$("#academic-collapse-nav").click(function() {
	$("#residential-collapse").collapse("hide");
	$("#academic-collapse").collapse("show");
	$("#recreational-collapse").collapse("hide");
});

$("#recreational-collapse-nav").click(function() {
	$("#residential-collapse").collapse("hide");
	$("#academic-collapse").collapse("hide");
	$("#recreational-collapse").collapse("show");
});

/* ------------------ INDIVIDUAL BUILDINGS ------------------ */

function switchActiveElement(elemToUnhide, navToActivate) {
	$(".content-container").addClass("content-container-hidden");
	$(elemToUnhide).removeClass("content-container-hidden");
	$(".vertical-nav").removeClass("active");
	$(navToActivate).parent().addClass("active");
}

$(".nav-item.vertical-nav").click(function() {
	var elementId = "#" + $(this).children().attr("id");
	if (!(elementId.includes("-nav"))) {
		switchActiveElement((elementId + "-container"), elementId);
	}
});