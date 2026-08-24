// Componente reutilizável de conteúdo — card de estatística do dashboard
const StatCard = ({ titulo, numero, descricao, icone: Icone }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
      <Icone size={18} />
    </div>
    <p className="text-sm text-gray-500">{titulo}</p>
    <p className="text-2xl font-bold text-black">{numero}</p>
    <p className="text-xs text-gray-400">{descricao}</p>
  </div>
);

export default StatCard;
