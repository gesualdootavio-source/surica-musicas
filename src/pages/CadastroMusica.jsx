import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import MusicForm from "../components/MusicForm.jsx";

const CadastroMusica = ({ musicaParaEditar, aoAdicionar, aoAtualizar }) => {
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const editando = Boolean(musicaParaEditar);

  const handleSalvar = (dados) => {
    if (editando) {
      aoAtualizar({ ...musicaParaEditar, ...dados });
      setMensagemSucesso("Música atualizada com sucesso!");
    } else {
      aoAdicionar(dados);
      setMensagemSucesso("Música cadastrada com sucesso!");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="mb-1 text-2xl font-bold text-black">
        {editando ? "Editar música" : "Cadastrar música"}
      </h1>
      <p className="mb-6 text-gray-500">
        {editando ? "Altere os dados abaixo." : "Preencha os dados da nova música."}
      </p>

      {mensagemSucesso && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-100 px-4 py-3 text-sm text-green-700">
          <FaCheckCircle /> {mensagemSucesso}
        </div>
      )}

      <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <MusicForm
          valoresIniciais={
            musicaParaEditar ?? {
              titulo: "",
              artista: "",
              genero: "",
              duracao: "",
              status: "Disponível",
            }
          }
          aoSalvar={handleSalvar}
          textoBotao={editando ? "Salvar alterações" : "Cadastrar música"}
        />
      </div>
    </div>
  );
};

export default CadastroMusica;
