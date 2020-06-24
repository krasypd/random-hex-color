const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

const btn = document.querySelector('#btn');

function ri() {
	return Math.floor(Math.random() * hex.length);
}
ri();

btn.addEventListener('click', () => {
	let ht = '#';
	for (let x = 0; x < 6; x++) {
		const randomIndex = ri();

		ht += hex[randomIndex];
	}
	console.log(ht);
	document.body.style.background = ht;
	const a = document.querySelector('h2');
	a.innerText = `${ht}`;
});
