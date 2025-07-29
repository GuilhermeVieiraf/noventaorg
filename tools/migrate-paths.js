#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapeamento de caminhos antigos para novos
const pathMappings = {
  '/frontend/assets/': '/assets/',
  '/frontend/css/': '/styles/',
  '/frontend/js/': '/scripts/',
  'href="/frontend/': 'href="/',
  'src="/frontend/': 'src="/'
};

// Função para atualizar caminhos em um arquivo
function updatePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Aplicar todas as substituições
    for (const [oldPath, newPath] of Object.entries(pathMappings)) {
      if (content.includes(oldPath)) {
        content = content.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
        updated = true;
      }
    }

    // Atualizar referências específicas do CSS
    if (content.includes('style.css')) {
      content = content.replace(/style\.css/g, 'main.css');
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Atualizado: ${filePath}`);
    } else {
      console.log(`⏭️  Sem mudanças: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
  }
}

// Função para processar todos os arquivos HTML
function migrateHtmlFiles() {
  const webSrcPath = path.join(__dirname, '../apps/web/src');
  
  // Processar index.html
  const indexPath = path.join(webSrcPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    updatePaths(indexPath);
  }

  // Processar arquivos na pasta pages
  const pagesPath = path.join(webSrcPath, 'pages');
  if (fs.existsSync(pagesPath)) {
    const files = fs.readdirSync(pagesPath);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        updatePaths(path.join(pagesPath, file));
      }
    });
  }
}

// Executar migração
console.log('🚀 Iniciando migração de caminhos...\n');
migrateHtmlFiles();
console.log('\n✅ Migração concluída!'); 