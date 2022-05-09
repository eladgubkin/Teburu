import { rest } from "msw";
import faker from "@faker-js/faker";

const customers = rest.get("/customers", (req, res, ctx) => {
  interface Customer {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
  }

  const createCustomer = (): Customer => ({
    id: Number(faker.random.numeric(6)),
    name: faker.name.findName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
  });

  const customers = Array.from({ length: 50 }, createCustomer);

  return res(ctx.json(customers));
});

export const handlers = [customers];
