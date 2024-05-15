const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZmZWQzMGU5LWFmNzQtNDk2Ny04ODFjLTFhMmM5NWUxZjczNy0xNzE1NzY2OTA2MTk1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTYxMDkzYWUtYTMzZS00YmIzLTk5YzAtNjNmZjcyZWU3OTYyIiwidHlwZSI6InQifQ.IrQ2RATCP8efx05HEkv5liX4wLsd05RViAcbjNGx8uo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})