// Componente reutilizável de botão
const Button = ({ children, icon: Icone, variante = "roxo", className = "", ...props }) => {
  const estilos = {
    roxo: "bg-purple-600 text-white hover:bg-purple-700",
    contorno: "border border-purple-600 text-purple-600 hover:bg-purple-50",
    perigo: "border border-red-300 text-red-600 hover:bg-red-50",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${estilos[variante]} ${className}`}
      {...props}
    >
      {Icone && <Icone size={14} />}
      {children}
    </button>
  );
};

export default Button;
