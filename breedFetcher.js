const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toLowerCase()}`, (error, response, body) => {
    
    //Request failed
    if (error) {
      callback(error);
    }

    const data = JSON.parse(body);
  
    //Breed not found
    if (!data[0]) {
      error = `Oop, it was an error, ${breedName} not found!`;
      return callback(error);
    }
    
    //Request successfully
    const desc = `${data[0].description}`;
    callback(null, desc);
  
  });

};

module.exports = { fetchBreedDescription };
