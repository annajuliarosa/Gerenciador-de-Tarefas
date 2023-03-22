import React from "react";
import { useState } from "react";

export function PagPrincipal() {
  const [tarefa, setTarefa] = useState("");
  const [tarefa2, setTarefa2] = useState([]);

  const [novoEstado, setNovoEstado] = useState();
  //   const [selecionado, setSelecionado] = useState(false)

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

    const novo = [...tarefa2];

    novo[acharIndex].checkado = !novo[acharIndex].checkado;
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
                  <p>{tar.name}</p>
                  <input type="checkbox" onClick={() => check(tar.name)} />
                </label>
              </>
            </div>
          </div>

          <button className=" " onClick={() => remove(tar.name)}>
            Excluir
          </button>
        </>
      ))}
    </div>
  );
}