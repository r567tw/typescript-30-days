// src/day22.ts

// 1. 定義三種明確的狀態
interface LoadingState {
  status: "loading"; // <--- 這是「標籤 (Tag)」
}

interface SuccessState {
  status: "success";
  data: string; // 只有成功才有資料
}

interface ErrorState {
  status: "error";
  message: string; // 只有失敗才有錯誤訊息
}

// 2. 組合出聯合型別
type AppState = LoadingState | SuccessState | ErrorState;

// --- 實作挑戰：請完成這個渲染函數 ---

function render(state: AppState) {
  // 利用 switch 或 if 判斷 status
  switch (state.status) {
    case "loading":
      return "載入中...";

    case "success": // <--- 這裡填入什麼？
      // 在這個區塊，TypeScript 會自動知道 state 有 "data" 屬性
      return `資料內容: ${state.data}`;

    case "error": // <--- 這裡填入什麼？
      // 在這個區塊，TypeScript 會自動知道 state 有 "message" 屬性
      return `發生錯誤: ${state.message}`;
  }
}

// 測試用例
console.log(render({ status: "success", data: "Hello World" }));
console.log(render({ status: "error", message: "404 Not Found" }));
