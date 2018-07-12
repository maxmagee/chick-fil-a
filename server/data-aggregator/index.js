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

const requestData = state => {
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
        processLocation(i, $(elem));
      });
    })
    .catch(err => {
      console.log(err);
    });
};

states.forEach(requestData);

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
    location.address.street1 = addressElementContents[0]
      ? addressElementContents[0].data.trim()
      : '';
    location.address.street2 = addressElementContents[2]
      ? addressElementContents[2].data.trim()
      : '';
    // had to split on comma for multi-word city name
    cityStateZip = addressElementContents[4]
      ? addressElementContents[4].data.trim().split(',')
      : null;
    location.phone = addressElementContents[6] ? addressElementContents[6].data.trim() : '';
  } else {
    location.address.street1 = addressElementContents[0]
      ? addressElementContents[0].data.trim()
      : '';
    location.address.street2 = null;
    // had to split on comma for multi-word city name
    cityStateZip = addressElementContents[2]
      ? addressElementContents[2].data.trim().split(',')
      : '';
    location.phone = addressElementContents[4] ? addressElementContents[4].data.trim() : '';
  }

  if (cityStateZip) {
    location.address.city = cityStateZip[0] || '';
    location.address.state = cityStateZip[1] ? cityStateZip[1].trim().split(' ')[0] : '';
    location.address.zip = cityStateZip[1] ? cityStateZip[1].trim().split(' ')[1] : '';
  }

  console.log(location);
};
