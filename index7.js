// call back 回呼
window.addEventListener('load', function() {
    const p1 = document.getElementById('title')
    p1.innerText = "訂閱ycw frontend"

    // w3school 教學資源
    const b1 = document.getElementById('btn')
    b1.addEventListener('click', function() {
        console.log('click')
    })

    const box1 = document.getElementById('box')
    box1.innerHTML = "<p>Test</p>"

    const in1 = document.getElementById('input1')
    in1.addEventListener('keyup', function(event) {
        console.log('event: ', event.target.value);
    })

})
