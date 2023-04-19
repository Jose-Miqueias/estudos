function Pessoa({nome, idade, poder, foto}) {
    return (
        <div>
            <div className="imagem"><img src={foto} alt={nome} /></div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Poder: {poder}</p>
        </div>
    )
}

export default Pessoa