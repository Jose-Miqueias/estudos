function contar(){
    let início = document.querySelector('input#ini')
    let fim = document.getElementsByName('fim')[0]
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(início.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo Inválido. Considerarei o PASSO 1.')
            p = 1
        }
        
        if (i < f){ // Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
           }
        } else if (i > f){ // Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
