
var numLista = []
var res = document.getElementById('res')

function adicionar(){
    let numtxt = document.getElementById('num').value
    let num = Number(numtxt)
    var tab = document.getElementById('seltab')
    if (numtxt.length == 0 || num < 1 || num > 100 || numLista.indexOf(num) != -1){
        window.alert('Valor inválido ou já se encontra na lista.')
    } else{
        numLista.push(num)
        res.innerHTML = ''
        opt = document.createElement('option')
        opt.innerText = `Valor ${num} adicionado`
        tab.appendChild(opt)

    }
}

function finalizar(){
    if (numLista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        res.innerHTML = ''
        let maior = numLista[0]
        let menor = numLista[0]
        let tot = Number()
        let média = Number()
        for (n in numLista){
            if (numLista[n] > maior){
                maior = numLista[n]
            }
            if (numLista[n] < menor){
                menor = numLista[n]
            }

            tot += numLista[n]
        }
        média = parseInt(tot / numLista.length)
        res.innerHTML += `<p>Ao todo, temos ${numLista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${tot}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}</p>`
    }
}