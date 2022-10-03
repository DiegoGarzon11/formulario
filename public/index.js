window.addEventListener('load', () => {
	//capturando para mostrar errores
	let errores = document.querySelector('.errores');
	let errosLista = document.createElement('li');

	//seccion militar/no militar
	const militar = document.querySelector('#militar');
	const noMilitar = document.querySelector('#NoMilitar');
	const temporalCon = document.querySelector('.seleccionTemporal');

	//capturando elementos
	const form = document.querySelector('form');
	const emailVerified = document.getElementById('emailVerified');
	const email = document.getElementById('email');

	militar.addEventListener('click', () => {
		temporalCon.style.display = 'block';
	});
	noMilitar.addEventListener('click', () => {
		temporalCon.style.display = 'none';
	});

	form.addEventListener('submit', (event) => {
		document.querySelectorAll('input').forEach((el) => {
			if (el.value == '') {
				errores.innerText = 'hay errores en el formulario, por favor completarlos correctamente';
				event.preventDefault();
			} else {
				form.submit;
			}
		});

		if (email.value !== emailVerified.value) {
			event.preventDefault();
			errores.innerText = 'Los correos no coinciden';
		}

		const temporalSi = document.getElementById('SiTemporal');
		const temporalNo = document.getElementById('NoTemporal');
		if (militar.checked === true) {
			if (temporalSi.checked === true || temporalNo.checked === true) {
				form.submit;
			} else {
				event.preventDefault();
				errores.innerText = 'Por favor completar el formulario de manera correcta';
			}
		} else if (noMilitar.checked === true) {
			form.submit;
		} else {
			event.preventDefault();
			errores.innerText = 'Por favor completar el formulario de manera correcta';
		}
	});

	errosLista.innerText = '';
});
