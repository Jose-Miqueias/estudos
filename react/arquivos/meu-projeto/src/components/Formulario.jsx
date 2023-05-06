import styles from "./Formulario.module.css";
import { useState } from "react";

function Formulario() {
  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`Usuário: ${name} \nSenha: ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.container}>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Senha: </label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" className={styles.sub} />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
