import { createClient } from "@formium/client";

export const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID);
