interface Product {
  name: string;
  price: number;
  isStocked: boolean;
}

const chair: Product = {
  name: "chair",
  price: 230,
  isStocked: true,
};

console.log(
  `${chair.name} 價格為 $${chair.price}，目前${
    chair.isStocked ? "有庫存" : "已售罄"
  }`
);

// --- 任務二：Type Alias 定義函式型別 ---

// 1. 定義 CalculateDiscount 型別別名
type CalculateDiscount = {
  (originalPrice: number, discountRate: number): number;
};

// 2. 創建並實作 applyDiscount 函式
const applyDiscount: CalculateDiscount = (originalPrice, discountRate) => {
  return originalPrice - originalPrice * discountRate;
};

console.log(`原價 $100 打 8 折後的價格是: $${applyDiscount(100, 0.2)}`);
// 預期輸出: 原價 $100 打 8 折後的價格是: $80
