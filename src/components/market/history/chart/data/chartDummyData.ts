export interface basicChartDataType {
  date?: string | number | undefined;
  time?: string;
  value?: number | undefined;
  bullet?: boolean | undefined;
}

// 기본 bullet 값이 false 인 상태에서 데이터 갱신 시 마지막 데이터 값만 bullet을 true로 변경해주세요.
export const lineChartDefaultData = [
  {
    date: new Date(2021, 1, 18, 0, 0).getTime(),
    value: 1100,
    bullet: false,
  },
  {
    date: new Date(2021, 2, 18, 1, 0).getTime(),
    value: 1300,
    bullet: false,
  },
  {
    date: new Date(2021, 3, 18, 2, 0).getTime(),
    value: 1500,
    bullet: false,
  },
  {
    date: new Date(2021, 4, 18, 3, 0).getTime(),
    value: 1600,
    bullet: false,
  },
  {
    date: new Date(2021, 5, 18, 4, 0).getTime(),
    value: 1800,
    bullet: false,
  },
  {
    date: new Date(2021, 6, 18, 5, 0).getTime(),
    value: 1900,
    bullet: false,
  },
  {
    date: new Date(2021, 7, 18, 6, 0).getTime(),
    value: 2100,
    bullet: false,
  },
  {
    date: new Date(2021, 8, 18, 7, 0).getTime(),
    value: 2200,
    bullet: false,
  },
  {
    date: new Date(2021, 9, 18, 8, 0).getTime(),
    value: 2500,
    bullet: false,
  },
  {
    date: new Date(2021, 10, 18, 9, 0).getTime(),
    value: 2700,
    bullet: false,
  },
  {
    date: new Date(2021, 11, 18, 10, 0).getTime(),
    value: 2900,
    bullet: false,
  },
  {
    date: new Date(2021, 12, 18, 11, 0).getTime(),
    value: 3000,
    bullet: false,
  },
  {
    date: new Date(2022, 1, 18, 12, 0).getTime(),
    value: 3200,
    bullet: false,
  },
  {
    date: new Date(2022, 2, 18, 13, 0).getTime(),
    value: 3300,
    bullet: false,
  },
  {
    date: new Date(2022, 3, 18, 14, 0).getTime(),
    value: 3320,
    bullet: false,
  },
  {
    date: new Date(2022, 4, 18, 15, 0).getTime(),
    value: 3400,
    bullet: false,
  },
  {
    date: new Date(2022, 5, 18, 16, 0).getTime(),
    value: 3700,
    bullet: false,
  },
  {
    date: new Date(2022, 6, 18, 17, 0).getTime(),
    value: 3800,
    bullet: false,
  },
  {
    date: new Date(2022, 7, 18, 18, 0).getTime(),
    value: 4000,
    bullet: true,
  },
  {
    date: new Date(2022, 8, 18, 19, 0).getTime(),
    // value: 230.01,
    // bullet: false,
  },
  {
    date: new Date(2022, 8, 18, 20, 0).getTime(),
    // value: 270.0,
    // bullet: false,
  },
  {
    date: new Date(2022, 8, 18, 21, 0).getTime(),
    // value: 250.12,
    // bullet: false,
  },
  {
    date: new Date(2022, 8, 18, 22, 0).getTime(),
    // value: 260.03,
    // bullet: false,
  },
  {
    date: new Date(2022, 8, 18, 23, 0).getTime(),
    // value: 233.45,
    // bullet: false,
  },
];