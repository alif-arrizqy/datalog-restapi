const dateGenerator = (start: number, end: number) => {
  const arrayDate: string[] = [];
  for (let i = start; i <= end; i++) {
    arrayDate.push(String(i).padStart(2, "0"));
  }
  return arrayDate;
};

const hourGenerator = () => {
  const arrayHour: string[] = [];
  for (let i = 0; i <= 23; i++) {
    arrayHour.push(String(i).padStart(2, "0"));
  }
  return arrayHour;
};

const minuteGenerator = () => {
  const arrayMinute: string[] = [];
  for (let i = 0; i <= 55; i += 5) {
    arrayMinute.push(String(i).padStart(2, "0"));
  }
  return arrayMinute;
};

const randomDecimal = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const dvc = () => {
  const arrDvc: number[] = [];

  for (let i = 0; i <= 14; i++) {
    arrDvc.push(randomInteger(10, 16));
  }
  return arrDvc;
};

export {
  dateGenerator,
  hourGenerator,
  minuteGenerator,
  randomDecimal,
  randomInteger,
  dvc,
};
