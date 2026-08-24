import { FaMusic, FaHeart, FaUsers } from "react-icons/fa";

const Sobre = () => (
  <div className="p-4 md:p-8">
    <h1 className="mb-1 text-2xl font-bold text-black">Sobre o Surica Músicas</h1>
    <p className="mb-6 max-w-2xl text-gray-500">
      O Surica Músicas é um sistema fictício criado para gerenciar o catálogo de
      músicas de uma pequena gravadora independente. A proposta é simples: dar
      controle total sobre o que está disponível para os ouvintes, com uma
      interface organizada e fácil de usar.
    </p>

    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <FaMusic className="mb-2 text-purple-600" size={20} />
        <h2 className="mb-1 font-semibold text-black">Catálogo organizado</h2>
        <p className="text-sm text-gray-500">Todas as músicas em um só lugar, fáceis de encontrar.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <FaUsers className="mb-2 text-purple-600" size={20} />
        <h2 className="mb-1 font-semibold text-black">Feito para artistas</h2>
        <p className="text-sm text-gray-500">Pensado para pequenos selos e artistas independentes.</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <FaHeart className="mb-2 text-purple-600" size={20} />
        <h2 className="mb-1 font-semibold text-black">Feito com carinho</h2>
        <p className="text-sm text-gray-500">Projeto de estudo, mas com cuidado de produto real.</p>
      </div>
    </div>
  </div>
);

export default Sobre;
