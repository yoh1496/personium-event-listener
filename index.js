const replace = require('replace-in-file');
const ncp = require('ncp').ncp;
const promisify = require('util').promisify;
const fs = require('fs');

const ncpAsync = promisify(ncp);
const renameAsync = promisify(fs.rename);
const config = require('./config.js');

ncp.limit = 16;

if (process.argv.length < 3) {
  console.log('specify destination. ');
  process.exit(1);
} else {
  ncpAsync('template', '.tmp')
    .then(() => 
      replace({
        files: '.tmp/**/*',
        from: Object.keys(config),
        to : Object.values(config),
      }))
    .then((results) => {
      console.log('Replacement results:', results);
    })
    .then(() => 
      renameAsync('.tmp', process.argv[2])
    )
    .then(console.log)
    .catch((err) => {
      console.error('Error occured:', err);
    });
}