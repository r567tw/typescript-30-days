// src/day7.ts

// --- 任務一：函式多載 ---

// 1. 定義第一個多載簽名 (兩個字串，回傳字串)
/* [請在這裡填寫多載簽名 1] */
function combine(a: string, b: string): string;

// 2. 定義第二個多載簽名 (兩個數字，回傳數字)
/* [請在這裡填寫多載簽名 2] */
function combine(a: number, b: number): number;

// 3. 定義實作簽名 (Implementation)
// 實作簽名必須涵蓋上面所有情況，參數和回傳值可能需要使用聯合型別。
function combine(a: string | number, b: string | number): string | number {
  // 實作邏輯：請使用 Day 6 學過的 typeof 守衛來區分型別並執行相應的操作。
  if (typeof a === "string" || typeof b === "string") {
    return `${a.toString()} ${b.toString()}`;
  } else {
    return a + b;
  }
}

// 測試：觀察 TypeScript 在這兩個呼叫點分別給予的回傳型別提示。
const strResult = combine("Hello", "TS"); // 預期型別為 string
const numResult = combine(10, 20); // 預期型別為 number

console.log(`字串結果: ${strResult}`);
console.log(`數字結果: ${numResult}`);

// --- 任務二：使用 never 型別 ---

function throwError(message: string): never {
  throw new Error(message);
}

// 測試：註解此行，因為執行會導致程式中斷
throwError("致命錯誤發生！");
