import { Request, Response } from "express";
import {
  dateGenerator,
  hourGenerator,
  minuteGenerator,
  randomDecimal,
  randomInteger,
  dvc,
} from "../helpers/function";
import { AptNewJson } from "../helpers/validation";
import * as variable from "../helpers/variableAptNew";

const aptNew = (req: Request, res: Response) => {
  try {
    const site: string = req.body.site;
    const startDate: number = req.body.startDate;
    const endDate: number = req.body.endDate;
    const month: number = req.body.month;
    const year: number = req.body.year;

    // battery voltage
    const minBatteryVoltage: number = parseFloat(req.body.minBatteryVoltage);
    const maxBatteryVoltage: number = parseFloat(req.body.maxBatteryVoltage);

    // ts generator
    const dateGen = dateGenerator(startDate, endDate);
    const hourGen = hourGenerator();
    const minuteGen = minuteGenerator();

    // month
    const monthString = String(month).padStart(2, "0");

    // dvc
    const dvcData = dvc();
    const dvcResult: number[] = [];
    dvcData.map((item) => {
      // push array
      const dvcInt = parseInt(item.toString());
      dvcResult.push(dvcInt);
    });

    const result: any[] = [];

    for (const date of dateGen) {
      for (const hour of hourGen) {
        for (const minute of minuteGen) {
          const objDatas: AptNewJson = {
            ts: `${year}${monthString}${date}T${hour}${minute}0${
              Math.floor(Math.random() * (5 - 0)) + 0
            }+0700`,
            cpu_temp: parseFloat(
              randomDecimal(variable.minCpuTemp, variable.maxCpuTemp)
            ),
            edl1: parseFloat(randomDecimal(variable.minEdl, variable.maxEdl)),
            edl2: 0.0,
            batt_volt: parseFloat(
              randomDecimal(minBatteryVoltage, maxBatteryVoltage)
            ),
            dock_active: "ffef",
            min_battv: [
              randomInteger(variable.minBattDock, variable.maxBattDock),
              parseFloat(randomDecimal(minBatteryVoltage, maxBatteryVoltage)),
            ],
            max_battv: [
              randomInteger(variable.minBattDock, variable.maxBattDock),
              parseFloat(randomDecimal(minBatteryVoltage, maxBatteryVoltage)),
            ],
            load1: parseFloat(randomDecimal(1.0, 2.0)),
            load2: parseFloat(randomDecimal(5.0, 7.0)),
            eh1: randomInteger(
              variable.minEnergyHarvest1,
              variable.maxEnergyHarvest1
            ),
            pv1_volt: parseFloat(
              randomDecimal(variable.minPvVoltage, variable.maxPvVoltage)
            ),
            pv1_curr: parseFloat(
              randomDecimal(variable.minPvCurrent, variable.maxPvCurrent)
            ),
            eh2: randomInteger(
              variable.minEnergyHarvest1,
              variable.maxEnergyHarvest2
            ),
            pv2_volt: parseFloat(
              `${randomDecimal(variable.minPvVoltage, variable.maxPvVoltage)}`
            ),
            pv2_curr: parseFloat(
              `${randomDecimal(variable.minPvCurrent, variable.maxPvCurrent)}`
            ),
            dvc: dvcResult,
          };
          result.push(objDatas);
        }
      }
    }
    // res.status(200).send(result);
    res.status(200).json({
      message: "success",
      site: site,
      data: result,
    });
  } catch {
    res.status(400).json({
      message: "Bad Request",
    });
  }
};

export { aptNew };
