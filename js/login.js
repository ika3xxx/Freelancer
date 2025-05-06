const toggleBtn = document.getElementById('toggleBtn');
const signUpPage = document.getElementById('signUpPage');
const logInPage = document.getElementById('logInPage');
const toLoginFromSignUp = document.getElementById('toLoginFromSignUp');
const toSignUpFromLogin = document.getElementById('toSignUpFromLogin');

function showSignUp() {
  signUpPage.classList.remove('hidden');
  signUpPage.classList.add('flex');
  logInPage.classList.add('hidden');
  logInPage.classList.remove('flex');
  toggleBtn.textContent = 'Switch to Log In';
}

function showLogIn() {
  logInPage.classList.remove('hidden');
  logInPage.classList.add('flex');
  signUpPage.classList.add('hidden');
  signUpPage.classList.remove('flex');
  toggleBtn.textContent = 'Switch to Sign Up';
}

toggleBtn.addEventListener('click', () => {
  if (signUpPage.classList.contains('hidden')) {
    showSignUp();
  } else {
    showLogIn();
  }
});

toLoginFromSignUp.addEventListener('click', showLogIn);
toSignUpFromLogin.addEventListener('click', showSignUp);