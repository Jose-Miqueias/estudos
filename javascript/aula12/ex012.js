var data = new Date()
var hora = data.getHours()
console.log(`Agora são exatamente ${data.getHours()}:${data.getMinutes()}`)
if (hora < 12){
    console.log('Um bom dia para você!')
} else if (hora < 18){
    console.log('Uma ótima tarde para você!')
} else if (hora < 23){
    console.log('Uma linda noite para você!')
}
