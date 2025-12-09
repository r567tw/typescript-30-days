// src/day4.ts
/**
 * 💡 Day 4 知識鞏固：Interface 與 Class 的職責區分
 *  https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript
 * 【Interface (介面) 的職責】
 * 目的：定義合約 (Contract) 或物件的「形狀」。
 * 特性：只描述外部世界可以看到的功能和結構。
 * 存取修飾符：Interface 本身沒有 private 或 public 的概念。
 * 所有在 Interface 中定義的成員，預設都是公開 (Public) 的，因為它們是用來定義給外部實作的接口。
 *
 * 【Class (類別) 的職責】
 * 目的：提供實作 (Implementation) 和實際的邏輯/資料。
 * 存取修飾符：Class 必須使用存取修飾符來控制成員的可見性：
 * - public：外部和內部都可以存取。
 * - private：只能在 Class 內部存取。
 * 核心：Class 使用 private 來實現「封裝 (Encapsulation)」，保護內部狀態不被外部直接修改。
 */
// --- 任務一：定義介面合約 (Runnable) ---
interface Runnable {
  run(speed: number): void;
  isEngineOn(): boolean;
}

// --- 任務二：實作 Class (Vehicle) ---
class Vehicle implements Runnable {
  private _engineStatus: boolean;
  // 1. 定義私有屬性 _engineStatus (布林值)

  constructor() {
    this._engineStatus = false;
  }

  // 2. 實作 run 方法
  public run(speed: number): void {
    this._engineStatus = true;
    for (let i: number = 1; i <= speed; i += 10) {
      console.log("Speed:", i);
    }
  }

  // 3. 定義一個公共方法來檢查引擎狀態
  public isEngineOn(): boolean {
    return this._engineStatus;
  }

  private noUsed(): void {
    console.log("subclass not use private method");
  }

  protected test(): void {
    console.log("subclass can use protected method");
  }
}

class Toyota extends Vehicle {
  public hello() {
    this.test();
    // this.noUsed();
  }
}

// 實例化並測試
const car = new Vehicle();
console.log(`初始狀態: ${car.isEngineOn() ? "ON" : "OFF"}`); // 預期輸出: OFF

car.run(60);
console.log(`運行後狀態: ${car.isEngineOn() ? "ON" : "OFF"}`); // 預期輸出: ON

// 測試：嘗試直接存取 car._engineStatus，觀察 TypeScript 編譯器是否報錯！
// console.log(car._engineStatus);
const ourCar = new Toyota();
ourCar.hello();
