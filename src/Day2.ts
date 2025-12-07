function calculateAverage(scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }

  return total / scores.length;
}

const studentScores = [85, 90, 78, 92];
console.log(calculateAverage(studentScores));

// 定義 FlightRecord 元組型別
type FlightRecord = [string, number, boolean, string];

// 創建一個符合 FlightRecord 型別的變數
let flightInfo: FlightRecord = ["TPE123", 14, true, "Tokyo"];

console.log(
  `航班 ${flightInfo[0]} 飛往 ${flightInfo[3]}，預計 ${
    flightInfo[1]
  } 點起飛，狀態：${flightInfo[2] ? "準時" : "延遲"}`
);
// 預期輸出範例: 航班 TPE123 飛往 Tokyo，預計 14 點起飛，狀態：準時
