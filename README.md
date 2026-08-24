# Surica Músicas

Sistema de catálogo de músicas — trabalho da Sprint de React.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## Tecnologias

- React + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Zod (validação do formulário)
- React Icons

## Funcionalidades

- Dashboard com cards de estatísticas (total, disponíveis, indisponíveis) e lista de músicas recentes
- Página de músicas com pesquisa (por título/artista) e filtro por status
- Cadastro de música com validação (Zod) e mensagens de erro por campo
- Edição de música reaproveitando o mesmo formulário do cadastro
- Exclusão com confirmação
- Menu lateral (sidebar) que vira menu recolhível no celular
- Cores: preto, roxo e branco

## Estrutura

```
src/
├── components/
│   ├── Sidebar.jsx      menu lateral com navegação
│   ├── Topbar.jsx        barra superior (só no celular, abre o menu)
│   ├── Footer.jsx        rodapé
│   ├── Button.jsx        botão reutilizável
│   ├── StatCard.jsx      card de estatística do dashboard
│   ├── MusicRow.jsx      linha de música na listagem (editar/excluir)
│   ├── MusicForm.jsx     formulário reutilizável (cadastro e edição)
│   └── EmptyState.jsx    mensagem para lista/pesquisa vazia
├── pages/
│   ├── Dashboard.jsx
│   ├── Musicas.jsx
│   ├── CadastroMusica.jsx
│   ├── Sobre.jsx
│   └── Contato.jsx
├── data/
│   └── musicas.js        array inicial de músicas
├── schemas/
│   └── musicaSchema.js   regras de validação do Zod
├── App.jsx                estado geral e navegação
└── main.jsx
```

## Decisões para manter simples (nível iniciante)

O prompt original pedia coisas mais avançadas — deixei de fora de propósito
pra não complicar além do que já foi visto em aula:

- **Sem React Router:** a navegação troca de página com `useState`, em vez de rotas.
- **Sem localStorage:** os dados ficam só na memória (somem ao atualizar a página).
  Se quiser, dá pra adicionar depois — é só salvar o array `musicas` no
  `localStorage` toda vez que ele mudar.
- **Sem modal customizado:** a confirmação de exclusão usa `window.confirm()`,
  a caixa de diálogo nativa do navegador.
- **reduce() trocado por slice():** usei `slice()` para pegar as músicas
  recentes no dashboard, mais fácil de entender que `reduce()`.

## Onde cada requisito foi atendido

| Requisito | Onde |
|---|---|
| Componentização | `Sidebar`, `Footer`, `StatCard`, `MusicRow`, `MusicForm`, `Button` |
| Props | `MusicRow` e `MusicForm` recebem dados e funções via props |
| map() / filter() | `Musicas.jsx` (pesquisa e filtro), `Dashboard.jsx` (estatísticas) |
| Outro método de array | `slice()` em `Dashboard.jsx` |
| Zod | `schemas/musicaSchema.js`, usado em `MusicForm.jsx` |
| Mensagens de erro | Abaixo de cada campo do formulário |
| Mensagem de sucesso | `CadastroMusica.jsx` após salvar |
| Cadastro / Edição / Exclusão | `App.jsx` (funções) + `Musicas.jsx` + `CadastroMusica.jsx` |
| Confirmação de exclusão | `window.confirm()` em `Musicas.jsx` |
| Navegação | `Sidebar.jsx` + estado `paginaAtual` no `App.jsx` |
| Responsividade | Sidebar vira menu recolhível no celular (`Topbar.jsx`) |
| React Icons | Em toda a interface |

## Próximos passos

1. `npm install` e testar local.
2. Subir num repositório no GitHub.
3. Deploy na Vercel.
4. Colar os dois links na entrega.
