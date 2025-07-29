# NoventaOrg - Monorepo Fullstack

Este é um monorepo fullstack otimizado para deploy no Vercel, organizado com Turborepo para máxima eficiência de build e desenvolvimento.

## 🏗️ Estrutura do Projeto

```
noventaorg/
├── apps/
│   ├── web/                    # Frontend (HTML/CSS/JS)
│   │   ├── public/             # Assets estáticos
│   │   ├── src/
│   │   │   ├── components/     # Componentes JS
│   │   │   ├── pages/          # Páginas HTML
│   │   │   ├── styles/         # CSS organizado
│   │   │   ├── scripts/        # JavaScript
│   │   │   └── utils/          # Utilitários
│   │   ├── package.json
│   │   └── vite.config.js
│   └── api/                    # Backend/API (futuro)
│       ├── src/
│       │   ├── routes/
│       │   ├── middleware/
│       │   └── utils/
│       └── package.json
├── packages/
│   ├── shared/                 # Código compartilhado
│   │   ├── types/              # TypeScript types
│   │   ├── utils/              # Utilitários compartilhados
│   │   └── constants/          # Constantes
│   └── ui/                     # Componentes UI compartilhados
│       ├── components/
│       ├── styles/
│       └── package.json
├── tools/                      # Scripts e ferramentas
├── docs/                       # Documentação
├── package.json                # Root package.json
├── turbo.json                  # Turborepo config
└── vercel.json                 # Configuração Vercel
```

## 🚀 Como Usar

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
# Desenvolver todas as aplicações
npm run dev

# Desenvolver apenas o frontend
npm run web:dev

# Desenvolver apenas a API
npm run api:dev
```

### Build
```bash
# Build de todas as aplicações
npm run build

# Build específico
npm run build --filter=web
npm run build --filter=api
```

### Deploy
```bash
# Deploy para produção no Vercel
npm run deploy
```

## 📦 Apps

### Web App (`apps/web`)
Frontend estático com HTML, CSS e JavaScript vanilla.
- **Build Tool**: Vite
- **Port**: 3000
- **Output**: `dist/`

### API App (`apps/api`)
Backend com Spring Boot para Vercel Functions.
- **Runtime**: Java 17
- **Framework**: Spring Boot 3.2.x
- **Port**: 8080
- **Build Tool**: Maven/Gradle

## 📚 Packages

### Shared (`packages/shared`)
Código compartilhado entre apps:
- Utilitários JavaScript
- Constantes
- Helpers

### UI (`packages/ui`)
Componentes UI reutilizáveis:
- Componentes JavaScript
- Estilos compartilhados
- Ícones e assets

## 🔧 Configurações

### Turborepo
- Cache inteligente para builds rápidos
- Paralelização de tarefas
- Dependências entre apps

### Vercel
- Deploy automático
- Functions serverless
- Assets estáticos otimizados

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Desenvolver todas as apps |
| `npm run build` | Build de produção |
| `npm run lint` | Lint em todos os projetos |
| `npm run clean` | Limpar builds |
| `npm run format` | Formatar código |
| `npm run deploy` | Deploy para Vercel |

## 📝 Convenções

### Nomenclatura
- **Apps**: `apps/[nome]`
- **Packages**: `packages/[nome]`
- **Arquivos**: kebab-case
- **Componentes**: PascalCase
- **Funções**: camelCase

### Estrutura de CSS
```
styles/
├── base/           # Reset, variáveis, tipografia
├── components/     # Componentes específicos
└── main.css        # Arquivo principal
```

### Estrutura de JS
```
scripts/
├── components/     # Componentes JS
├── utils/          # Utilitários
└── script.js       # Arquivo principal
```

## 🚀 Próximos Passos

1. **Migração completa**: Atualizar todos os arquivos HTML para usar novos caminhos
2. **TypeScript**: Migrar JavaScript para TypeScript
3. **Componentes**: Criar sistema de componentes reutilizáveis
4. **API**: Implementar endpoints da API
5. **Testes**: Adicionar testes unitários e E2E
6. **CI/CD**: Configurar GitHub Actions

## 📄 Licença

© noventa.org 