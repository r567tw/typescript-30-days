// src/day19.ts

// 1. 定義一個元組
type Config = [string, number, boolean];

// --- 任務 A：提取元組的第一個元素 ---
// 提示：你可以結合 infer 和其餘運算子 (...)
// 結構參考：[infer First, ...any[]]
type GetFirst<T extends any[]> = T extends [infer First, ...any[]]
  ? First
  : never;

type First = GetFirst<Config>; // 期望結果：string

// --- 任務 B：將元組轉換為聯合型別 ---
// 提示：這不需要 infer，回想一下 Day 15 的 [keyof T] 技巧
// 但元組的 key 是數字索引，所以我們用 [number]
type TupleToUnion<T extends any[]> = T[number];

type Union = TupleToUnion<Config>; // 期望結果：string | number | boolean

// --- 測試 ---
const val: Union = "hello"; // OK
const val2: Union = true; // OK
// const val3: Union = {};  // 應該報錯
