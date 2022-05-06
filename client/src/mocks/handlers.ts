import { rest } from "msw";
import { createCustomer } from "./models/CustomerModel";

export const handlers = [
  rest.get("/customers", (req, res, ctx) => {
    return res(ctx.json(Array.from({ length: 50 }, createCustomer)));
  }),
];
