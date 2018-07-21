const fs = require('fs');
const path = require('path');

const version = require(path.join(__dirname, 'package.json')).version;

const getTitle = () => {
  return `Letsbrupper Style Guide (${version})`;
};

module.exports = {
  title: getTitle(),
  skipComponentsWithoutExample: true,
  components: 'src/components/*/index.js'
}
