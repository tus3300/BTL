
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const containerh = document.getElementById('containerh');

    signUpButton.addEventListener('click', () => {
	containerh.classList.add("right-panel-active");  
    });

    signInButton.addEventListener('click', () => {
	containerh.classList.remove("right-panel-active");
    });
    

