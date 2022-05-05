import faker from "@faker-js/faker";

export const CustomerModel = {
  id: () => faker.random.number(10000).toString(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  age: () => faker.datatype.number({ min: 18, max: 69 }),
  email: () => faker.internet.email(),
  phone: () => faker.phone.phoneNumber("+7 (###) ###-##-##"),
  city: () => faker.address.cityName(),
  company: () => faker.company.companyName(),
  avatar: () => faker.image.avatar(),
  information: () => faker.lorem.words(10),
};
