// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

////// 1 ///////////////////////////////////////////////////
function updateInventory(){
  inventory[0].quantity = 200
  return inventory
}
console.log(updateInventory())

////// 2 ///////////////////////////////////////////////////
inventory.push(
  { name: "Orange", price: 20, quantity: 300 }
)
console.log(inventory)

////// 3 ///////////////////////////////////////////////////
const totalquantity = inventory.reduce ((total, item) => {
  return total + (item.price * item.quantity)
},0)
console.log(totalquantity)