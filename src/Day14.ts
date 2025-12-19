// src/day14.ts
// Removing Modifiers and Required<T>

// --- 任務：使用映射型別創建 MyRequired<T> ---

// 1. 定義一個可能包含可選屬性的基礎介面
interface PartialUserConfig {
  host?: string; // 可選
  port?: number; // 可選
  readonly token: string; // 只讀且必填
}

// 2. 挑戰：使用映射型別和負號修飾符 (-?)
//    來定義一個泛型型別 MyRequired<T>，使其行為與內建的 Required<T> 完全一致。
//    目標：移除 T 中所有屬性的可選性。
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

// 3. 測試 MyRequired<T>
type FullConfig = MyRequired<PartialUserConfig>;

// 實例化 FullConfig
// 注意：host 和 port 現在必須提供！
const serverConfig: FullConfig = {
  host: "0.0.0.0",
  port: 80,
  token: "secret",
};

console.log(serverConfig);

// 4. 嘗試刪除 serverConfig 中的 port 屬性，觀察 TypeScript 報錯。
// const newserverConfig: FullConfig = {
//   host: "0.0.0.0",
//   token: "secret",
// };

// 挑戰額外觀察：
// 在 FullConfig 中，原本的 readonly token 屬性，其 readonly 屬性是否被保留了？
// serverConfig.token = "new_secret"; // 嘗試修改 token
