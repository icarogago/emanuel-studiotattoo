# Documentação de Alterações - Emanuel Lopes Studio Tattoo

## Alterações Realizadas em 2025

### 1. Atualização de Cores
- Implementado novo esquema de cores:
  - color1: #fdd736 (Amarelo mais claro)
  - color2: #cfad28 (Amarelo)
  - color3: #a1831b (Amarelo queimado)
  - color4: #72580d (Marrom claro)
  - color5: #442e00 (Marrom escuro)
  - color6: #000000 (Preto)
- Atualizados os valores hex das variáveis CSS e na configuração do Tailwind.

### 2. Atualização de Informações de Contato
- Email atualizado para: emanuellopes198@gmail.com
- Locais de atendimento unificados em um único item de contato na seção de Contato:
  - Conceição da Barra, ES
  - São Mateus, ES
- Removidas as 'Dicas para seu Orçamento' da seção de Contato, pois a descrição detalhada já é solicitada no campo de texto.
- Restaurada a formatação original do campo 'Descrição da Tatuagem' na seção de Contato.

### 3. Atualizações e Estilização do Portfólio e Vídeos
- O menu de navegação foi atualizado para incluir links separados para 'Galeria' (anteriormente Portfólio) e 'Vídeos'.
- O componente de Portfólio (`Portfolio.tsx`) foi dividido em duas seções distintas: 'Galeria' (ID `portfolio`) exibindo imagens .jpeg e 'Vídeos' (ID `videos`) exibindo vídeos .mp4.
- A galeria de imagens agora repete a primeira imagem no final para simetria visual.
- A galeria de vídeos exibe agora 6 vídeos, repetindo o primeiro vídeo se necessário para simetria (grade 3x2 em desktop).
- A formatação responsiva das galerias de imagens e vídeos foi ajustada para exibir 2 colunas em tablets (sm) e 3 colunas em desktops (lg).
- A estilização dos botões de filtro do portfólio foi ajustada:
  - Botão ativo com fundo `color4` e texto `color1`, hover com fundo `color5`.
  - Botões inativos com fundo `color3` e texto `color5`.
  - Efeito hover nos botões inativos com fundo `color5` (com opacidade baixa) e texto branco.
  - Borda da cor `color1` sempre visível nos botões de filtro.
- Implementado um visualizador de imagem em tela cheia (modal) ao clicar nas imagens da galeria.
- O modal do visualizador de imagem agora fecha ao clicar no botão X ou fora da imagem.

### 4. Atualizações no Header e Botões Flutuantes
- O título da aba e meta tags relacionadas foram alterados para "Emanuel Lopes Studio Tattoo".
- O item 'Contato' foi removido do menu de navegação no Header, mantendo apenas o botão de 'Orçamento' que direciona para a mesma seção.
- Adicionados botões flutuantes no canto inferior direito para WhatsApp, Instagram e subir ao topo da página.
- Os botões flutuantes agora são redondos.
- Os ícones dos botões flutuantes de WhatsApp e Instagram foram substituídos pelos SVGs retirados do footer para replicar a estética desejada.
- O botão flutuante para subir ao topo da página foi adicionado de volta e estilizado para ser redondo e ter o mesmo tamanho dos botões sociais.

### 5. Limpeza e Otimização
- Removidas dependências e referências ao Lovable (`lovable-tagger`) do package.json, vite.config.ts e index.html.
- Atualizadas as meta tags no index.html para refletir o nome correto do projeto.

### 6. Animações
- Adicionada animação de contagem crescente nos números da seção 'Sobre' utilizando `react-countup`.
- Implementado `IntersectionObserver` para iniciar a animação quando a seção 'Sobre' se torna visível.
- Atualizado o valor dos anos de experiência de 8 para 3 na estatística e texto descritivo na seção 'Sobre'.

### 7. Estrutura de Arquivos
- Criada a pasta `public/img/videos`.
- Vídeos com extensão .mp4 foram movidos da pasta `public/img` para `public/img/videos`.