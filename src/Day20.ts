// src/day20.ts

type NestedConfig = {
  api: {
    endpoint: string;
    delay: number;
  };
  features: {
    darkMode: boolean;
  };
};

// --- 任務：實現 DeepReadonly<T> ---
// 提示：
// 1. 使用映射型別遍歷 K in keyof T
// 2. 在前面加上 readonly
// 3. 判斷 T[K] 是不是一個物件？
//    - 如果是物件，再次呼叫 DeepReadonly<T[K]> (這就是遞迴！)
//    - 如果不是物件，直接回傳 T[K]

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]> // <--- 如果是物件，該怎麼遞迴？
    : T[K]; // <--- 如果不是物件，該回傳什麼？
};

// --- 測試 ---
type ReadonlyConfig = DeepReadonly<NestedConfig>;

/*
期望結果：
{
  readonly api: {
    readonly endpoint: string;
    readonly delay: number;
  };
  ...
}
*/

// 測試行為：
const config: ReadonlyConfig = {
  api: {
    endpoint: "https://example.com",
    delay: 1000,
  },
  features: {
    darkMode: true,
  },
};
// config.api.endpoint = "new"; // 這裡應該要報錯！
