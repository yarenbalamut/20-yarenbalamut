// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { getBaseUrl } from "./utils";
import { getUsers } from "../services/api";

export const handlers = [

  http.get(`${getBaseUrl()}/users`, async () => {
    
    const users = await getUsers();

    return HttpResponse.json(users, { status: 200 });
  }),

];
