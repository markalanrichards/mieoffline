import faker from 'faker'

module.exports = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  avatar: faker.image.avatar(),
  imageUrl: faker.image.city(),
  desc: faker.lorem.sentence()

}
