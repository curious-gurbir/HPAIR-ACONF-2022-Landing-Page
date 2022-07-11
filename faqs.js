var FAQ_DATA;

$(document).ready(function () {
	$.ajaxSetup({
		cache: false,
	});
	$.get("data/faqs.csv", "text", function (data) {
		FAQ_DATA = $.csv.toObjects(data);
		FAQ_DATA.map((faq) => {
			addFAQ(faq.question, faq.answer);
		});
		var faq = document.getElementsByClassName("faq-question");
		for (let i = 0; i < faq.length; i++) {
			faq[i].addEventListener("click", function () {
				/* Toggle between adding and removing the "active" class,
						to highlight the button that controls the panel */
				this.classList.toggle("active");
				/* Toggle between hiding and showing the active panel */
				var body = this.nextElementSibling;
				if (body.style.display === "block") {
					body.style.display = "none";
				} else {
					body.style.display = "block";
				}
			});
		}
	});
});

function addFAQ(ques, ans) {
	document.querySelector(".faq-container").innerHTML += `
        <div>
            <!-- faq question -->
            <h1 class="faq-question">${ques}</h1>
            <!-- faq answer -->
            <div class="faq-body">
                <p>${ans}</p>
            </div>
        </div>
        <hr class="faq-hr-line" />
    `;
}
