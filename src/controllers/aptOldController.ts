import { Request, Response } from "express";
import {
  dateGenerator,
  hourGenerator,
  minuteGenerator,
  randomInteger,
} from "../helpers/function";
import { AptOldJson, JsonData } from "../helpers/validation";
import * as variable from "../helpers/variableAptOld";

const aptOld = (req: Request, res: Response) => {
  try {
    const site: string = req.body.site;
    const nojs: string = req.body.nojs;

    const startDate: number = req.body.startDate;
    const endDate: number = req.body.endDate;
    const month: number = req.body.month;
    const year: number = req.body.year;

    // ts generator
    const dateGen = dateGenerator(startDate, endDate);
    const hourGen = hourGenerator();
    const minuteGen = minuteGenerator();

    // month
    const monthString = String(month).padStart(2, "0");

    const result: any[] = [];

    for (const date of dateGen) {
      for (const hour of hourGen) {
        for (const minute of minuteGen) {
          const nestedCellVoltage: number[][] = [...Array(16)].map((_, i) => [
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
            Math.floor(Math.random() * (3456 - 3400)) + 3400,
          ]);

          let vrandom = Math.floor(Math.random() * (500 - 300)) + 300;
          const voltArray: number[] = [...Array(16)].map((_, i) => vrandom);

          let crandom = Math.floor(Math.random() * (23 - 9)) + 9;
          const currArray: number[] = [...Array(16)].map((_, i) => crandom);

          const jsonDatas: JsonData = {
            ifet_state: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ofet_state: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            jumlah_battery: "3333333333333333",
            top_temp: [
              27, 27, 28, 27, 28, 26, 27, 28, 27, 28, 26, 28, 27, 28, 26, 27,
            ],
            mid_temp: [
              29, 27, 27, 27, 27, 27, 29, 28, 27, 27, 28, 29, 29, 29, 27, 29,
            ],
            bot_temp: [
              30, 30, 29, 29, 29, 29, 28, 29, 28, 29, 29, 28, 28, 29, 29, 29,
            ],
            out_temp: [
              33, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            ],
            in_temp: [
              33, 34, 33, 33, 33, 33, 33, 33, 33, 33, 32, 34, 33, 33, 33, 33,
            ],
            per_cell_volt: nestedCellVoltage,
            volt_pack: voltArray,
            curr_pack: currArray,
          };
          const objDatas: AptOldJson = {
            eh1: randomInteger(
              variable.minEnergyHarvest,
              variable.maxEnergyHarvest
            ),
            eh2: randomInteger(
              variable.minEnergyHarvest,
              variable.maxEnergyHarvest
            ),
            load3: 0,
            edl1: randomInteger(variable.minEdl, variable.maxEdl),
            edl2: randomInteger(variable.minEdl, variable.maxEdl),
            edl3: 0,
            pms_state: "3333333333333333",
            pv_volt1: randomInteger(
              variable.minPvVoltage,
              variable.maxPvVoltage
            ),
            pv_curr1: randomInteger(
              variable.minPvCurrent,
              variable.maxPvCurrent
            ),
            batt_volt1: randomInteger(
              variable.minBatteryVoltage,
              variable.maxBatteryVoltage
            ),
            pv_volt2: randomInteger(
              variable.minPvVoltage,
              variable.maxPvVoltage
            ),
            pv_curr2: randomInteger(
              variable.minPvCurrent,
              variable.maxPvCurrent
            ),
            batt_volt2: randomInteger(
              variable.minBatteryVoltage,
              variable.maxBatteryVoltage
            ),
            time_local: `${year}-${monthString}-${date} ${hour}:${minute}:0${
              Math.floor(Math.random() * (3 - 0 + 1)) + 0
            }`,
            nojs: nojs,
            vsat_curr: randomInteger(
              variable.minVsatCurrent,
              variable.maxVsatCurrent
            ),
            bts_curr: randomInteger(
              variable.minBtsCurrent,
              variable.maxBtsCurrent
            ),
            json_data: jsonDatas,
          };
          result.push(objDatas);
        }
      }
    }
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

export { aptOld }