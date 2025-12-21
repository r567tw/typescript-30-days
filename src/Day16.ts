// src/day16.ts

// --- 任務：使用 infer 提取陣列元素型別 ---

// 1. 定義一個基礎陣列型別
type UserList = { name: string; age: number }[];

// 2. 挑戰：定義 ElementType<T>
//    使用條件型別結合 infer 關鍵字來推導陣列的內部型別。
//    語法提示：T extends (infer U)[] ? U : T
type ElementType<T> = T extends (infer U)[] ? U : T;

// 3. 測試 ElementType<T>

// 測試 A: 陣列輸入
// 期望結果: { name: string; age: number }
type UserType = ElementType<UserList>;

const testUserType: UserType = {
  name: "hello world",
  age: 39,
};
console.log(testUserType);

// 測試 B: 非陣列輸入
// 期望結果: number
type NonArrayType = ElementType<number>;
const testNonArrayType: NonArrayType = 98;
console.log(testNonArrayType);

// 測試 C: 混合陣列輸入
// 期望結果: string | number
type MixedArrayType = ElementType<(string | number)[]>;
const testMixedArrayType: MixedArrayType = "123";
console.log(testMixedArrayType);

console.log(`UserType 是一個物件型別。`);
console.log(`NonArrayType 是一個 number 型別。`);
