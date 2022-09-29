let div    = document.querySelector('div');
let arrbtn = [];

for(let i = 0; i < 3; i++) {
	arrbtn[i] = document.getElementById(`${i+1}`);
	arrbtn[i].addEventListener('click', function() {
		fetch(`/ajax${i}.html`).then(
			response => {
				return response.text();
			}
		).then(
			text => {
				div.innerHTML = text;
			}
		);
	});
}

