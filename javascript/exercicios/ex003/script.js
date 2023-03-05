function contar(){
    var início = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('pas').value)
    var cont = início
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (fim == 0){
        res.innerText = 'Impossível contar!'
    } else{
        if (passo == 0){
            window.alert('Passo Inválido! Considerando PASSO 1.')
            passo = 1
        }
        
        for (cont; cont <= fim; cont += passo){
            res.append(cont)
            res.innerHTML += '&#x1F449;'
        }
        res.innerHTML += '&#x1F3C1;'
    }
}
