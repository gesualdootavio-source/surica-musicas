import { FaBars } from "react-icons/fa";

// Barra superior simples, só aparece no celular pra abrir o menu
const Topbar = ({ aoAbrirMenu }) => (
  <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 md:hidden">
    <button onClick={aoAbrirMenu}>
      <FaBars size={20} />
    </button>
    <span className="font-semibold text-purple-700">Surica Músicas</span>
  </div>
);

export default Topbar;
