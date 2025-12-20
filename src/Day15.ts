// src/day15.ts

// --- 任務：使用條件型別篩選屬性 ---

// 1. 定義一個混合型別的介面
interface DataItem {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  lastUpdated: Date;
}

// --- 步驟 A: 篩選出型別為 string 的 Key ---

// 2. 挑戰：定義 StringKeys<T>
//    使用條件型別 (T extends U ? X : Y) 來篩選 T 中所有值型別為 string 的屬性鍵。
//    如果屬性值是 string，則回傳其鍵 K；否則，回傳 'never'。
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
// 注意：[keyof T] 放在映射型別後，會將映射型別的值 (K 或 never) 組合成一個聯合型別。

// 3. 測試 StringKeys<DataItem>
// 期望結果: "name" | "description"
type StringAttributeKeys = StringKeys<DataItem>;

// --- 步驟 B: 使用 Pick 結合篩選出的 Key ---

// 4. 挑戰：定義 PickByType<T, U>
//    使用內建的 Pick<T, K> 結合您在步驟 A 中學到的條件型別技巧，
//    創建一個新的工具型別，它只保留 T 中值型別為 U 的屬性。
type PickByType<T, U> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends U ? K : never;
  }[keyof T]
>; // ❌ 這裡不該寫死 StringKeys<T>

// [請使用步驟 A 的邏輯來定義 PickByType<T, U> 的第二個參數 (K)]

// 5. 測試 PickByType<DataItem, string>
// 期望結果: 只包含 name 和 description 屬性
type StringAttributes = PickByType<DataItem, string>;

// 實例化 StringAttributes
const articleDetails: StringAttributes = {
  name: "Day 15 Challenge",
  description: "Filtering properties by type.",
  // id, isActive, lastUpdated 都不應存在
};

console.log(`String Attributes: ${articleDetails.name}`);
