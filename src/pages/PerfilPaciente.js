import React, { useState } from "react";
import "./PerfilPaciente.scss";
import {
  FaList,
  FaCheck,
  FaUserAlt,
  FaWindowClose,
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";

import Header from "./Header";

function PerfilPaciente() {
  const [resultado, setResultado] = useState("");
  const [peso, setPeso] = useState(0);

  const alterarResultado = () => {
    if (peso > 100) {
      setResultado("Você deve tomar o remédio duas vezes ao dia!");
    } else {
      setResultado("Você deve tomar o remédio uma vez ao dia!");
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="dados-paciente">
        <div className="header-card-paciente">
          <FaUserAlt color={"#2b6cb0"} className="icon-user" />
          <button className="alert-red">
            <h5>INTERROMPER</h5>
            <FaWindowClose color={"#FFF"} />
          </button>
        </div>

        <div className="card-ficha-paciente">
          <div className="item-card-paciente">
            <h4>Paciente</h4>
            <div className="ficha-paciente">
              <p>FICHA DO PACIENTE</p>
            </div>
          </div>
          <div className="item-card-nome">
            <p className="ficha-nome">Nome: João da Silva Alves</p>
          </div>
          <hr />
          <div className="item-card-sintomas">
            <h6>ÍNICIO DOS SINTOMAS:</h6>
            <p>
              <span>A 45min atrás</span>
            </p>
          </div>
        </div>

        <div className="card-item card-container">
          <h4> 1º - Emergência</h4>
          <div>
            <FaCheck color={"#48bb78"} style={{ marginLeft: 5 }} />
            <FaList color={"#a0aec0"} style={{ marginLeft: 5 }} />
          </div>
        </div>

        <div className="card-item card-container">
          <h4> 2º - Neurologista</h4>
          <div>
            <FaCheck color={"#48bb78"} style={{ marginLeft: 5 }} />
            <FaList color={"#a0aec0"} style={{ marginLeft: 5 }} />
          </div>
        </div>

        <div className="card-item card-container">
          <h4> 3º - Contraindicações</h4>
          <div>
            <FaCheck color={"#48bb78"} style={{ marginLeft: 5 }} />
            <FaList color={"#a0aec0"} style={{ marginLeft: 5 }} />
          </div>
        </div>

        <div className="card-container">
          <div className="card-item selecionado">
            <h4> 4º - Medicação</h4>
            <FaList color={"#2b6cb0"} style={{ marginLeft: 5 }} />
          </div>
          <div className="medicacao">
            <div className="alert">
              <FaExclamationCircle color={"#2b6cb0"} className="icon-alert" />
              <h4 className="medicacao-alert">Medicação Recomendada</h4>
            </div>
            <div className="alteplase">
              <p className="alteplase-text">
                <span>ALTERPLASE EV 0,9 MG/KG</span>
                <br />
                10% EM BOLUS E 90% EM 1 HORA
              </p>
            </div>
            <p className="border-alteplace-top">
              DOSE MÁXIMA DE ALTEPLASE: 90 MG (90 ML)
            </p>
          </div>

          <form className="calculo">
            <legend>
              <h3>Faça o cálculo</h3>
            </legend>

            <fieldset className="peso">
              <label>Peso (Kg)</label>
              <input
                type="number"
                placeholder="DIGITE"
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
              ></input>
            </fieldset>

            <button
              onClick={(event) => {
                event.preventDefault();
                alterarResultado();
              }}
            >
              <span>Calcular</span>
            </button>
            <div className="clear"></div>

            <fieldset className="resultado">
              <label>Resultado</label>
              <textarea
                name="resultado"
                value={resultado}
                onChange={(event) => setResultado(event.target.value)}
              ></textarea>
            </fieldset>
          </form>
        </div>

        <div className="card-item card-container card-inativo">
          <h4> 5º - Conduta e Desfechos</h4>
          <FaList color={"#2b6cb0"} style={{ marginLeft: 5 }} />
        </div>
      </main>

      <button className="salvar">
        <span>SALVAR</span>
        <FaArrowRight color={"white"} className="icon" />
      </button>
    </div>
  );
}

export default PerfilPaciente;
