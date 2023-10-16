import { lightningChart } from "@arction/lcjs";
// ... or with IIFE:
// const { lightningChart } = lcjs;

const chart = lightningChart().ChartXY();
chart
  .addLineSeries({ dataPattern: { pattern: "ProgressiveX" } })
  .add(dataSet) // { x: number, y: number }[]