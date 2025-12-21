// src/day25.ts

interface User {
  id: number;
  name: string;
}

/**
 * 簡易的 Schema 驗證器
 * 目標：確保 unknown 資料符合 User 格式
 */
function validateUser(data: any): data is User {
  // 檢查點 1: 資料必須存在且是物件
  // 檢查點 2: 具備 id 且型別是 number
  // 檢查點 3: 具備 name 且型別是 string
  return (
    data !== null &&
    typeof data === "object" &&
    typeof data.id === "number" && // <--- 填入正確的 typeof 檢查字串
    typeof data.name === "string" // <--- 填入正確的 typeof 檢查字串
  );
}

// --- 實作應用：模擬從 LocalStorage 拿資料 ---

function loadUserData() {
  // 假設這是從 localStorage 拿到的字串
  const rawData = localStorage.getItem("user_profile");

  if (!rawData) return;

  try {
    const parsedData = JSON.parse(rawData);

    // 使用驗證器進行安檢
    if (validateUser(parsedData)) {
      // 在這個區塊內，parsedData 被安全地推導為 User
      console.log(`驗證通過！使用者 ID 為: ${parsedData.id}`);
    } else {
      console.error("驗證失敗：資料格式不正確");
    }
  } catch (e) {
    console.error("JSON 解析出錯");
  }
}

// 測試行為
console.log(
  validateUser({ id: 1, name: "Gemini" }), // 應回傳 true
  validateUser({ id: "1", name: 123 })
); // 應回傳 false
