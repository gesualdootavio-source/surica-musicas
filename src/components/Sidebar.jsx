import { FaHome, FaMusic, FaPlusCircle, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const itensMenu = [
  { id: "dashboard", nome: "Dashboard", icone: FaHome },
  { id: "musicas", nome: "Músicas", icone: FaMusic },
  { id: "cadastro", nome: "Cadastrar música", icone: FaPlusCircle },
  { id: "sobre", nome: "Sobre", icone: FaInfoCircle },
  { id: "contato", nome: "Contato", icone: FaEnvelope },
];

// Sidebar recebe a página atual e a função de navegar via props
const Sidebar = ({ paginaAtual, onNavigate, menuAberto, aoFecharMenu }) => {
  const irPara = (id) => {
    onNavigate(id);
    aoFecharMenu();
  };

  return (
    <>
      {/* Fundo escuro atrás do menu no celular */}
      {menuAberto && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={aoFecharMenu}
        />
      )}

      <aside
        className={`fixed z-40 h-screen w-64 transform bg-black text-white transition-transform md:static md:translate-x-0 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2 text-lg font-bold text-purple-400">
            <FaMusic /> Surica Músicas
          </div>
          <button className="md:hidden" onClick={aoFecharMenu}>
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-3">
          {itensMenu.map(({ id, nome, icone: Icone }) => (
            <button
              key={id}
              onClick={() => irPara(id)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                paginaAtual === id
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icone size={16} />
              {nome}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
