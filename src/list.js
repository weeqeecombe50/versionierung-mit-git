const fs = require('fs');
const path = require('path');
const notesFile = path.join(__dirname, 'notes.json');

function list() {
  fs.readFile(notesFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Fehler beim Lesen der Notizen:', err);
      return;
    }
    const notes = JSON.parse(data);
    console.log('Bisherige Versionshinweise:');
    notes.forEach((note, index) => {
      console.log(`${index + 1}: ${note}`);
    });
  });
}

module.exports = list;