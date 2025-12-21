// src/day18.ts

// --- 任務：手動實現 MyReturnType<T> ---

// 1. 定義測試用的函式
const getUser = () => {
  return { id: 1, username: "gemini_explorer" };
};

const getLevel = (xp: number) => {
  return xp > 100 ? "Gold" : "Silver";
};

// 2. 挑戰：定義 MyReturnType<T>
//    提示：
//    - T 必須是一個函式：(...args: any[]) => any
//    - 這次 infer 應該放在「回傳值」的位置
//    - 如果匹配成功，回傳推導出來的型別；否則回傳 never。

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer P // <--- 這裡要用 infer 怎麼寫？
  ? P // <--- 這裡要回傳什麼？
  : never;

// 3. 測試 MyReturnType<T>

// 測試 A: 提取物件回傳值
// 期望結果: { id: number; username: string }
type UserInfo = MyReturnType<typeof getUser>;

const user: UserInfo = {
  id: 99,
  username: "charlie_brown",
};

// 測試 B: 提取字串回傳值
// 期望結果: "Gold" | "Silver"
type LevelType = MyReturnType<typeof getLevel>;

// 測試 C: 提取非同步函式的回傳值 (進階思考)
async function fetchScore() {
  return 100;
}

// 思考：這裡提取出來的會是 number 還是 Promise<number>？
type AsyncResult = MyReturnType<typeof fetchScore>;
