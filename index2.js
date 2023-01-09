// 陣列 Array
let classA = ['小明', '小華', '小美']
// console.log('轉學前：', classA) 

classA.push('小張')
// console.log('轉學後：', classA)

let igPhotos = [
    'https://example.com/1.jpg',
    'https://example.com/2.jpg',
    'https://example.com/3.jpg']

// console.log(igPhotos)
// console.log('第一張照片：', igPhotos[0]); // index = 0
// console.log('第二張照片：', igPhotos[1]);
// console.log('第三張照片：', igPhotos[2]);
// console.log('第四張照片：', igPhotos[3]); // undefined

// 長度
// console.log(classA.length) 
// console.log(igPhotos.length)

// ---------------------------------------------------------------

// 物件 Object
const card = {
    name: '顏嘉緯的名片',
    address: '澎湖',
    age: 19
}

// console.log('名字', card.name)
// console.log('地址', card.address)

const post = {
    image: 'https://example.com/1.jpg',
    desc: '這是一張圖片',
    date: '2020-01-01',
    comment: ['好棒', '很好看', '很棒']
}

const post2 = {
    image: 'https://example.com/2.jpg',
    desc: '這是一張圖片',
    date: '2020-01-03',
    comment: ['好棒', '很好看']
}

const wall = [
    post,
    post2
]
// console.log(wall)