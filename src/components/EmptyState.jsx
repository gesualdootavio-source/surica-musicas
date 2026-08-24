import { FaMusic } from "react-icons/fa";

const EmptyState = ({ mensagem = "Nenhuma música encontrada." }) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center text-gray-500">
    <FaMusic size={28} className="text-purple-300" />
    <p>{mensagem}</p>
    <p className="text-sm text-gray-400">Tente outro termo ou cadastre uma nova música.</p>
  </div>
);

export default EmptyState;
