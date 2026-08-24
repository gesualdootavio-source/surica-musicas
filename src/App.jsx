import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Musicas from "./pages/Musicas.jsx";
import CadastroMusica from "./pages/CadastroMusica.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import { musicasIniciais } from "./data/musicas.js";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("dashboard");
  const [menuAberto, setMenuAberto] = useState(false);
  const [musicas, setMusicas] = useState(musicasIniciais);
  const [musicaParaEditar, setMusicaParaEditar] = useState(null);

  // Navegar para o cadastro, começando do zero (sem edição)
  const irParaCadastro = () => {
    setMusicaParaEditar(null);
    setPaginaAtual("cadastro");
  };

  // Navegar para o cadastro, mas já preenchido com uma música existente
  const irParaEdicao = (musica) => {
    setMusicaParaEditar(musica);
    setPaginaAtual("cadastro");
  };

  const adicionarMusica = (dados) => {
    const novaMusica = { id: Date.now(), ...dados };
    setMusicas([...musicas, novaMusica]);
  };

  const atualizarMusica = (musicaAtualizada) => {
    setMusicas(
      musicas.map((musica) =>
        musica.id === musicaAtualizada.id ? musicaAtualizada : musica
      )
    );
  };

  const excluirMusica = (id) => {
    setMusicas(musicas.filter((musica) => musica.id !== id));
  };

  const navegar = (id) => {
    setMusicaParaEditar(null);
    setPaginaAtual(id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        paginaAtual={paginaAtual}
        onNavigate={navegar}
        menuAberto={menuAberto}
        aoFecharMenu={() => setMenuAberto(false)}
      />

      <div className="flex flex-1 flex-col">
        <Topbar aoAbrirMenu={() => setMenuAberto(true)} />

        <main className="flex-1">
          {paginaAtual === "dashboard" && <Dashboard musicas={musicas} />}

          {paginaAtual === "musicas" && (
            <Musicas
              musicas={musicas}
              aoExcluir={excluirMusica}
              aoIrParaEdicao={irParaEdicao}
              aoIrParaCadastro={irParaCadastro}
            />
          )}

          {paginaAtual === "cadastro" && (
            <CadastroMusica
              musicaParaEditar={musicaParaEditar}
              aoAdicionar={adicionarMusica}
              aoAtualizar={atualizarMusica}
            />
          )}

          {paginaAtual === "sobre" && <Sobre />}
          {paginaAtual === "contato" && <Contato />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
