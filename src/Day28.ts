// src/day28.ts

type AppConfig = {
  theme: "light" | "dark";
  api: {
    endpoint: string;
    retries: number;
  };
};

// --- 任務：實作 DeepPartial<T> ---
// 提示：
// 1. 遍歷 K in keyof T，並加上 ?
// 2. 判斷 T[K] 是否為物件？
// 3. 是物件就遞迴 DeepPartial，否則直接回傳 T[K]

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]> // <--- 填入遞迴呼叫
    : T[K];
};

// --- 實戰應用：模擬更新函數 ---

function updateConfig(
  current: AppConfig,
  updates: DeepPartial<AppConfig>
): AppConfig {
  // 這裡通常會使用 lodash.merge 或手寫遞迴合併邏輯
  return { ...current, ...updates } as AppConfig;
}

// ✅ 測試：現在我們可以只更新深層的其中一個屬性
updateConfig(
  { theme: "light", api: { endpoint: "v1", retries: 3 } },
  {
    api: { retries: 5 }, // 如果只用 Partial，這裡會報錯說缺少 endpoint！
  }
);
