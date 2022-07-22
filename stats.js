let statsAnim = false;

function elementInView(elem) {
	return $(window).scrollTop() < $(elem).offset().top + $(elem).height();
}

function startStatsCounter() {
	statsAnim = true;
	$(".counter").each(function () {
		var $this = $(this),
			countTo = $this.attr("data-count");

		$({ countNum: $this.text() }).animate(
			{
				countNum: countTo,
			},
			{
				duration: 3000,
				easing: "linear",
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				},
			}
		);
	});
}
$(function () {
	if (elementInView($("#stats-container")) && statsAnim == false)
		startStatsCounter();
	$(window).scroll(function () {
		if (elementInView($("#stats-container")) && statsAnim == false)
			startStatsCounter();
	});
	// setTimeout(startStatsCounter, 3000);
});
