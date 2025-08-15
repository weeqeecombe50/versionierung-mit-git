const fs = require('fs');
const path = require('path');
const add = require('./add');
const list = require('./list');

const args = process.argv.slice(2);

if (args[0] === 'add') {
  add(args.slice(1).join(' '));
} else if (args[0] === 'list') {
  list();
} else {
  console.log('Unbekannter Befehl. Bitte verwenden Sie "add" oder "list");
}