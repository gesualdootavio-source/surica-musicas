import { z } from "zod";

// Schema do Zod — regras de validação do formulário de música
export const musicaSchema = z.object({
  titulo: z.string().min(3, "Digite um título com pelo menos 3 caracteres."),
  artista: z.string().min(3, "Digite o nome do artista."),
  genero: z.string().min(1, "Escolha um gênero."),
  duracao: z
    .string()
    .regex(/^\d{1,2}:\d{2}$/, "Use o formato minuto:segundo, tipo 3:45."),
  status: z.enum(["Disponível", "Indisponível"]),
});
