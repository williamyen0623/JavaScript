// class 的基本操作
// class Card {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const card1 = new Card("顏嘉緯");
// console.log(card1);
// console.log(card1.name);

// ----------------------------------------------------------------

// this
// class Card {
//     constructor(name) {
//         this.name = name;
//         // this.hellooo = this.hello.bind(this) //綁定在constructor
//     }

//     hello = () => {
//         console.log('hello', this.name); // hello被存在prototype的寫法, 一百個物件只有過hello, 節省記憶體空間
//     }
// }

// // Card.prototype.helloo = function() {}


// const card1 = new Card("顏嘉緯");
// //console.log('card1', card1);
// card1.hello()

// const a = { name: 'John'}
// a.helloo = card1.hello
// a.helloo()

//大部分情況都會根據物件本身的屬性去做運算, 但有時候會需要根據外部的變數去做運算, 這時候就需要用到bind

// ----------------------------------------------------------------

//繼承
class Car {
    constructor(initName) {
        this.name = initName
    }
    start() {
        console.log('車子開始啟動');
    }
}

class Porshe extends Car {
    constructor(namePorshe) {
        super(namePorshe)
    }

    start2() {
        super.start()
        console.log('車子排氣'); 
    }

    start() { // 蓋過父類別的start
        super.start()
        console.log('porshe開始啟動');
    }

}

const p1 = new Porshe("顏嘉緯的保時捷")
p1.start()
console.log('name', p1.name);