// src/day10.ts
// Property Type Extraction

// --- 任務一：定義介面 ---

interface User {
  /* [請填寫 id, name, isAdmin 屬性] */
  id: number;
  name: string;
  isAdmin: boolean;
}

// --- 任務二：使用 keyof 創建泛型函式 ---

// 1. 創建 getProperty 泛型函式
// 提示：T 必須 extends object, K 必須 extends keyof T
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  // 函式體邏輯：回傳物件的屬性值
  return obj[key];
}

// 測試：
const user: User = { id: 1, name: "Alice", isAdmin: false };

// 測試 keyof 的效果：
const userId = getProperty(user, "id"); // K 被推斷為 "id"
const userName = getProperty(user, "name"); // K 被推斷為 "name"
// getProperty(user, "age"); // 嘗試傳入不存在的屬性，觀察編譯器報錯

console.log(`User ID: ${userId}`);
console.log(`User Name: ${userName}`);

// --- 任務三：使用 typeof 提取型別 ---

// 1. 使用 typeof 提取 getProperty 函式本身的型別
type GetPropertyFunctionType = typeof getProperty;

// 2. 創建一個符合該型別的新變數
const getPropertyAlias: GetPropertyFunctionType = getProperty;

// 測試別名
console.log(`Alias Test: ${getPropertyAlias(user, "isAdmin")}`);
