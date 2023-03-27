let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let vetores = []

function isNumero(n){
    if (Number(n) > 0 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(valor, lista){
    if (lista.indexOf(valor) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, vetores)){
        
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
