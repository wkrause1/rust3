// try and fix the focus ring, while leaving the website accessible

function handleFirstTab(e) {
	if (e.keyCode === 9) { // the "I am a keyboard user" key
		document.body.classList.add('user-is-tabbing');
		window.removeEventListener('keydown', handleFirstTab);
	}
}

window.addEventListener('keydown', handleFirstTab);

