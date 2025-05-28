# Documentação do Emanuel Lopes Studio Tattoo

## Visão Geral

Esta documentação fornece informações detalhadas sobre o desenvolvimento e manutenção do site do Emanuel Lopes Studio Tattoo. O projeto foi desenvolvido utilizando tecnologias modernas de front-end para criar uma experiência de usuário excepcional.

## Estrutura da Documentação

- [STEP-BY-STEP.md](./STEP-BY-STEP.md) - Registro detalhado do processo de desenvolvimento
- [COMPONENTS.md](./COMPONENTS.md) - Documentação dos componentes reutilizáveis
- [PAGES.md](./PAGES.md) - Descrição das páginas e suas funcionalidades
- [HOOKS.md](./HOOKS.md) - Documentação dos hooks personalizados

## Guia de Estilo

### Cores
- Primária: #1a1a1a (Preto)
- Secundária: #e63946 (Vermelho)
- Acentos: #f1faee (Branco)
- Fundo: #f8f9fa (Cinza claro)

### Tipografia
- Títulos: Montserrat
- Corpo: Roboto
- Tamanhos:
  - H1: 2.5rem
  - H2: 2rem
  - H3: 1.75rem
  - Corpo: 1rem

### Componentes
- Botões: Bordas arredondadas, efeito hover suave
- Cards: Sombra suave, transições suaves
- Formulários: Inputs com bordas sutis

## Padrões de Código

### Nomenclatura
- Componentes: PascalCase (ex: `Gallery.tsx`)
- Funções: camelCase (ex: `handleSubmit`)
- Variáveis: camelCase (ex: `userData`)
- Constantes: UPPER_SNAKE_CASE (ex: `API_URL`)

### Estrutura de Arquivos
```
src/
├── components/
│   ├── common/      # Componentes compartilhados
│   ├── layout/      # Componentes de layout
│   └── features/    # Componentes específicos
├── pages/
│   ├── home/
│   ├── gallery/
│   └── contact/
└── utils/
    ├── hooks/
    └── helpers/
```

## Fluxo de Trabalho

1. Desenvolvimento
   - Criar branch feature
   - Implementar funcionalidade
   - Testes unitários
   - Revisão de código

2. Deploy
   - Build de produção
   - Testes de integração
   - Deploy em staging
   - Deploy em produção

## Manutenção

### Atualizações Regulares
- Dependências: Mensal
- Segurança: Imediata
- Performance: Trimestral

### Monitoramento
- Google Analytics
- Error Tracking
- Performance Metrics

## Suporte

Para questões técnicas ou suporte, entre em contato com a equipe de desenvolvimento através do email: suporte@emanueltattoo.com 