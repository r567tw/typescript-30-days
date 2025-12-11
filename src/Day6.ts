// src/day6.ts

// --- 任務一：使用 typeof 進行型別收窄 ---

function logValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`字串長度: ${value.length}`);
  } else {
    // 提示：此時 value 已經被收窄為 number
    console.log(`數字兩倍: ${value * 2}`);
  }
}

logValue("Hello TS");
logValue(150);

// --- 任務二：自訂型別守衛(is) 與 in 運算子 ---

interface Dog {
  bark(): void;
}
interface Fish {
  swim(): void;
}

// 1. 定義自訂型別守衛函式
// pet is Dog 是關鍵的 Type Predicate
function isDog(pet: Dog | Fish): pet is Dog {
  // 2. 使用 'in' 運算子判斷物件是否有 'bark' 屬性
  // if (isDog(pet)) 成功將 pet 從 Dog | Fish 收窄為 Dog
  //   if ("bark" in pet) {
  //     return true;
  //   }
  //   return false;
  return "bark" in pet;
}

// 3. 定義處理函式
function handlePet(pet: Dog | Fish): void {
  if (isDog(pet)) {
    // 在此區塊內，pet 的型別已確認為 Dog
    pet.bark();
  } else {
    // 在此區塊內，pet 的型別被收窄為 Fish
    pet.swim();
  }
}

// 測試
const myDog: Dog = { bark: () => console.log("汪汪!") };
const myFish: Fish = { swim: () => console.log("咕嚕咕嚕...") };

handlePet(myDog);
handlePet(myFish);
