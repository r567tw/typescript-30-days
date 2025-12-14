# TypeScript 30 Days

## Notes

> TypeScript (TS) 是 JavaScript (JS) 的語法超集 (Syntactic Superset)。

- 語法包含： 所有 JS 程式碼皆是合法的 TS 語法，可被編譯器解析。
- 功能擴展： TS 新增了靜態型別系統 (interface, : type 等)。
- 關鍵差異： 在嚴格模式下，TS 編譯器會拒絕或警告部分在 JS 中合法、但不符合型別安全規範的程式碼，使其不構成嚴格超集。
- 目標： 提高程式碼健壯性，最終移除型別，輸出純 JS。
- Reference: https://stackoverflow.com/questions/29918324/is-typescript-really-a-superset-of-javascript

```bash
# 初始化 在您的專案根目錄下生成一個名為 tsconfig.json 的檔案。
# 這個檔案是 TypeScript 編譯器的設定檔，它告訴編譯器：
# 目標 JS 版本 (e.g., es2020)
# 使用哪個模組系統 (e.g., commonjs)
# 是否開啟嚴格模式 (strict: true)
# 編譯後的 JS 檔案要放在哪裡 (outDir)
npx tsc --init
# 快速開發和除錯（無需編譯步驟）
npx ts-node src/xxx.ts
# 目的：正式編譯（準備部署）
npx tsc // 編譯出來
```

## Daily Topics

- Day 1: Hello World
- Day 2: Array & Tuple
- Day 3: Interface & Type Alias
- Day 4: Classes & Encapsulation
- Day 5: Union, Literal, & Optional
- Day 6: Type Guards & Narrowing
- Day 7: Function Overloads & Non-Returning Types
- Day 8: Generics Fundamentals
- Day 9: Generic Constraints
