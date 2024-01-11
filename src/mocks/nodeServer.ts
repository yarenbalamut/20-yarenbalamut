import { createServer } from "@mswjs/http-middleware";

import { handlers } from "./handlers";
import { PORT, getBaseUrl } from "./utils";

const mockServer = createServer(...handlers);

mockServer.listen(PORT, () =>
  console.log("Mock server ready at " + getBaseUrl())
);
