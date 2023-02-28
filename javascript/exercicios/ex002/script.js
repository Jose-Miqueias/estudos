var sexo = ""

function mudouSexoM(){
    sexo = "M"
}
function mudouSexoF(){
    sexo = "F"
}

function verificar(){
    var nascimento = Number(document.getElementById('ano').value)
    var idade = (new Date().getFullYear()) - nascimento

    if (idade >= 0 && idade < 140){
        imagem.style.width = '250px'
        imagem.style.height = '250px'
        imagem.style.backgroundPosition = 'left center'

        if (sexo == 'F'){
            msg.innerText = `Detectamos Mulher com ${idade} anos.`
            if (idade < 12){
                imagem.style.backgroundImage = 'url("imagens/criança-g.jpg")'
            } else if (idade < 18){
                imagem.style.backgroundImage = 'url("imagens/adolecente-g.jpg")'
            } else if (idade < 60){
                imagem.style.backgroundImage = 'url("imagens/mulher.jpg")'
            } else if (idade < 120){
                imagem.style.backgroundImage = 'url("imagens/idosa.jpg")'
            }

        } else if (sexo == 'M'){
            msg.innerText = `Detectamos Homem com ${idade} anos.`
            if (idade < 12){
                imagem.style.backgroundImage = 'url("imagens/criança-m.jpg")'
            } else if (idade < 18){
                imagem.style.backgroundImage = 'url("imagens/adolecente-m.jpg")'
            } else if (idade < 60){
                imagem.style.backgroundImage = 'url("imagens/homem.jpg")'
                imagem.style.backgroundPosition = 'center center'
            } else if (idade < 120){
                imagem.style.backgroundImage = 'url("imagens/idoso.jpg")'
            }
        }
    } else{
        window.alert('Error. Dados fornecidos inválidos! Tente novamente.')
    }
}