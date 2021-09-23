const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0].toLowerCase()}`, (error, response, body) => {

  //Request failed
  if (error) {
    console.log(error);
    process.exit();
  }

  // console.log("body: ", body);
  // console.log("typeof body: ", typeof body);

  const data = JSON.parse(body);
  // console.log(data);
  // console.log("typeof data :", typeof data);

  //Breed not found
  if (!data[0]) {
    console.log(`Oop, it was an error, ${args} not found!`);
    process.exit();
  }

  console.log(`${args} description: `, data[0].description);

});