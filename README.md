# GameNotes

Um aplicativo mobile para registrar e avaliar jogos que você jogou, permitindo que você mantenha um diário pessoal de suas experiências de gaming.

## 📱 Sobre o Projeto

GameNotes é um aplicativo React Native desenvolvido com Expo que permite aos usuários:

- **Registrar jogos**: Adicione jogos que você jogou com nome, nota e crítica
- **Avaliar jogos**: Atribua uma nota de 0 a 10 para cada jogo
- **Escrever críticas**: Adicione uma crítica curta sobre sua experiência
- **Controle de privacidade**: Marque registros como públicos ou privados
- **Visualizar histórico**: Veja todos os seus registros em uma lista organizada

## 🛠️ Tecnologias Utilizadas

- **React Native** (0.81.5) - Framework para desenvolvimento mobile
- **Expo** (~54.0.30) - Plataforma para desenvolvimento React Native
- **Expo Router** (~6.0.21) - Navegação file-based para Expo
- **TypeScript** (5.9.2) - Tipagem estática
- **React** (19.1.0) - Biblioteca JavaScript para interfaces
- **React Native Safe Area Context** (~5.6.0) - Área segura para dispositivos

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)

## 🚀 Como Executar

1. **Clone o repositório** (ou navegue até a pasta do projeto):
   ```bash
   cd GameNotes/gamenotes
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Execute em uma plataforma específica**:
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`
   - **Web**: `npm run web`

   Ou escaneie o QR code exibido no terminal com o app Expo Go no seu dispositivo móvel.

## 📁 Estrutura do Projeto

```
gamenotes/
├── app/                          # Rotas do Expo Router
│   ├── _layout.tsx              # Layout raiz da navegação
│   └── index.tsx                # Tela inicial (rota /)
├── src/
│   ├── features/
│   │   └── diary/
│   │       ├── components/
│   │       │   ├── entryCard/   # Card de registro
│   │       │   │   ├── index.tsx
│   │       │   │   └── styles.ts
│   │       │   └── entryModal/  # Modal para criar/editar
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── model/
│   │       │   └── entry.types.ts    # Tipos TypeScript
│   │       └── screens/
│   │           └── diaryScreen/      # Tela principal do diário
│   │               ├── index.tsx
│   │               └── styles.ts
│   ├── shared/                   # (futuro) Componentes compartilhados
│   └── ui/                       # (futuro) Componentes de UI
├── assets/                       # Imagens e recursos
├── app.json                      # Configuração do Expo
├── babel.config.js               # Configuração do Babel
├── package.json                  # Dependências do projeto
└── tsconfig.json                 # Configuração do TypeScript
```

## 🎯 Funcionalidades

### Registro de Jogos
- Nome do jogo (obrigatório)
- Nota de 0 a 10
- Crítica curta opcional
- Opção de tornar o registro público ou privado

### Interface
- Lista de registros com cards informativos
- Botão flutuante para adicionar novos registros
- Modal intuitivo para criação de registros
- Estado vazio com dicas para novos usuários

## 🔮 Próximas Funcionalidades

O projeto está em desenvolvimento. Funcionalidades planejadas incluem:

- Persistência de dados (armazenamento local)
- Edição e exclusão de registros
- Críticas completas (além da crítica curta)
- Filtros e busca
- Compartilhamento de registros públicos
- Sincronização com backend (futuro)

## 📝 Licença

Este projeto está licenciado sob a **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

Isso significa que você pode:
- ✅ **Estudar** e aprender com o código
- ✅ **Modificar** e adaptar para seus próprios projetos
- ✅ **Compartilhar** e redistribuir o código modificado

Mas você **não pode**:
- ❌ **Usar para fins comerciais** ou obter lucro direto com este código
- ❌ **Remover os créditos** da licença original

Para mais detalhes, consulte: [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 👤 Autor

Itagiba Neto (K010TE)

---

**Nota**: Este é um projeto em desenvolvimento ativo. Novas funcionalidades e melhorias estão sendo adicionadas regularmente.

