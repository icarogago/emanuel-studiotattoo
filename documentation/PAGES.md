# Documentação de Páginas - Emanuel Lopes Studio Tattoo

## Página Inicial (/)

### Seções
1. Hero
   - Imagem de destaque
   - Título principal (Emanuel Lopes em cima, Studio Tattoo embaixo)
   - Call-to-action
   - Botão de agendamento

2. Sobre
   - História do estúdio
   - Missão e valores
   - Equipe
   - Diferenciais

3. Portfólio
   - Galeria de trabalhos
   - Filtros por estilo
   - Preview de imagens
   - Link para galeria completa

4. Serviços
   - Lista de serviços
   - Preços
   - Descrições
   - Processo de trabalho

5. Depoimentos
   - Carrossel de clientes
   - Avaliações
   - Fotos de resultados
   - Estrelas de avaliação

## Galeria (/gallery)

### Funcionalidades
- Grid de imagens
- Filtros por categoria
- Lightbox
- Compartilhamento
- Download de imagens

### Categorias
- Tatuagens tradicionais
- Realismo
- Minimalista
- Aquarela
- Geométrico
- Outros

## Agendamento (/appointment)

### Formulário
- Seleção de data
- Seleção de horário
- Tipo de serviço
- Descrição do projeto
- Upload de referências
- Informações de contato

### Processo
1. Escolha do serviço
2. Seleção de data/hora
3. Detalhes do projeto
4. Confirmação
5. Email de confirmação

## Sobre (/about)

### Conteúdo
- História do estúdio
- Equipe de tatuadores
- Certificações
- Premiações
- Filosofia de trabalho

### Galeria
- Fotos do estúdio
- Equipamentos
- Ambiente
- Processos

## Contato (/contact)

### Informações
- Endereço: São Mateus, ES
- Telefone
- Email
- Redes sociais
- Horário de funcionamento

### Formulário
- Nome
- Email
- Assunto
- Mensagem
- Preferência de contato

## Blog (/blog)

### Estrutura
- Lista de posts
- Categorias
- Tags
- Busca
- Newsletter

### Posts
- Título
- Imagem de capa
- Conteúdo
- Data
- Autor
- Comentários

## Área do Cliente (/client)

### Funcionalidades
- Histórico de agendamentos
- Favoritos
- Mensagens
- Perfil
- Configurações

### Recursos
- Agendamentos futuros
- Histórico de tatuagens
- Documentos
- Preferências

## Notas de Implementação

### SEO
- Meta tags dinâmicas
- Sitemap
- Schema.org
- Open Graph

### Performance
- Lazy loading de imagens
- Code splitting
- Cache de dados
- Otimização de assets

### Acessibilidade
- Navegação por teclado
- Screen readers
- Alto contraste
- Textos alternativos

### Responsividade
- Mobile first
- Breakpoints
- Imagens adaptativas
- Touch targets

## Páginas Principais

### Página Inicial (`Index.tsx`)
- **Descrição**: Página principal do site do estúdio de tatuagem
- **Componentes Utilizados**:
  - Header
  - Hero
  - About
  - Portfolio
  - Contact
  - Footer
  - FloatingButtons
- **Funcionalidades**:
  - Apresentação do estúdio
  - Galeria de trabalhos
  - Formulário de contato
  - Informações sobre o estúdio
- **Rota**: `/`

### Página 404 (`NotFound.tsx`)
- **Descrição**: Página de erro 404 (página não encontrada)
- **Componentes Utilizados**:
  - Header
  - Footer
- **Funcionalidades**:
  - Mensagem de erro amigável
  - Botão para voltar à página inicial
- **Rota**: `/*` (qualquer rota não definida)

## Estrutura de Rotas
O projeto utiliza React Router para gerenciamento de rotas. A estrutura atual é simples, com apenas duas páginas principais:

```
/           -> Página Inicial
/*          -> Página 404 (NotFound)
```

## Boas Práticas
1. Cada página é um componente React independente
2. Páginas são responsáveis por compor os componentes necessários
3. Lógica de roteamento é centralizada
4. Páginas são lazy-loaded quando possível
5. Mantém consistência visual entre as páginas

## Próximos Passos
- [ ] Implementar mais páginas específicas (ex: página de portfólio detalhada)
- [ ] Adicionar animações de transição entre páginas
- [ ] Implementar SEO para cada página
- [ ] Adicionar meta tags dinâmicas
- [ ] Implementar breadcrumbs para navegação 