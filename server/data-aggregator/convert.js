const ObjectsToCsv = require('objects-to-csv');

module.exports = {
  jsObjectArrayToCsv: async (data, fileName) => {
    const csv = new ObjectsToCsv(data);
    console.log('convert data length', data.length);
    await csv.toDisk(`./${fileName}`);
  }
};
