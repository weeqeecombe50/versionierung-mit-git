const fs = require('fs');
const path = require('path');
const notesFile = path.join(__dirname, 'notes.json');

function add(versionNote) {
  fs.readFile(notesFile, 'utf8', (err, data) => {
    let notes = [];
    if (!err) {
      notes = JSON.parse(data); // bestehende Notizen lesen
    }
    // neue Notiz hinzufügen
    notes.push(versionNote);
    // Notizen speichern
    fs.writeFile(notesFile, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error('Fehler beim Speichern der Notizen:', err);
      } else {
        console.log('Versionshinweis hinzugefügt:', versionNote);
      }
    });
  });
}

module.exports = add;