document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn-submit');

    btnSubmit.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('user-password').value;

        if(username && password){
            alert(`Bem-vindo ${username}`);
        }
        else{
            alert("Inválido");
        }
    });
});
