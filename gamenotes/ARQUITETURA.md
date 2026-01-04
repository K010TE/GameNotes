# 📐 Arquitetura do Projeto GameNotes

Este documento descreve a estrutura e organização do projeto seguindo boas práticas para React Native.

## 🏗️ Estrutura de Pastas

```
gamenotes/
├── app/                          # Expo Router - Rotas file-based
│   ├── _layout.tsx              # Layout raiz
│   ├── index.tsx                # Rota inicial (/)
│   └── [outras-rotas].tsx       # Outras rotas
│
├── src/
│   ├── features/                # Módulos de funcionalidades (Feature-based)
│   │   ├── diary/              # Feature: Diário de jogos
│   │   │   ├── components/     # Componentes específicos da feature
│   │   │   │   ├── entryCard/
│   │   │   │   └── entryModal/
│   │   │   ├── data/           # Repositórios e acesso a dados
│   │   │   │   └── entriesRepo.ts
│   │   │   ├── hooks/          # Hooks customizados da feature
│   │   │   │   └── useEntries.ts
│   │   │   ├── model/          # Tipos e modelos TypeScript
│   │   │   │   └── entry.types.ts
│   │   │   └── screens/        # Telas da feature
│   │   │       └── diaryScreen/
│   │   ├── auth/               # Feature: Autenticação (futuro)
│   │   ├── games/              # Feature: Catálogo de jogos (futuro)
│   │   └── settings/           # Feature: Configurações (futuro)
│   │
│   └── shared/                 # Recursos compartilhados entre features
│       ├── components/         # Componentes reutilizáveis
│       │   └── ui/            # Componentes de UI base
│       │       ├── primaryButton.tsx
│       │       └── index.ts   # Barrel exports
│       ├── utils/             # Funções utilitárias
│       ├── constants/         # Constantes do app
│       └── types/             # Tipos compartilhados
│
├── assets/                     # Imagens, ícones, fontes
├── app.json                    # Configuração Expo
├── package.json
└── tsconfig.json
```

## 🎯 Princípios da Arquitetura

### 1. **Feature-Based Architecture**
Cada funcionalidade do app é isolada em sua própria pasta dentro de `features/`. Isso facilita:
- Manutenção e escalabilidade
- Trabalho em equipe (menos conflitos)
- Testes isolados
- Reutilização de código

### 2. **Separação de Responsabilidades**
Cada feature contém:
- **`components/`**: Componentes específicos da feature
- **`screens/`**: Telas completas
- **`hooks/`**: Lógica de estado e efeitos
- **`data/`**: Acesso a dados (repositórios, APIs)
- **`model/`**: Tipos TypeScript e interfaces

### 3. **Shared Resources**
Componentes, utilitários e constantes compartilhados ficam em `shared/`:
- **`shared/components/ui/`**: Componentes de UI reutilizáveis (botões, inputs, etc.)
- **`shared/utils/`**: Funções auxiliares (formatação, validação, etc.)
- **`shared/constants/`**: Constantes globais (cores, tamanhos, etc.)
- **`shared/types/`**: Tipos compartilhados entre features

## 📝 Convenções

### Nomenclatura
- **Componentes**: PascalCase (`PrimaryButton.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useEntries.ts`)
- **Utilitários**: camelCase (`formatDate.ts`)
- **Tipos**: PascalCase (`Entry`, `EntryInput`)
- **Pastas**: camelCase (`entryCard/`, `diaryScreen/`)

### Estrutura de Componentes
Cada componente deve ter:
```
componentName/
├── index.tsx        # Componente principal
└── styles.ts        # Estilos (opcional, pode usar StyleSheet inline)
```

### Imports
- Use path aliases (`@/`) para imports absolutos
- Exemplo: `import PrimaryButton from "@/shared/components/ui/primaryButton"`
- Evite imports relativos profundos (`../../../../`)

## ✅ Boas Práticas

1. **Componentes Compartilhados**: Sempre coloque em `shared/` se usado por mais de uma feature
2. **Tipos**: Defina tipos próximos ao uso, mas tipos compartilhados em `shared/types/`
3. **Hooks**: Use hooks customizados para lógica reutilizável
4. **Repositórios**: Abstraia acesso a dados através de interfaces (facilita mudanças futuras)
5. **Estilos**: Separe estilos em arquivos `styles.ts` para componentes complexos

## 🚀 Próximos Passos

- [ ] Adicionar testes unitários
- [ ] Configurar ESLint e Prettier
- [ ] Adicionar tratamento de erros global
- [ ] Implementar persistência de dados (SQLite/AsyncStorage)
- [ ] Adicionar navegação entre features
- [ ] Configurar tema global (cores, tipografia)

