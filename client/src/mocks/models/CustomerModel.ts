import faker from "@faker-js/faker";
import { Customer } from "../../types/data.types";

// faker.setLocale("he");

export const createCustomer = (): Customer => ({
  id: faker.random.numeric(6),
  name: faker.name.findName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber("052-###-####"),
});
