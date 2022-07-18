$(function () {
	$(".marquee").map(function (item) {
		$(this).html($(this).html() + $(this).html());
	});
});
