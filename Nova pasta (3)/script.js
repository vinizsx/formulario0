document.getElementById("formulario").addEventListener("submit", function (event) {event.preventDefault()

let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
let genero = document.getElementById("genero").value;
let senhacorreta = "1567"
let senhadigitada = document.getElementById("senha").value;
let email = document.getElementById("email").value;
let mensagem = `Ola ${nome}, você tem ${idade} anos, seu genero é ${genero}, seu email é ${email} Senha correta!.`
if (senhadigitada.length < 4) { document.getElementById("resultado").innerHTML = "A senha deve conter pelo menos 4 caracteres!"} 
else if (senhadigitada === senhacorreta) {
   document.getElementById("resultado").innerHTML = mensagem;}
else {
    document.getElementById("resultado").innerHTML = "Senha Incorreta!"; }

})
console.log(nome);
console.log(idade);
console.log(genero);

