const ObjectsToCsv = require('objects-to-csv');

module.exports = {
  jsObjectToCsv: async data => {
    const csv = new ObjectsToCsv(data);
    console.log('convert data length', data.length);
    await csv.toDisk('./test.csv');
  }
};
