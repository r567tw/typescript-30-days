// src/day8.ts

// --- 泛型函式 ---

// 1. 創建泛型函式 identity，確保輸入型別和輸出型別一致
// 提示：使用 <T> 來定義型別變數

function identity<T>(arg: T): T {
  // 函式體邏輯
  return arg;
}

// --- 泛型介面與應用 ---

// 2. 創建泛型介面 DataContainer
// 提示：使用 <T> 來定義介面中的 value 屬性型別

interface DataContainer<T> {
  id: number;
  value: T;
}

// 3. 實例化並測試
// 測試一：用於字串
const stringBox: DataContainer<string> = {
  id: 1,
  value: identity("Hello Generics!"),
};

// 測試二：用於數字
const numberBox: DataContainer<number> = {
  id: 2,
  value: identity(12345),
};

console.log(`String Box Value: ${stringBox.value}`);
console.log(`Number Box Value: ${numberBox.value}`);
