// src/day24.ts

// --- 任務：實作函式重載 ---

// 1. 定義重載簽名 (Overload Signatures)
// 這裡定義「輸入」與「輸出」的配對關係
function processValue(value: string): string; // <--- 傳入 string，應回傳什麼？
function processValue(value: number): number[]; // <--- 傳入 number，應回傳什麼？

// 2. 實作函式 (Implementation Signature)
// 實作層的型別必須相容於上方所有的簽名
function processValue(value: string | number): string | number[] {
  if (typeof value === "string") {
    // 邏輯：字串轉大寫
    return value.toUpperCase();
  } else {
    // 邏輯：數字拆解成陣列 (123 -> [1, 2, 3])
    return value.toString().split("").map(Number);
  }
}

// --- 測試應用 ---

// 測試 A：傳入字串
// 期待：resultStr 被推導為 string，具備 string 的方法
const resultStr = processValue("typescript");
console.log(`處理後字串: ${resultStr.repeat(2)}`); // repeat 是 string 的方法

// 測試 B：傳入數字
// 期待：resultNumArr 被推導為 number[]，具備陣列方法
const resultNumArr = processValue(456);
console.log(`處理後陣列: ${resultNumArr.join("-")}`); // join 是陣列的方法

// 錯誤測試：
// const errorResult = processValue(true); // 這行應該報錯
