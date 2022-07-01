var speakerData;

$(document).ready(function () {
	$.ajaxSetup({
		cache: false,
	});
	$.get("data/speakers.csv", "text", function (data) {
		speakerData = $.csv.toObjects(data);
		speakerData.map((speaker) => {
			addCurrentSpeaker(
				speaker.name,
				speaker.title,
				speaker.status,
				speaker.logo
			);
		});
		$(".item").slice(0, 4).show();
	});
});

function addCurrentSpeaker(name, title, status, logo) {
	if (status.toString().toLowerCase() != "true") return;
	let logoElem = `<img class="speaker-logo" src="images/speaker-logos/${name} Logo.png">`;
	$(".speakers-grid").html(
		$(".speakers-grid").html() +
			`<article class="item">
                <img
                    class="speaker-image"
                    src="images/speaker-images/${name}.jpg"
                    alt="Speaker Image"
                />
                <div class="speakers-text">
                    <span class="speaker-name">${name}</span>
                    <span class="speaker-title">${title}</span>
                </div>
				${logo.toString().toLowerCase() != "true" ? "" : logoElem}
            </article>`
	);
}
