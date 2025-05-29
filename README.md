# Emanuel Lopes Studio Tattoo

Este é o site oficial do Emanuel Lopes Studio Tattoo, apresentando o trabalho do artista, portfólio de tatuagens (imagens e vídeos) e informações de contato para orçamentos.

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (para ícones)
- React CountUp (para animação de números)

## Como Começar

1. Clone este repositório:
   ```bash
   git clone https://github.com/icarogago/emanuel-studiotattoo.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd emanuel-studiotattoo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O site estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## Estrutura do Projeto

- `public/`: Contém arquivos estáticos como imagens (`img/`) e vídeos (`img/videos/`).
- `src/`: Código fonte da aplicação.
  - `components/`: Componentes reutilizáveis da UI (Header, Footer, Portfolio, Contact, etc.).
  - `pages/`: Páginas principais do site (Index, NotFound).
  - `styles/`: Arquivos de estilo globais e de tema.
  - `lib/`: Utilitários e configurações.
  - `hooks/`: Hooks personalizados.
- `docs/`: Documentação adicional, incluindo o arquivo `step-by-step.md` com o histórico de alterações.

## Personalização

- **Cores:** Altere as variáveis de cor no `tailwind.config.js` e `src/styles/globals.css`.
- **Conteúdo:** Edite os textos e informações nos componentes relevantes (About, Contact, etc.).
- **Portfólio:** Adicione/remova imagens (`public/img/`) e vídeos (`public/img/videos/`) e atualize as listas `imageList` e `videoList` em `src/components/Portfolio.tsx`.
- **Menu:** Ajuste os itens do menu no `src/components/Header.tsx`.
