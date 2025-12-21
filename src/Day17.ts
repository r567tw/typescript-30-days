//Hand-implementing Parameters<T>: Extracting Function Arguments
// src/day17.ts

// --- 任務：手動實現 MyParameters<T> ---

// 1. 定義一個用來測試的函式
function registerUser(name: string, age: number, isAdmin: boolean) {
  return `User ${name} is registered.`;
}

// 取得該函式的型別
type RegisterUserFn = typeof registerUser;

// 2. 挑戰：定義 MyParameters<T>
//    提示：
//    - 檢查 T 是不是一個函式：(...args: any[]) => any
//    - 使用 infer 放在參數的位置：(...args: infer P) => any
//    - 如果是函式，回傳 P；否則回傳 never。

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// 3. 測試 MyParameters<T>

// 測試 A: 提取 registerUser 的參數
// 期望結果: [string, number, boolean]
type RegisterParams = MyParameters<RegisterUserFn>;

const params: RegisterParams = ["Charlie", 25, true]; // 應該通過編譯
console.log(`Extracted Params: ${params}`);

// 測試 B: 沒有參數的函式
// 期望結果: [] (空元組)
type EmptyParams = MyParameters<() => void>;

// 測試 C: 只有一個參數的函式
// 期望結果: [string]
type SingleParam = MyParameters<(id: string) => number>;

const idParam: SingleParam = ["UUID-12345"];
