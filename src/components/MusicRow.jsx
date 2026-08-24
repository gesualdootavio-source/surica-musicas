import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaPlay,
  FaPause,
} from "react-icons/fa";

// Componente reutilizável — recebe a música e as funções via props
const MusicRow = ({ musica, aoEditar, aoExcluir, tocando, aoAlternarReproducao }) => {
  const { titulo, artista, genero, duracao, status } = musica;
  const disponivel = status === "Disponível";

  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-medium text-black">{titulo}</p>
        <p className="text-sm text-gray-500">
          {artista} · {genero} · {duracao}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => aoAlternarReproducao(musica.id)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          aria-label={tocando ? `Pausar ${titulo}` : `Reproduzir ${titulo}`}
          aria-pressed={tocando}
          title={tocando ? "Pausar" : "Reproduzir"}
        >
          {tocando ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
        </button>

        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
            disponivel ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
          }`}
        >
          {disponivel ? <FaCheckCircle size={12} /> : <FaTimesCircle size={12} />}
          {status}
        </span>

        <button
          onClick={() => aoEditar(musica)}
          className="text-purple-600 hover:text-purple-800"
          aria-label="Editar"
        >
          <FaEdit size={16} />
        </button>

        <button
          onClick={() => aoExcluir(musica.id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Excluir"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default MusicRow;
