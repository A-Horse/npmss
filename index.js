#! /usr/bin/env node
var fs = require('fs');

if (fs.existsSync('./package.json')) {
  // Do something
  var content = fs.readFileSync('./package.json', 'utf8');
  Object.keys(JSON.parse(content).scripts || {}).map(function(key) {
    console.log(key);
  });
} else {
  console.error('can not fund package.json')
}
