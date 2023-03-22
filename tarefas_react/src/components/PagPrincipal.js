import React from "react";
import { useState } from "react";

export function PagPrincipal() {
  const [tarefa, setTarefa] = useState("");
  const [tarefa2, setTarefa2] = useState([]);

  const [novoEstado, setNovoEstado] = useState();

  const novaTarefa = {
    name: tarefa,
    checkado: false,
  };

  function adicionar() {
    setTarefa2((prevState) => [...prevState, novaTarefa]);
    setTarefa("");
  }

  function remove(i) {
    setTarefa2((t) => t.filter((tar) => tar.name !== i));
  }

  function check(i) {
    const acharIndex = tarefa2.findIndex((acha) => {
      return acha.name == i;
    });

    const novo = [tarefa2];

    novo[acharIndex].checkado = !novo[acharIndex].checkado;

    // Adicionado a linha setTarefa2(novo) para atualizar o estado logo que modifica o Objeto
    setTarefa2(novo);
  }

  function handleChange(e) {
    setTarefa(e.target.value);
  }

  return (
    <div className="tudo">
      <label>Tarefa do dia: </label>
      <input type="text" name="nome" value={tarefa} onChange={handleChange} />
      <button onClick={adicionar}>Incluir</button>

      {tarefa2.map((tar, i) => (
        <>
          <div className="container">
            <div className={tar.checkado ? "completed" : " "}>
              <>
                <label>
                  {tar.name}
                  <input type="checkbox" onClick={() => check(tar.name)} />
                </label>
              </>
            </div>
            <button className=" " onClick={() => remove(tar.name)}>
              Excluir
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
