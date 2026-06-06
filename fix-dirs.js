const fs = require('fs');
const glob = require('glob');
const { join } = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walk(dirPath, callback);
    } else if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx') || dirPath.endsWith('.js')) {
      callback(dirPath);
    }
  });
}

walk('.', (path) => {
  if (path.includes('node_modules') || path.includes('.next')) return;
  let content = fs.readFileSync(path, 'utf8');
  let changed = false;
  
  // Replace directory imports with .js back to no .js
  const toFix = ['comments.js', 'newsletter.js', 'search.js', 'analytics.js'];
  toFix.forEach(fix => {
    const regex = new RegExp(`from 'pliny/${fix}'`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `from 'pliny/${fix.replace('.js', '')}/index.js'`);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(path, content, 'utf8');
    console.log('Fixed dirs', path);
  }
});
