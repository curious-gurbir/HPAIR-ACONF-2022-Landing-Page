var pastSpeakerData;

$(document).ready(function () {
	$.ajaxSetup({
		cache: false,
	});
	$.get("data/past-speakers.csv", "text", function (data) {
		pastSpeakerData = $.csv.toObjects(data);
		pastSpeakerData.map((speaker) => {
			addPastSpeaker(
				speaker.name,
				speaker.title,
				speaker.status,
				speaker.logo
			);
		});
	});
});

function addPastSpeaker(name, title, status, logo) {
	if (status.toString().toLowerCase() != "true") return;
	let logoElem = `<div class="card-logo">
                        <img
                            src="images/past-speaker-logos/${name} Logo.png"
                            alt="${name} - ${title} logo"
                            class="card-logo-img"
                        />
                    </div>`;
	$("#past-speakers-wrapper").html(
		$("#past-speakers-wrapper").html() +
			`
            <div class="card swiper-slide">
                <div class="image-content">
                    <span class="overlay"></span>

                    <div class="card-image">
                        <img
                            src="images/past-speaker-images/${name}.jpg"
                            alt="${name} - ${title} Image"
                            class="card-img"
                        />
                    </div>
                    ${logo.toString().toLowerCase() != "true" ? "" : logoElem}
                </div>

                <div class="card-content">
                    <h2 class="name">${name}</h2>
                    <p class="description">${title}</p>
                </div>
            </div>`
	);
}
