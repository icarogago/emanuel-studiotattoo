# Documentação de Componentes - Emanuel Lopes Studio Tattoo

## Componentes de Layout

### Header
```typescript
interface HeaderProps {
  transparent?: boolean;
  onMenuClick?: () => void;
}
```
- Navegação principal
- Logo do estúdio (Emanuel Lopes Studio Tattoo)
- Menu responsivo
- Botão de agendamento

### Footer
```typescript
interface FooterProps {
  showNewsletter?: boolean;
}
```
- Links de navegação
- Informações de contato
- Redes sociais
- Newsletter (opcional)

### Layout
```typescript
interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}
```
- Estrutura base da aplicação
- Gerenciamento de meta tags
- Loading states

## Componentes de UI

### Button
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
```
- Estilos variados
- Estados de hover e focus
- Loading state
- Ícones opcionais

### Card
```typescript
interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  onClick?: () => void;
}
```
- Exibição de trabalhos
- Efeito hover
- Tags de categoria
- Link para detalhes

### Gallery
```typescript
interface GalleryProps {
  images: Image[];
  columns?: number;
  gap?: number;
  onImageClick?: (image: Image) => void;
}
```
- Grid responsivo
- Lazy loading
- Lightbox
- Filtros por categoria

## Componentes de Formulário

### ContactForm
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
  initialData?: Partial<ContactData>;
}
```
- Validação de campos
- Feedback visual
- Integração com API
- Campos personalizáveis

### AppointmentForm
```typescript
interface AppointmentFormProps {
  availableDates: Date[];
  onSubmit: (data: AppointmentData) => void;
}
```
- Seleção de data/hora
- Validação de disponibilidade
- Confirmação por email
- Campos obrigatórios

## Componentes de Feedback

### Toast
```typescript
interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}
```
- Notificações temporárias
- Animações suaves
- Auto-remoção
- Múltiplas mensagens

### Loading
```typescript
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  fullScreen?: boolean;
}
```
- Spinner animado
- Estados de carregamento
- Overlay opcional
- Cores personalizáveis

## Componentes de Navegação

### Breadcrumb
```typescript
interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}
```
- Navegação hierárquica
- Links clicáveis
- Separadores personalizados
- Responsivo

### Pagination
```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
```
- Navegação entre páginas
- Botões prev/next
- Indicador de página atual
- Limite de páginas visíveis

## Componentes de Mídia

### ImageGallery
```typescript
interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    category?: string;
  }[];
  columns?: number;
  aspectRatio?: number;
}
```
- Grid de imagens
- Lazy loading
- Zoom on hover
- Categorização

### VideoPlayer
```typescript
interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  controls?: boolean;
}
```
- Player de vídeo personalizado
- Controles customizados
- Thumbnail opcional
- Responsivo

## Notas de Implementação

### Boas Práticas
1. Sempre utilizar TypeScript para tipagem
2. Implementar testes unitários
3. Documentar props e métodos
4. Seguir padrões de acessibilidade

### Performance
1. Lazy loading de componentes pesados
2. Otimização de imagens
3. Memoização quando necessário
4. Code splitting

### Acessibilidade
1. ARIA labels
2. Keyboard navigation
3. Focus management
4. Color contrast

## Componentes Principais

### Header (`Header.tsx`)
- **Descrição**: Componente de navegação principal do site
- **Funcionalidades**:
  - Menu de navegação responsivo
  - Logo do estúdio
  - Links para seções principais
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

### Hero (`Hero.tsx`)
- **Descrição**: Seção principal da página inicial
- **Funcionalidades**:
  - Banner principal
  - Chamada para ação
  - Elementos visuais de destaque
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

### About (`About.tsx`)
- **Descrição**: Seção "Sobre" do estúdio
- **Funcionalidades**:
  - Informações sobre o estúdio
  - História e valores
  - Equipe
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

### Portfolio (`Portfolio.tsx`)
- **Descrição**: Galeria de trabalhos
- **Funcionalidades**:
  - Exibição de tatuagens
  - Filtros por estilo
  - Visualização em grid
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

### Contact (`Contact.tsx`)
- **Descrição**: Formulário de contato
- **Funcionalidades**:
  - Formulário de contato
  - Validação de campos
  - Integração com serviços de email
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS, React Hook Form

### Footer (`Footer.tsx`)
- **Descrição**: Rodapé do site
- **Funcionalidades**:
  - Links de redes sociais
  - Informações de contato
  - Links úteis
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

### FloatingButtons (`FloatingButtons.tsx`)
- **Descrição**: Botões flutuantes de ação rápida
- **Funcionalidades**:
  - Botão de WhatsApp
  - Botão de voltar ao topo
  - Links rápidos
- **Props**: Não possui props externas
- **Dependências**: Tailwind CSS

## Componentes UI (`ui/`)
A pasta `ui/` contém componentes reutilizáveis de interface do usuário. Estes componentes seguem as melhores práticas de design system e são utilizados em toda a aplicação.

## Boas Práticas
1. Todos os componentes são funcionais e utilizam hooks React
2. Estilização feita com Tailwind CSS
3. Componentes são tipados com TypeScript
4. Seguem o princípio de responsabilidade única
5. São reutilizáveis e modulares

## Convenções de Nomenclatura
- Nomes de componentes em PascalCase
- Props em camelCase
- Eventos em camelCase com prefixo 'on'
- Interfaces e tipos em PascalCase com prefixo 'I' para interfaces

## Próximos Passos
- [ ] Adicionar testes unitários
- [ ] Implementar documentação de props com TypeDoc
- [ ] Criar storybook para visualização dos componentes
- [ ] Adicionar exemplos de uso 