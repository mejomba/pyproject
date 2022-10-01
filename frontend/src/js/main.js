// couse_info.html courses_section collapse
const btns = document.querySelectorAll('.collapse');
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const answer = e.currentTarget.previousElementSibling;
            console.log(answer);
            if (answer.style.height) {
                console.log(answer.style.height);
                answer.style.height = null;
            } else {
                answer.style.height = answer.scrollHeight + 'px';
            }
        })
    })

// popup login
const popUpLogin = document.getElementById('popup-login');
const loginBtn = document.getElementById('login');
const closeLoginFormBtn = document.getElementById('close-login-form');
console.log('hellow');
loginBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (popUpLogin.classList.contains('hidden')){
        popUpLogin.classList.remove('hidden');
    }// end if
    else {
        popUpLogin.classList.add('hidden');
    }// end else
})// end event

closeLoginFormBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (popUpLogin.classList.contains('hidden')){
        popUpLogin.classList.remove('hidden');
    }// end if
    else {
        popUpLogin.classList.add('hidden');
    }// end else
})// end event

// show-hide password
const togglePassword = document.getElementById('toggle-password');
const showPassword = document.getElementById('show-password');
const hidePassword = document.getElementById('hide-password');
const passwordField = document.getElementById('password-field');

togglePassword.addEventListener('click', (e)=> {
    e.preventDefault();
    showPassword.classList.toggle('hidden');
    hidePassword.classList.toggle('hidden');
    if (passwordField.type === "password"){
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}); // end event

// show-hide password signup
const togglePasswordSignup = document.getElementById('toggle-password-signup');
const showPasswordSignup = document.getElementById('show-password-signup');
const hidePasswordSignup = document.getElementById('hide-password-signup');
const passwordFieldSignup = document.getElementById('password-field-signup');

togglePasswordSignup.addEventListener('click', (e)=> {
    e.preventDefault();
    showPasswordSignup.classList.toggle('hidden');
    hidePasswordSignup.classList.toggle('hidden');
    if (passwordFieldSignup.type === "password"){
        passwordFieldSignup.type = 'text';
    } else {
        passwordFieldSignup.type = 'password';
    }
}); // end event

// show-hide password repeat signup
const togglePasswordRepeatSignup = document.getElementById('toggle-password-repeat-signup');
const showPasswordRepeatSignup = document.getElementById('show-password-repeat-signup');
const hidePasswordRepeatSignup = document.getElementById('hide-password-repeat-signup');
const passwordFieldRepeatSignup = document.getElementById('password-field-repeat-signup');

togglePasswordRepeatSignup.addEventListener('click', (e)=> {
    e.preventDefault();
    showPasswordRepeatSignup.classList.toggle('hidden');
    hidePasswordRepeatSignup.classList.toggle('hidden');
    if (passwordFieldRepeatSignup.type === "password"){
        passwordFieldRepeatSignup.type = 'text';
    } else {
        passwordFieldRepeatSignup.type = 'password';
    }
}); // end event

// login-signup form toggle
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginFormBtn = document.getElementById('login-form-button');
const signupFormBtn = document.getElementById('signup-form-button');

loginFormBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginFormBtn.classList.remove('bg-gray-50');
    loginFormBtn.classList.add('bg-gray-200');
    signupFormBtn.classList.remove('bg-gray-200');
    signupFormBtn.classList.add('bg-gray-50');
}); // end event

signupFormBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupFormBtn.classList.remove('bg-gray-50');
    signupFormBtn.classList.add('bg-gray-200');
    loginFormBtn.classList.remove('bg-gray-200');
    loginFormBtn.classList.add('bg-gray-50');
}); // end event