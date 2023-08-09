import express from "express";
import { aptOld } from "../controllers/aptOldController";
import { body, validationResult } from "express-validator";


export const aptOldRouter = (router: express.Router) => {
  // router.post("/aptOld", aptOld);
  router.post(
    "/aptOld",
    [
      body("nojs").isString(),
      body("startDate").isInt(),
      body("endDate").isInt(),
      body("month").isInt(),
      body("year").isInt(),
    ],
    (req: express.Request, res: express.Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      aptOld(req, res);
    }
  );
};
