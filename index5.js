// 宣告
// function hello () {
//     console.log('hello')
// }

// function hello2 () {
//     console.log('hello2')
// }

// function hello3 () {
//     console.log('hello3')
// }

// // 執行/呼叫
// hello()
// hello2()
// hello3()

// --------------------------------------------

// function addMoney () {
//     console.log(100 + 200 - 100)
// }

// // 結帳頁面
// addMoney()

// // 購物車頁面
// addMoney()

// --------------------------------------------

// 有參數的 function
// 接受傳入3個參數
// function addMoney(price1, price2, discount) {
//     console.log('price1', price1);
//     console.log('price2', price2);
//     console.log('discount', discount); //沒有傳入則是undefined
//     console.log(price1 + price2 - discount) // 運算時會變成NaN
// }

// // 結帳頁面
// addMoney(2000, 100, 50)

// // 購物車頁面
// addMoney(3000, 200, 100)

// --------------------------------------------

// 有回傳值的 function (return)
// function addMoney(price1, price2, discount) {
//     let returnValue = price1 + price2 - discount
//     let message = '普通會員'

//     if (returnValue >= 3000) {
//         message = '鑽石會員'
//         return message
//     }

//     if(returnValue >= 2000)  {
//         message = '白金會員'
//         return message
//     }

//     return message
// }

// let message = addMoney(3000, 100, 50)
// console.log('message', message)

// --------------------------------------------

// // 構造函數 function
// function createCard(initName) {
//     this.name = initName
// }

// // new 建立或構造
// const a1 = new createCard('小明')
// const a2 = new createCard('小華')
// const a3 = new createCard('小張')
// const a4 = new createCard('小立')
// const a5 = new createCard('小美')
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// --------------------------------------------

// function hello() {}

// let hello = function() {}

// let hello = () => {} // 解決跟this有關的問題