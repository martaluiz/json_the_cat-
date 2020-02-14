const request = require('request');
const breedName = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName) {
  request(url, (error, response, body) => {
    if (error) {
        return console.log(error);
      }
    // console.log(body);
    //  console.log(typeof body);

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log(`Failed to find breed ${breedName}`);
    }
});

};

fetchBreedDescription(breedName);
module.exports = {fetchBreedDescription};