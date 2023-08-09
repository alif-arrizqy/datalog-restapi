type AptNewJson = {
  ts: string;
  cpu_temp: number;
  edl1: number;
  edl2: number;
  batt_volt: number;
  dock_active: string;
  min_battv: number[];
  max_battv: number[];
  load1: number;
  load2: number;
  eh1: number;
  pv1_volt: number;
  pv1_curr: number;
  eh2: number;
  pv2_volt: number;
  pv2_curr: number;
  dvc: number[];
};

type JsonData = {
  ifet_state: Array<number>;
  ofet_state: Array<number>;
  jumlah_battery: string;
  top_temp: Array<number>;
  mid_temp: Array<number>;
  bot_temp: Array<number>;
  out_temp: Array<number>;
  in_temp: Array<number>;
  per_cell_volt: Array<Array<number>>;
  volt_pack: Array<number>;
  curr_pack: Array<number>;
};

type AptOldJson = {
  eh1: number;
  eh2: number;
  load3: number;
  edl1: number;
  edl2: number;
  edl3: number;
  pms_state: string;
  pv_volt1: number;
  pv_volt2: number;
  pv_curr1: number;
  pv_curr2: number;
  batt_volt1: number;
  batt_volt2: number;
  time_local: string;
  nojs: string;
  vsat_curr: number;
  bts_curr: number;
  json_data: JsonData;
};

export { AptNewJson, AptOldJson, JsonData };
