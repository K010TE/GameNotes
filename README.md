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
- **TypeScript** (5.9.2) - Tipagem estática
- **React** (19.1.0) - Biblioteca JavaScript para interfaces

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
├── src/
│   ├── app/
│   │   └── Root.tsx              # Componente raiz da aplicação
│   ├── features/
│   │   └── diary/
│   │       ├── components/
│   │       │   └── EntryModal.tsx    # Modal para criar/editar registros
│   │       ├── model/
│   │       │   └── entry.types.ts    # Tipos TypeScript para entradas
│   │       └── screens/
│   │           └── DiaryScreen.tsx   # Tela principal do diário
│   ├── infra/
│   │   └── storage/              # Infraestrutura de armazenamento
│   └── shared/
│       ├── components/           # Componentes compartilhados
│       ├── ui/                   # Componentes de UI
│       └── utils/                # Utilitários
├── assets/                       # Imagens e recursos
├── App.tsx                       # Ponto de entrada da aplicação
├── app.json                      # Configuração do Expo
└── package.json                  # Dependências do projeto
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

Este projeto é privado.

## 👤 Autor

Desenvolvido como projeto pessoal para gerenciamento de experiências de gaming.

---

**Nota**: Este é um projeto em desenvolvimento ativo. Novas funcionalidades e melhorias estão sendo adicionadas regularmente.

