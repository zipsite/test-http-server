let div = document.querySelector('div');
let btn = document.getElementById(`0`);
let count = 0;

btn.addEventListener('click', function() {
	if (count < 5){
		fetch(`/ajax${count}.html`).then(
			response => {
				return response.text();
			}
		).then(
			text => {
				div.innerHTML = text;
			}
		);
		count++;
	}
});

