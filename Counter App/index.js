const counter = document.querySelector('#counter')
const increment = document.querySelector('#increment')
const reset = document.querySelector('#reset')
const decrement = document.querySelector('#decrement')

let count = 0;

increment.addEventListener('click', () => {
	count++;
	counter.textContent = count;
})

decrement.addEventListener('click', () => {
	count--;
	counter.textContent = count;
})

reset.addEventListener('click', () => {
	count = 0;
	counter.textContent = count;
})