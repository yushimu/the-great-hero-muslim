const fs = require('fs');

const filepath = 'js/data.js';
let content = fs.readFileSync(filepath, 'utf8');

// Replace mojibake
content = content.replace(/ï·º/g, 'ﷺ');
content = content.replace(/â€“/g, '–');
content = content.replace(/â€™/g, "'");
content = content.replace(/â€œ/g, '"');
content = content.replace(/â€ /g, '"');
content = content.replace(/Ã¢â‚¬Å“/g, '"');
content = content.replace(/Ã¢â‚¬Â /g, '"');

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed data.js successfully!');
