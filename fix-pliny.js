const fs = require('fs');
const glob = require('glob'); // Note: we have glob from dependencies or we can just use native fs recursion
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
  
  // Replace anything like 'pliny/something' with 'pliny/something.js' but avoid duplicates
  const regex = /from ['"]pliny\/([^'"]+)['"]/g;
  content = content.replace(regex, (match, p1) => {
    // remove any existing .js or .js.js
    let clean = p1.replace(/\.js/g, '');
    changed = true;
    return `from 'pliny/${clean}.js'`;
  });
  
  if (changed) {
    fs.writeFileSync(path, content, 'utf8');
    console.log('Fixed', path);
  }
});
