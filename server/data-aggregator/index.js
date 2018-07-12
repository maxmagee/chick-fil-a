const rp = require('request-promise');
const cheerio = require('cheerio');

const states = [
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'DC',
  'WA',
  'WV',
  'WI',
  'WY'
];
const baseURI = 'https://www.chick-fil-a.com/Locations/Browse/';

const requestData = (state, resolve, reject) => {
  const options = {
    uri: `${baseURI}${state}`,
    transform: body =>
      cheerio.load(body, {
        normalizeWhitespace: true
      })
  };

  rp(options)
    .then($ => {
      $('.location').each((i, elem) => {
        resolve(processLocation(i, $(elem)));
      });
    })
    .catch(err => {
      reject(err);
    });
};

const requestPromises = states.map(state => {
  return new Promise((resolve, reject) => {
    requestData(state, resolve, reject);
  });
});

Promise.all(requestPromises).then(values => {
  console.log(values);
});

const processLocation = (index, locationElement) => {
  const location = {};

  location.name = locationElement
    .find('a')
    .text()
    .trim();
  location.address = {};

  const addressElementContents = locationElement.find('p').contents();
  let cityStateZip;
  if (addressElementContents.length > 5) {
    // Mult-line address
    location.street1 = addressElementContents[0] ? addressElementContents[0].data.trim() : '';
    location.street2 = addressElementContents[2] ? addressElementContents[2].data.trim() : '';
    // had to split on comma for multi-word city name
    cityStateZip = addressElementContents[4]
      ? addressElementContents[4].data.trim().split(',')
      : null;
    location.phone = addressElementContents[6] ? addressElementContents[6].data.trim() : '';
  } else {
    location.street1 = addressElementContents[0] ? addressElementContents[0].data.trim() : '';
    location.street2 = null;
    // had to split on comma for multi-word city name
    cityStateZip = addressElementContents[2]
      ? addressElementContents[2].data.trim().split(',')
      : '';
    location.phone = addressElementContents[4] ? addressElementContents[4].data.trim() : '';
  }

  if (cityStateZip) {
    location.city = cityStateZip[0] || '';
    location.state = cityStateZip[1] ? cityStateZip[1].trim().split(' ')[0] : '';
    location.zip = cityStateZip[1] ? cityStateZip[1].trim().split(' ')[1] : '';
  }

  return location;
};
