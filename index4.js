// For 迴圈

// i++ >= i = i + 1
// i+=2 >= i = i + 2
// for(let i = 0; i < 10; i+=2) {
//     console.log('i:', i)
// }

// 3個人的班級
// let classA = [100, 70, 59]
// console.log(classA);
// for(let i = 0; i < classA.length; i++) { 
//     console.log('分數：', classA[i])
// }

// for(let i = 0; i < classA.length; i++) {
//     if (classA[i] < 60) {
//         classA[i] = 60
//     }
// }
// console.log(classA);

// const a1 = {
//     name: '小a',
//     desc: '貼文一',
// }
// console.log(a1.name);
// console.log(a1.desc);

// [物件一, 物件二...]
// const posts = [
//     {
//         name: '小明',
//         desc: '貼文二'
//     },
//     {
//         name: '大明',
//         desc: '貼文三'
//     }
// ]

// for(let i = 0; i < posts.length; i++) {
//     if (i === 0) {
//         let post = posts[i]
//         console.log(post);
//     }
// }

// --------------------------------------------

// While 迴圈

let conditions = true
let target = 10
let i = 0

while (conditions) {
    if (i === target) { 
        conditions = false
    }
    console.log('i:', i);
    i++
}