// src/day29.ts

// ❌ 原始危險程式碼 (Any Everywhere)
function unsafeLog(data: any) {
  console.log(data.name.toUpperCase()); // 如果 data 沒 name 屬性，這裡直接崩潰
}

// ✅ 任務：重構成安全版本
function safeLog(data: unknown) {
  // 1. 先將參數改為最安全的「未知型別」

  // 2. 開始進行「型別縮減 (Type Narrowing)」
  // 檢查是否為物件且不是 null
  if (typeof data === "object" && data !== null) {
    // 3. 檢查是否存在 name 屬性且為 string
    // 提示：使用 in 關鍵字或型別斷言
    if ("name" in data && typeof (data as any).name === "string") {
      // 此時我們已經確保安全性了
      const name = (data as { name: string }).name;
      console.log(name.toUpperCase());
    }
  } else {
    console.log("資料不是有效的物件");
  }
}

// --- 測試 ---
safeLog({ name: "gemini" }); // ✅ 正常運作
safeLog(123); // ✅ 安全跳過，不崩潰
safeLog(null); // ✅ 安全跳過，不崩潰
