import { useState } from "react";
import { musicaSchema } from "../schemas/musicaSchema.js";
import Button from "./Button.jsx";
import { FaSave } from "react-icons/fa";

const valoresVazios = { titulo: "", artista: "", genero: "", duracao: "", status: "Disponível" };

// Formulário reutilizável — funciona tanto para cadastrar quanto para editar,
// dependendo dos valores iniciais que recebe via props
const MusicForm = ({ valoresIniciais = valoresVazios, aoSalvar, textoBotao = "Salvar música" }) => {
  const [valores, setValores] = useState(valoresIniciais);
  const [erros, setErros] = useState({});

  const handleChange = (campo, valor) => {
    setValores({ ...valores, [campo]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultado = musicaSchema.safeParse(valores);

    if (!resultado.success) {
      const novosErros = {};
      resultado.error.issues.forEach((erro) => {
        novosErros[erro.path[0]] = erro.message;
      });
      setErros(novosErros);
      return;
    }

    setErros({});
    aoSalvar(valores);
    setValores(valoresVazios);
  };

  const classeCampo = (campo) =>
    `w-full rounded-lg border px-3 py-2 text-sm ${
      erros[campo] ? "border-red-400" : "border-gray-300 focus:border-purple-500"
    } focus:outline-none`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm text-gray-600">Título</label>
        <input
          type="text"
          value={valores.titulo}
          onChange={(e) => handleChange("titulo", e.target.value)}
          className={classeCampo("titulo")}
        />
        {erros.titulo && <p className="mt-1 text-sm text-red-600">{erros.titulo}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">Artista</label>
        <input
          type="text"
          value={valores.artista}
          onChange={(e) => handleChange("artista", e.target.value)}
          className={classeCampo("artista")}
        />
        {erros.artista && <p className="mt-1 text-sm text-red-600">{erros.artista}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm text-gray-600">Gênero</label>
          <input
            type="text"
            value={valores.genero}
            onChange={(e) => handleChange("genero", e.target.value)}
            placeholder="Ex: MPB"
            className={classeCampo("genero")}
          />
          {erros.genero && <p className="mt-1 text-sm text-red-600">{erros.genero}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-600">Duração</label>
          <input
            type="text"
            value={valores.duracao}
            onChange={(e) => handleChange("duracao", e.target.value)}
            placeholder="Ex: 3:45"
            className={classeCampo("duracao")}
          />
          {erros.duracao && <p className="mt-1 text-sm text-red-600">{erros.duracao}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">Status</label>
        <select
          value={valores.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className={classeCampo("status")}
        >
          <option value="Disponível">Disponível</option>
          <option value="Indisponível">Indisponível</option>
        </select>
      </div>

      <Button type="submit" icon={FaSave} className="self-start">
        {textoBotao}
      </Button>
    </form>
  );
};

export default MusicForm;
