const haversine = require('haversine');
const haversineDistance = require('haversine-distance');
const locations = require('../data-aggregator/locations.json');

const currentCoords = {
  latitude: /* input current latitude here */,
  longitude: /* input current longitude here */
};

const radiusInMiles = 25;

// This will return an array of location objects sorted by increasing distance
// that are all within a given radius in miles.

const nearbyLocations = locations
  .filter(location => {
    const endCoords = {
      latitude: location.latitude,
      longitude: location.longitude
    };

    return haversine(currentCoords, endCoords, { threshold: radiusInMiles, unit: 'mile' });
  })
  .map(location => {
    const modifiedLocation = Object.assign({}, location);
    const distanceToLocationInMiles =
      haversineDistance(currentCoords, {
        latitude: location.latitude,
        longitude: location.longitude
      }) * 0.00062137; // Meters to miles conversion factor
    const roundedDistance = Math.round(distanceToLocationInMiles * 10) / 10;

    modifiedLocation.distance = roundedDistance;

    return modifiedLocation;
  })
  .sort((a, b) => a.distance - b.distance);

console.log(`There are ${nearbyLocations.length} nearby locations within ${radius} miles.`);
console.log(nearbyLocations);
