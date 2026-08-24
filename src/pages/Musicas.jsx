import { useState } from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import MusicRow from "../components/MusicRow.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Button from "../components/Button.jsx";

const Musicas = ({ musicas, aoExcluir, aoIrParaEdicao, aoIrParaCadastro }) => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todas");
  const [musicaTocando, setMusicaTocando] = useState(null);

  const alternarReproducao = (id) => {
    setMusicaTocando((idAtual) => (idAtual === id ? null : id));
  };

  // filter() — aplica o texto pesquisado e o status escolhido no filtro
  const musicasFiltradas = musicas.filter((musica) => {
    const texto = busca.toLowerCase();
    const bateBusca =
      musica.titulo.toLowerCase().includes(texto) ||
      musica.artista.toLowerCase().includes(texto);
    const bateFiltro = filtro === "Todas" || musica.status === filtro;
    return bateBusca && bateFiltro;
  });

  const confirmarExclusao = (id) => {
    const confirmou = window.confirm("Deseja realmente excluir esta música?");
    if (confirmou) aoExcluir(id);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Músicas</h1>
          <p className="text-gray-500">Gerencie todas as músicas cadastradas.</p>
        </div>
        <Button icon={FaPlusCircle} onClick={aoIrParaCadastro}>
          Nova música
        </Button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar por título ou artista..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-purple-500 focus:outline-none"
          />
        </div>
        
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none"
        >
          <option value="Todas">Todas</option>
          <option value="Disponível">Disponíveis</option>
          <option value="Indisponível">Indisponíveis</option>
        </select>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        {musicasFiltradas.length === 0 ? (
          <EmptyState />
        ) : (
          musicasFiltradas.map((musica) => (
            <MusicRow
              key={musica.id}
              musica={musica}
              aoEditar={aoIrParaEdicao}
              aoExcluir={confirmarExclusao}
              tocando={musicaTocando === musica.id}
              aoAlternarReproducao={alternarReproducao}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Musicas;
