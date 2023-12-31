import { useEffect, useState } from "react";
import "./App.css";
import new_db from "./new-db";
import {
  QuerySnapshot,
  addDoc,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { fireDB } from "./firebase";

const testInc = {
  incidente: "TOK875",
  usd: "SOP-7777",
  segmento: "AUTO",
  dataAbertura: "23-Out",
  horaAbertura: "18:00",
  dataConclusao: "6-set",
  horaConclusao: "14:54",
  tempoProcesso: "Emissão",
  produtoSistema: "Auto",
  responsavelAjuste: "HDI",
  tipoOcorrencia: "incidente",
  canalAbertura: "suporte",
  descricao: "Descrição teste.",
  reincidente: "Não",
  criticidade: "A",
  status: "Solucionado",
  prazoAjuste: "Aguarda prazo",
  impactante: "Não",
  retorno: "Teste Teste Teste Teste Teste Teste Teste Teste ",
};

const now = new Date();

console.log(now.getDate());
console.log(now.getHours());

function App() {
  const [DB, setDB] = useState(new_db);
  const [fire, setFire] = useState(["teste1", "teste2"]);

  const criarIncidente = async () => {
    for (const incidente of DB) {
      let newInc = { ...incidente };
      newInc.descricao = "Descrição teste.";
      newInc.retorno = "Teste Teste Teste Teste Teste Teste Teste Teste";
      await addDoc(collection(fireDB, "incidentes"), newInc);
    }
  };

  // Ler Incidentes

  useEffect(() => {
    const q = query(collection(fireDB, "incidentes"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let incidentesArr = [];
      QuerySnapshot.forEach((doc) => {
        incidentesArr.push({ ...doc.data(), id: doc.id });
      });
      setFire(incidentesArr);
    });
    return () => unsubscribe();
  }, []);

  console.log(fire);

  // Atualizar Incidente
  // Deletar Incidente

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

      <button onClick={criarIncidente}>Adiciona Incidente</button>

      <button
        onClick={() => {
          setDB(testInc);
        }}
      >
        Adicionar Incidente
      </button>
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
        {DB.filter((inc) => inc.incidente.includes("TOK")).map((inc) => (
          <tr key={DB.indexOf(inc)}>
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
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
