// src/day11.ts // Built-in Utility Types I: Partial and Readonly Modifiers

// --- 任務：定義配置介面並應用工具型別 ---
// Partial<T>： 快速將型別 T 的所有屬性都轉換為可選狀態（?）。
// Readonly<T>： 快速將型別 T 的所有屬性都轉換為只讀狀態（readonly）。

// 1. 定義基礎介面
interface AppConfig {
  host: string;
  port: number;
  timeout: number;
}

// 2. 使用 Partial<T> 創建部分配置
type PartialConfig = Partial<AppConfig>;

// 實例化 PartialConfig，只提供 port 屬性
const defaultSettings: PartialConfig = {
  port: 8080,
};

// 3. 使用 Readonly<T> 創建只讀配置
type ImmutableConfig = Readonly<AppConfig>;

// 實例化並完整初始化
const finalConfig: ImmutableConfig = {
  host: "localhost",
  port: 3000,
  timeout: 5000,
};

console.log(`Default Port: ${defaultSettings.port}`);
console.log(`Final Host: ${finalConfig.host}`);

// 4. 嘗試修改 finalConfig.host，觀察 TypeScript 報錯
// finalConfig.host = "production";
