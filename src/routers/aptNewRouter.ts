import express from "express";
import { aptNew } from "../controllers/aptNewController";
import { body, validationResult } from "express-validator";
import { error } from "console";

export const aptNewRouter = (router: express.Router) => {
  // router.post("/aptNew", aptNew);
  router.post(
    "/aptNew",
    [
      body("startDate").isInt(),
      body("endDate").isInt(),
      body("month").isInt(),
      body("year").isInt(),
      body("minBatteryVoltage").isFloat(),
      body("maxBatteryVoltage").isFloat(),
    ],
    (req: express.Request, res: express.Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      if (req.body.startDate > req.body.endDate) {
        return res.status(422).json({
          message: "error",
          error: "startDate must be less than endDate",
        });
      }
      aptNew(req, res);
    }
  );
};
