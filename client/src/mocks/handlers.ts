import { rest } from "msw";
import { CustomerModel } from "./models/CustomerModel";

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    const customers = [];

    for (let i = 0; i < 100; i++) {
      customers.push(CustomerModel);
    }

    return res(ctx.json(customers));
  }),
];
