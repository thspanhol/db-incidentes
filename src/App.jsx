import { useState } from "react";
import "./App.css";
import new_db from "./new-db";

const testInc = {
  "incidente": "TOK875",
  "usd": "SOP-7777",
  "segmento": "AUTO",
  "dataAbertura": "23-Out",
  "horaAbertura": "18:00",
  "dataConclusao": "6-set",
  "horaConclusao": "14:54",
  "tempoProcesso": "Emissão",
  "produtoSistema": "Auto",
  "responsavelAjuste": "HDI",
  "tipoOcorrencia": "incidente",
  "canalAbertura": "suporte",
  "descricao": "Descrição teste.",
  "reincidente": "Não",
  "criticidade": "A",
  "status": "Solucionado",
  "prazoAjuste": "Aguarda prazo",
  "impactante": "Não",
  "retorno": "Teste Teste Teste Teste Teste Teste Teste Teste "
 };

 const now = new Date

 console.log(now.getDate())
 console.log(now.getHours())

function App() {

  const [DB, setDB] = useState(new_db);

  return (
    <>
      <p className="read-the-docs">Thales Spanhol</p>
      <button
        onClick={() => {
          let lastTOK = DB.find((e) => e.incidente.includes("TOK"));
          let nextTOK = parseInt(lastTOK.incidente.substring(3)) + 1;
          console.log(nextTOK);
        }}
      >
        Teste TOK
      </button>

      <button
        onClick={() => {
          setDB([testInc, ...DB])
        }}
      >
        Adicionar Incidente
      </button>
      {/* {new_db.map((inc) => (
        <p key={new_db.indexOf(inc)}>
          Incidente: {inc.incidente} - Nº USD: {inc.usd} - Segmento:{" "}
          {inc.segmento} - Data de Abertura: {inc.dataAbertura} - Hora de
          Abertura: {inc.horaAbertura} - Data Conclusão: {inc.dataConclusao} -
          Hora Conclusão: {inc.horaConclusao} - Produto/Sistema:{" "}
          {inc.produtoSistema} - Responsável pelo Ajuste:{" "}
          {inc.responsavelAjuste} - Tipo de Ocorrência: {inc.tipoOcorrencia} -
          Canal de Abertura: {inc.canalAbertura} - Descrição: {inc.descricao} -
          Reincidente: {inc.reincidente} - Criticidade: {inc.criticidade} -
          Status: {inc.status} - Prazo para Ajuste: {inc.prazoAjuste} -
          Impactante: {inc.impactante} - Retorno: {inc.retorno}
        </p>
      ))} */}
      <table border="1">
        <tr>
            <th>Incidente</th>
            <th>Nº USD</th>
            <th>Segmento</th>
            <th>Data Abertura</th>
            <th>Hora Abertura</th>
            <th>Data Conclusão</th>
            <th>Hora Conclusão</th>
            <th>Tempo de Processo</th>
            <th>Produto/Sistema</th>
            <th>Responsável pelo Ajuste</th>
            <th>Tipo de Ocorrência</th>
            <th>Canal de Abertura</th>
            <th>Descrição</th>
            <th>Reincidente</th>
            <th>Criticidade</th>
            <th>Status</th>
            <th>Prazo para Ajuste</th>
            <th>Crítico/Impactante</th>
            <th>Último Retorno</th>
        </tr>
        {
          DB.filter((inc) => inc.incidente.includes('TOK')).map((inc) => <tr key={DB.indexOf(inc)}>
          <td>{inc.incidente}</td>
          <td>{inc.usd}</td>
          <td>{inc.segmento}</td>
          <td>{inc.dataAbertura}</td>
          <td>{inc.horaAbertura}</td>
          <td>{inc.dataConclusao}</td>
          <td>{inc.horaConclusao}</td>
          <td>{inc.tempoProcesso}</td>
          <td>{inc.produtoSistema}</td>
          <td>{inc.responsavelAjuste}</td>
          <td>{inc.tipoOcorrencia}</td>
          <td>{inc.canalAbertura}</td>
          <td>{inc.descricao}</td>
          <td>{inc.reincidente}</td>
          <td>{inc.criticidade}</td>
          <td>{inc.status}</td>
          <td>{inc.prazoAjuste}</td>
          <td>{inc.impactante}</td>
          <td>{inc.retorno}</td>
      </tr>)
        }
    </table>
    </>
  );
}

export default App;
