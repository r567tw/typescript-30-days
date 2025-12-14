// src/day9.ts
// Generic Constraints

// --- 任務一：定義約束介面 ---

// 1. 定義 Lengthwise 介面
interface Lengthwise {
  length: number;
}

// --- 任務二：創建受約束的泛型函式 ---

// 2. 創建 logLength 泛型函式，使用 extends 進行約束
// 提示：語法為 function functionName<T extends Constraint>(arg: T): T
function logLength<T extends Lengthwise>(arg: T): T {
  // 3. 在函式內部，安全地存取 arg.length 屬性
  console.log(`傳入物件的長度: ${arg.length}`);
  return arg;
}

// --- 測試與觀察 ---

// 測試一：傳入字串 (string 符合 Lengthwise)
logLength("Hello Constraint");

// 測試二：傳入陣列 (Array 符合 Lengthwise)
logLength([10, 20, 30]);

// 嘗試傳入數字 (number 不符合 Lengthwise)，觀察編譯器報錯
// logLength(100);
