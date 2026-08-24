import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contato = () => (
  <div className="p-4 md:p-8">
    <h1 className="mb-1 text-2xl font-bold text-black">Contato</h1>
    <p className="mb-6 text-gray-500">Fale com a equipe do Surica Músicas.</p>

    <div className="grid max-w-md gap-4">
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <FaEnvelope className="text-purple-600" />
        <span className="text-sm text-gray-700">contato@suricamusicas.com.br</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <FaPhone className="text-purple-600" />
        <span className="text-sm text-gray-700">(11) 4000-0000</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <FaMapMarkerAlt className="text-purple-600" />
        <span className="text-sm text-gray-700">Rua das Melodias, 123 — São Paulo/SP</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <FaClock className="text-purple-600" />
        <span className="text-sm text-gray-700">Seg a sex, 9h às 18h</span>
      </div>
    </div>
  </div>
);

export default Contato;
