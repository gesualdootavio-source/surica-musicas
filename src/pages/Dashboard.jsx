import { FaMusic, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import StatCard from "../components/StatCard.jsx";

const Dashboard = ({ musicas }) => {
  // filter() — separa disponíveis e indisponíveis para as estatísticas
  const disponiveis = musicas.filter((m) => m.status === "Disponível");
  const indisponiveis = musicas.filter((m) => m.status === "Indisponível");

  // slice() — método adicional, pega só as 3 músicas mais recentes (últimas adicionadas)
  const recentes = musicas.slice(-3).reverse();

  return (
    <div className="p-4 md:p-8">
      <h1 className="mb-1 text-2xl font-bold text-black">Dashboard</h1>
      <p className="mb-6 text-gray-500">Visão geral do catálogo de músicas.</p>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          titulo="Total de músicas"
          numero={musicas.length}
          descricao="cadastradas no sistema"
          icone={FaMusic}
        />
        <StatCard
          titulo="Disponíveis"
          numero={disponiveis.length}
          descricao="prontas para tocar"
          icone={FaCheckCircle}
        />
        <StatCard
          titulo="Indisponíveis"
          numero={indisponiveis.length}
          descricao="fora do ar no momento"
          icone={FaTimesCircle}
        />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-gray-700">
          <FaClock size={14} />
          <h2 className="font-semibold">Músicas recentes</h2>
        </div>

        {recentes.length === 0 ? (
          <p className="text-sm text-gray-400">Nenhuma música cadastrada ainda.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {recentes.map((musica) => (
              <li key={musica.id} className="flex items-center justify-between text-sm">
                <span>
                  {musica.titulo} — <span className="text-gray-500">{musica.artista}</span>
                </span>
                <span
                  className={
                    musica.status === "Disponível" ? "text-green-600" : "text-gray-400"
                  }
                >
                  {musica.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
