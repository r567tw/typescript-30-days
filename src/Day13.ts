// src/day13.ts
// Mapped Types

// --- 任務：使用映射型別創建 MyPartial<T> ---

// 1. 定義一個基礎使用者介面 (與 Day 12 相同)
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. 挑戰：使用映射型別語法 [K in keyof T]
//    來定義一個泛型型別 MyPartial<T>，使其行為與內建的 Partial<T> 完全一致。
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// 3. 測試 MyPartial<T>
type UserUpdatePayload = MyPartial<User>;

// 實例化 UserUpdatePayload
// 應該能夠不傳遞任何屬性，或只傳遞部分屬性
const updatePayload: UserUpdatePayload = {
  name: "Charlie", // 只需要更新名稱
  // id 和 email 都是可選的
};

console.log(`Update Name: ${updatePayload.name}`);
