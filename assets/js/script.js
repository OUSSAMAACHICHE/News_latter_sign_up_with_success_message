let form = document.forms[0];
let btnUp = document.querySelector('.up');
let input = document.getElementById('email');





form.addEventListener('submit' , (e) => {
	let email = input.value.trim();

	let valid = false;
	// simple validition 
	if(email.includes('@') && email.includes('.') && email.length <= 20 && email.length > 5) {
		valid = true;
	}

	if(!valid) {
		e.preventDefault();
		checkEmail();
		input.focus();
		return;
	}

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