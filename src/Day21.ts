// src/day21.ts

// 1. 定義資料模型 (Data Models)
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

// 2. 通用的 API 請求工具
// <T> 是一個佔位符，代表「呼叫者會告訴我它是什麼型別」
async function apiService<T>(url: string): Promise<T> {
  // 注意：這裡假設我們使用原生 fetch
  // 在 Node.js 環境測試可能需要 node-fetch 或改用模擬資料
  console.log(`正在請求路徑: ${url}`);

  // 模擬 fetch 的行為
  const mockResponse = {
    ok: true,
    json: async () => {
      if (url.includes("user"))
        return { id: 1, name: "Alice", email: "alice@example.com" };
      if (url.includes("posts"))
        return [{ id: 101, title: "TS is great", body: "..." }];
      return null;
    },
  };

  const data = await mockResponse.json();
  return data as T; // 這裡使用 'as T' 將資料斷言為泛型 T
}

// --- 實作挑戰 ---

async function runApplication() {
  // 任務 A：抓取「單一使用者」
  // 提示：你需要把 User 傳進泛型參數中
  const user = await apiService<User>("https://api.example.com/user/1");

  console.log(`使用者名稱: ${user.name}`); // 這裡應該要有自動提示

  // 任務 B：抓取「文章列表」
  // 提示：這是一個陣列，所以型別應該是 Post[]
  const posts = await apiService<Post[]>("https://api.example.com/posts");

  console.log(`總共有 ${posts.length} 篇文章`);
  console.log(`第一篇文章標題: ${posts[0]?.title}`);
}

runApplication();
