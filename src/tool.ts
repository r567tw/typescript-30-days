/**
 * TypeScript 30-Day Survivor Toolkit
 */

// 1. 深度可選 (Day 28)
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// 2. 異步回傳型別 (Day 18 延伸)
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

// 3. 強制排除 null (內建但好用)
export type NonNullable<T> = T extends null | undefined ? never : T;
