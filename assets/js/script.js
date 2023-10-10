let form = document.forms[0];
let btnUp = document.querySelector('.up');
let input = document.getElementById('email');





form.addEventListener('submit' , (e) => {
	let email = input.value.trim();
	e.preventDefault();

	let valid = false;
	// simple validition 
	if(email.includes('@') && email.includes('.') && email.length <= 20 && email.length > 5) {
		valid = true;
	}

	if(!valid) {
		checkEmail();
		input.focus();
		return;
	} else {
		document.querySelector('.content').classList.add('hide');
		document.querySelector('.success').classList.add('active');
		document.querySelector('.email').textContent = email;
		input.classList.remove('error-msg');
		document.querySelector('.error').style.display= 'none';
		input.value = '';
	}

})

document.getElementById('btn').addEventListener('click', (e) => {

	document.querySelector('.content').classList.remove('hide');
		document.querySelector('.success').classList.remove('active');

})

function checkEmail() {
	
	input.classList.add('error-msg');

	document.querySelector('.error').style.display = 'block';


}









// show scrrol 
window.onscroll = function() {

	this.scrollY >= 103 ? btnUp.classList.add('show'): btnUp.classList.remove('show');
}
btnUp.onclick = function() {

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})

}