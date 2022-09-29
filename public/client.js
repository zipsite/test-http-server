let div    = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	let one = parseInt(prompt("введите первое число"));
	let two = parseInt(prompt("введите второе число"));
	fetch(`/handler/?one=${one}&two=${two}`).then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});