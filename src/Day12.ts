// src/day12.ts
// Utilities II

// --- 任務：定義使用者介面並進行結構重組 ---

// 1. 定義基礎使用者介面
interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string; // 敏感資料
  isAdmin: boolean;
}

// 2. 創建公開的使用者資料型別 (UserPublicProfile)
// 要求：從 User 中挑選 (Pick) id, name, 和 isAdmin 屬性。
type UserPublicProfile = Pick<User, "id" | "name" | "isAdmin">;

const publicData: UserPublicProfile = {
  id: 101,
  name: "Alice",
  isAdmin: false,
};

// 3. 創建用於資料庫寫入的型別 (UserWritable)
// 要求：從 User 中排除 (Omit) id (通常由DB生成) 和 passwordHash (敏感資料應該單獨處理或加密)。
type UserWritable = Omit<User, "id" | "passwordHash">;

const newUserData: UserWritable = {
  name: "Bob",
  email: "bob@example.com",
  isAdmin: true,
};

console.log(`Public Profile Name: ${publicData.name}`);
console.log(`New User Email: ${newUserData.email}`);

// 4. 觀察這兩個新型別中是否包含 passwordHash 屬性。
// publicData.passwordHash
// newUserData.passwordHash
