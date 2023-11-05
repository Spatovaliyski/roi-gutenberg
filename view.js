import domReady from"@wordpress/dom-ready";
/* 
** view.js will load scripts on the Frontend. 
** Using this, we can incorporate logic of the ROI Calculator, like button switching, dynamic calculations, etc;
*/

domReady(function () {
	// Get all four dynamic components
	const members = document.querySelector(".roi-data__input--members"); // Number of members managing
	const storage = document.querySelector(".roi-data__input--storage"); // Storage per TB
	const cost = document.querySelector(".roi-result__field--cost"); // Savings per month (disabled)
 	const egress = document.querySelector(".roi-result__field--egress"); // Egress field (disabled)
	const link = document.querySelector(".roi-links__button--try");


	// Get initial cost, egress value from hidden fields
	const input_cost = document.querySelector("#roi-static-cost"); // Hidden input field with default Cost (assigned by the Gutenberg block ($80))
	const input_egress = document.querySelector("#roi-static-egress"); // Hidden input field ith default Egress per TB (assigned by the Gutenberg block ($0.02))
 
	const calculateROI = () => {
		let membersValue = members.value;

		if (members.value < 5) {
			membersValue = 5;
		}

		// Small check if the input values go below zero, bump them to 1 by default (prevents minus calculations)
		members.value < 0 ? members.value = 1 : "";
		storage.value < 0 ? storage.value = 1 : "";

		cost.textContent = `$${(storage.value) * input_cost.value + ((membersValue - 5) * 10)}`;
		egress.textContent = `$${input_egress.value * storage.value}`;

		if (storage.value > 10) {
			link.setAttribute('href', 'https://www.example.com/contact');
			link.textContent = 'Contact sales';
		} else {
			link.setAttribute('href', 'https://www.example.com/trial');
			link.textContent = 'Try for free';
		}
	}

	members.addEventListener('input', (event) => {
		calculateROI();
	});

	storage.addEventListener('input', (event) => {
		calculateROI();
	});
});
