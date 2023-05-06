function Lista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas</h3>
      {/* Para executar qualquer tipo de lógica é necessario "{}" */}
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Nenhum item foi encontrado.</p>
      )}
    </>
  );
}

export default Lista;
