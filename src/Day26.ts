// src/day26.ts

// 1. 定義所有的事件及其對應的資料格式 (Payload)
interface MyEvents {
  "score-updated": number; // 分數更新必須是數字
  "user-login": { name: string }; // 登入必須是物件
  "game-over": undefined; // 遊戲結束不需要傳資料
}

// 2. 實作事件中心
class EventEmitter<T> {
  // 這裡我們簡化實作，只專注在 emit 的型別定義
  emit<K extends keyof T>(eventName: K, payload: T[K]) {
    console.log(`觸發事件: ${String(eventName)}, 資料:`, payload);
    // 實際邏輯會在這裡呼叫監聽器...
  }
}

// --- 任務：請完成 emit 的參數型別 ---

const bus = new EventEmitter<MyEvents>();

// ✅ 正確用法
bus.emit("score-updated", 100);
bus.emit("user-login", { name: "Bob" });
bus.emit("game-over", undefined);

// ❌ 應該報錯的用法 (請取消註解測試)
// bus.emit("score-updated", "100"); // 錯誤：應該傳入 number
// bus.emit("user-login", { id: 1 }); // 錯誤：物件格式不對
// bus.emit("non-exists", {});      // 錯誤：沒有這個事件
