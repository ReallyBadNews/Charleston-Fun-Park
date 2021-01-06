import { createClient } from "@formium/client";

const formiumId = process.env.GATSBY_FORMIUM_PROJECTID || "";

export const formium = createClient(formiumId);
