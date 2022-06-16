require("dotenv").config();

import { ExtendedClient } from "./structs/Client";

export const client = new ExtendedClient();

client.start();