// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const minquantity = inventory.reduce((min, item) => {
  return item.quantity < min ? item.quantity : min;
}, inventory[0].quantity)
console.log(minquantity)