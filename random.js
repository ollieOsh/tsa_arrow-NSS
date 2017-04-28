var arrow = document.getElementById('arrow');

document.onclick = function(event) {
	arrow.innerHTML = `<img src="https://image.freepik.com/free-icon/curve-arrow-point-to-left_318-10099.jpg"><p>Hi</p>`;

	var toRight = Math.ceil(Math.random() * 10);

	console.log(toRight);

	if(toRight % 2 == 0) {
		arrow.classList.add('right');
	}else {
		arrow.classList.remove('right');
	}
}