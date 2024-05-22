// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
////// 1 ///////////////////////////////////////////////////
myTodo.push(
  {id: 5, todo: "Walk the dog"}
)
console.log(myTodo)

////// 2 ///////////////////////////////////////////////////
function updateTodo(){
  myTodo[3].todo = "Go to the gym"
  return myTodo
}

console.log(updateTodo())

////// 3 ///////////////////////////////////////////////////
myTodo.pop()
console.log(myTodo)

////// 4 ///////////////////////////////////////////////////
console.log(`To-do id: ${myTodo[3].id}, ${myTodo[3].todo}` )