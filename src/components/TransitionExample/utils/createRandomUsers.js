import { faker } from '@faker-js/faker'

export const createRandomUsers = (length) => {
  const users = []
  Array.from({ length }).forEach(() => {
    users.push({
      userId: faker.datatype.uuid(),
      username: `@${faker.internet.userName().toLowerCase()}`,
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    })
  })

  return users
}
