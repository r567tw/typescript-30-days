// src/day30.ts
const localStorage = {
  store: {} as Record<string, string>,
  getItem(key: string) {
    return this.store[key] ?? null;
  },
  setItem(key: string, value: string) {
    this.store[key] = value;
  },
};

class TypeSafeStorage {
  /**
   * 任務：實作一個泛型方法 get<T>
   * 1. 取得 key 對應的字串
   * 2. 若不存在回傳 null
   * 3. 若存在，JSON.parse 後「斷言」或「驗證」為 T
   */
  static get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
      // 這裡簡單使用斷言，實務上可結合 Day 25 的 Validation
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }

  /**
   * 任務：實作 set<T>
   * 1. 接收 key 和 型別為 T 的 value
   * 2. JSON.stringify 後存入
   */
  static set<T>(key: string, value: T): void {
    const stringValue = JSON.stringify(value); // 將 value 轉為字串
    localStorage.setItem(key, stringValue);
  }
}

// --- 最終測試 ---

interface UserProfile {
  id: number;
  tags: string[];
}

// 存入資料
TypeSafeStorage.set<UserProfile>("user_01", { id: 99, tags: ["ts", "react"] });

// 讀取資料 (這裡 user 應該會被自動推導為 UserProfile | null)
const user = TypeSafeStorage.get<UserProfile>("user_01");

if (user) {
  console.log(user.id); // ✅ 有自動補完！
  console.log(user.tags.map((t) => t.toUpperCase())); // ✅ 陣列方法也安全！
}
