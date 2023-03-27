function tabuada(){
    var ntxt = document.getElementById('num').value
    if (ntxt == ''){
        window.alert('Você precisa digitar um número little human.')
    } else{
        var res = document.querySelector('div#res')
        var num = Number(ntxt)
        var cont = 1
        res.innerHTML = ''
        res.style.backgroundColor = 'teal'
        res.style.color = 'white'
        while (cont <= 10){
            res.innerHTML += `<span>${num} x ${cont} = ${num * cont}</span><br>`
            cont += 1
        }
    }
}
