const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzLwebsUQSGZbHEMFmIQc-1LlWeGLsKW7YL8iCAwHO-HG2nuaFLqdhIx8GqeeRmAqBr/exec";


const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function(evento){
    evento.preventDefault() // impede que a página atualize
   
    aviso.textContent = "Enviando...";

    fetch(URL_PLANILHA,{
        method:"POST",
        mode: "no-cors",
        body: new FormData(form)
    })

    .then(function(){
        aviso.textContent = "Enviado com sucesso!";
        form.reset()
    })
    .catch(function(){
        aviso.textContent = "Erro ao enviar. Tente de novo";
    })

})