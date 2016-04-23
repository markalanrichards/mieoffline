import faker from 'faker'

let randomImage = faker.image.city()
let img = ('src="' + randomImage + '"')

console.log(img)