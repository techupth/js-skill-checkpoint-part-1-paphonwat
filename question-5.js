// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode){
  let totalPrice = 0
  ///////หามูลค่าสินค้า///////
  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    totalPrice += product.price * product.quantity
  }
  ///////ส่วนลด///////
  switch (promotionCode) {
    case "SALE20":
      totalPrice *= 0.8
      break
    case "SALE50":
      totalPrice *= 0.5
      break
    default:
      break
  }
  return totalPrice
}
console.log("Total Price:", calculateTotalPrice(products, promotionCode))








