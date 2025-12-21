// src/day23.ts

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
  manageAll: () => void;
}

// --- 任務：實作型別守衛 (Type Guard) ---

/**
 * 檢查傳入的物件是否為 Admin
 * 提示：回傳型別必須寫成「參數名 is 型別」
 */
function isAdmin(person: User | Admin): person is Admin {
  // <--- 這裡要寫什麼型別斷言謂詞？
  // 邏輯：判斷物件中是否存在 'role' 屬性
  return "role" in person; // <--- 檢查哪個屬性是否存在？
}

// --- 實作應用 ---

function processPerson(person: User | Admin) {
  if (isAdmin(person)) {
    // 因為 isAdmin 的功勞，在這裡 TypeScript 知道 person 是 Admin
    console.log(`管理員角色: ${person.role}`);
    person.manageAll(); // 這裡不會報錯
  } else {
    // 在這裡 TypeScript 知道 person 只是普通的 User
    console.log(`普通使用者: ${person.name}`);
    // person.manageAll(); // 如果取消註解，這裡應該會報錯
  }
}

// 測試用例
const user1: User = { name: "Charlie", email: "charlie@test.com" };
const admin1: Admin = {
  name: "Boss",
  email: "admin@test.com",
  role: "SuperAdmin",
  manageAll: () => console.log("正在管理系統..."),
};

processPerson(user1);
processPerson(admin1);
