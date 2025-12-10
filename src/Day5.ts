// src/day5.ts

// --- 任務一：Union & Literal Types ---

// 1. 定義 HandleResponse 函式
function HandleResponse(
  status: "success" | "error" | "pending",
  message: string | number
): void {
  if (status === "success") {
    console.log(`✅ 成功: ${message}`);
  } else if (status === "error") {
    console.error(`❌ 錯誤碼: ${message}`);
  } else {
    console.log(`⏳ 處理中: ${message}`);
  }
}

// 測試 (確保能接受字串或數字作為 message)
HandleResponse("success", "資料已更新");
HandleResponse("error", 404);
HandleResponse("pending", "等待伺服器響應");
// HandleResponse('invalid', "嘗試錯誤的狀態"); // 觀察編譯器報錯

// --- 任務二：Optional Properties ---

// 1. 定義 ContactInfo 介面
interface ContactInfo {
  name: string;
  phone: number;
  email?: string; // 請確認這裡的寫法是否正確
}

// 2. 創建包含 email 的變數
const user1: ContactInfo = {
  name: "Alice",
  phone: 12345678,
  email: "abc@test.com",
};

// 3. 創建不含 email 的變數
const user2: ContactInfo = {
  name: "Bob",
  phone: 87654321,
  // (不加入 email)
};

console.log(`User 1 Email: ${user1.email || "N/A"}`);
console.log(`User 2 Email: ${user2.email || "N/A"}`);
