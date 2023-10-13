function login(){
    //Variável que captura os dados inseridos no <input type="email">
    let email = document.getElementById('email').value;
    //Variável que captura os dados inseridos no <input type="password">
    let password = document.getElementById('password').value;

    //chegagem de email para validação
    if(email === ""){
        alert("Digite seu email");
    }

    //chegagem de senha para validação
    if(password === ""){
        alert("Digite sua senha");
    }

    //Redirecionamento para o catálo se email e senha estiverem corretos
    if(email == "admin@email.com" && password == "admin"){
        location.href = "https://helenaoliveira366.github.io/Catologo-animes/";
    }
    else{
        alert("Email ou senha incorretos");
    }
}

/*
GERAVA CONFLITO COM O HTML
//Código da primeira implementação
function redirectLogin(){
    //Redirecionamento
    window.location.href = "https://helenaoliveira366.github.io/Catologo-animes/"
}
*/
