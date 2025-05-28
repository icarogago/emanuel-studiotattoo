# Documentação de Hooks - Emanuel Lopes Studio Tattoo

## Hooks de UI

### useToast
```typescript
interface ToastOptions {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

const useToast = () => {
  const showToast = (options: ToastOptions) => void;
  return { showToast };
};
```
- Notificações temporárias
- Múltiplos tipos
- Auto-remoção
- Animações

### useModal
```typescript
interface ModalOptions {
  content: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  onClose?: () => void;
}

const useModal = () => {
  const showModal = (options: ModalOptions) => void;
  const hideModal = () => void;
  return { showModal, hideModal };
};
```
- Modais reutilizáveis
- Tamanhos variados
- Callbacks
- Animações

## Hooks de Formulário

### useAppointment
```typescript
interface AppointmentData {
  date: Date;
  service: string;
  description: string;
  references: File[];
}

const useAppointment = () => {
  const submitAppointment = (data: AppointmentData) => Promise<void>;
  const availableDates = Date[];
  return { submitAppointment, availableDates };
};
```
- Gerenciamento de agendamentos
- Validação de datas
- Upload de arquivos
- Feedback de status

### useContact
```typescript
interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const useContact = () => {
  const submitContact = (data: ContactData) => Promise<void>;
  return { submitContact };
};
```
- Envio de mensagens
- Validação de campos
- Feedback de status
- Limpeza de formulário

## Hooks de Dados

### useGallery
```typescript
interface GalleryFilters {
  category?: string;
  style?: string;
  artist?: string;
}

const useGallery = () => {
  const images: Image[];
  const filters: GalleryFilters;
  const setFilters: (filters: GalleryFilters) => void;
  return { images, filters, setFilters };
};
```
- Gerenciamento de galeria
- Filtros dinâmicos
- Paginação
- Cache de dados

### useBlog
```typescript
interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
}

const useBlog = () => {
  const posts: BlogPost[];
  const loading: boolean;
  const error: Error | null;
  return { posts, loading, error };
};
```
- Listagem de posts
- Busca
- Paginação
- Cache de dados

## Hooks de Autenticação

### useAuth
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'admin';
}

const useAuth = () => {
  const user: User | null;
  const login: (credentials: Credentials) => Promise<void>;
  const logout: () => void;
  return { user, login, logout };
};
```
- Gerenciamento de sessão
- Proteção de rotas
- Perfil do usuário
- Tokens JWT

## Hooks de Utilitários

### useResponsive
```typescript
const useResponsive = () => {
  const isMobile: boolean;
  const isTablet: boolean;
  const isDesktop: boolean;
  return { isMobile, isTablet, isDesktop };
};
```
- Detecção de dispositivo
- Breakpoints
- Layout responsivo
- Eventos de resize

### useScroll
```typescript
const useScroll = () => {
  const scrollY: number;
  const scrollDirection: 'up' | 'down';
  const isScrolled: boolean;
  return { scrollY, scrollDirection, isScrolled };
};
```
- Posição do scroll
- Direção do scroll
- Eventos de scroll
- Animações

## Notas de Implementação

### Boas Práticas
1. Sempre utilizar TypeScript
2. Implementar testes unitários
3. Documentar parâmetros e retornos
4. Seguir convenções de nomenclatura

### Performance
1. Memoização de valores
2. Cleanup de efeitos
3. Debounce/Throttle
4. Cache de dados

### Segurança
1. Validação de dados
2. Sanitização de inputs
3. Proteção contra XSS
4. Rate limiting

## Hooks Personalizados

### useMobile (`use-mobile.tsx`)
- **Descrição**: Hook para detecção de dispositivos móveis
- **Funcionalidades**:
  - Detecção de viewport móvel
  - Resposta a mudanças de tamanho de tela
  - Breakpoints personalizáveis
- **Retorno**:
  ```typescript
  {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }
  ```
- **Dependências**: React

## Boas Práticas
1. Hooks seguem o prefixo 'use'
2. São reutilizáveis e modulares
3. Seguem as regras dos hooks do React
4. São tipados com TypeScript
5. Possuem documentação clara

## Convenções de Nomenclatura
- Nomes de hooks em camelCase com prefixo 'use'
- Parâmetros em camelCase
- Retornos tipados com interfaces TypeScript

## Próximos Passos
- [ ] Adicionar testes unitários para os hooks
- [ ] Implementar mais hooks utilitários
- [ ] Adicionar documentação de uso com exemplos
- [ ] Criar documentação de API com TypeDoc
- [ ] Implementar hooks para gerenciamento de estado global 