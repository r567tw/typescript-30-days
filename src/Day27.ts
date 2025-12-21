// src/day27.ts

// 1. 定義基礎的資源名稱
type Entity = "user" | "post" | "comment";

// 2. 任務：自動生成 "get_user" | "get_post" | "get_comment"
// 提示：就像 JavaScript 的字串插值一樣，但在型別層級使用
type GetterName = `get_${Entity}`;

// 3. 實戰應用：限制 API 函數的參數
function apiFetch(endpoint: GetterName) {
  console.log(`正在請求: /api/v1/${endpoint}`);
}

// --- 測試 ---

apiFetch("get_user"); // ✅ 正確
apiFetch("get_post"); // ✅ 正確

// ❌ 應該報錯的用法 (請嘗試取消註解測試)
// apiFetch("fetch_user");  // 錯誤：不符合 get_ 開頭的規範
// apiFetch("get_product"); // 錯誤：product 不在 Entity 聯合型別中
