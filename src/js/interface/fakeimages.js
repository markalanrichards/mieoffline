'use strict'
const ImagesList = [
  { id: 1, name: 'Fluffykins', species: 'rabbit', imageurl: 'http://lorempixel.com/640/480/city'},
  { id: 2, name: 'Caro',       species: 'dog', imageurl: 'http://lorempixel.com/640/480/city'},
  { id: 3, name: 'Hamilton',   species: 'dog', imageurl: 'http://lorempixel.com/640/480/city'},
  {id: 4,  name: 'Harold',     species: 'fish', imageurl: 'http://lorempixel.com/640/480/city'},
  { id: 5, name: 'Ursula',     species: 'cat', imageurl: 'http://lorempixel.com/640/480/city'},
  { id: 6, name: 'Jimmy',      species: 'fish', imageurl: 'http://lorempixel.com/640/480/city'}
]

let images = ImagesList.map((x) => x.imageurl)

// console.log(images)
