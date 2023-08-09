import express from "express";

import { aptNewRouter } from "./aptNewRouter";
import { aptOldRouter } from "./aptOldRouter";

const router = express.Router();

export default (): express.Router => {
  aptNewRouter(router);
  aptOldRouter(router);

  return router;
};
