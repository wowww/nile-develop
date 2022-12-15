export const stackChartDarkDefaultData = [
  {
    date: new Date(2023, 7, 25).getTime(),
    total: 0,
    wonderDao: 320000,
    patronDao: 250000,
    Top3Dao: 180000,
    etc: 128000,
  },
  {
    date: new Date(2023, 7, 26).getTime(),
    total: 0,
    wonderDao: 700000,
    patronDao: 400000,
    Top3Dao: 200000,
    etc: 130000,
  },
  {
    date: new Date(2023, 7, 27).getTime(),
    total: 0,
    wonderDao: 500000,
    patronDao: 499020,
    Top3Dao: 220000,
    etc: 116000,
  },
  {
    date: new Date(2023, 7, 28).getTime(),
    total: 0,
    wonderDao: 889370,
    patronDao: 640520,
    Top3Dao: 344900,
    etc: 185680,
  },
  {
    date: new Date(2023, 7, 29).getTime(),
    total: 0,
    wonderDao: 789370,
    patronDao: 545020,
    Top3Dao: 304090,
    etc: 155680,
  },
  {
    date: new Date(2023, 7, 30).getTime(),
    total: 0,
    wonderDao: 1218930,
    patronDao: 945020,
    Top3Dao: 404090,
    etc: 235680,
  },
  {
    date: new Date(2023, 7, 31).getTime(),
    total: 0,
    wonderDao: 1818930,
    patronDao: 1504520,
    Top3Dao: 704980,
    etc: 405680,
  },
];

// 임시 code
export const totalFuncDark = stackChartDarkDefaultData.forEach((el) => {
  // eslint-disable-next-line no-param-reassign
  el.total = el.wonderDao + el.patronDao + el.Top3Dao + el.etc;
});