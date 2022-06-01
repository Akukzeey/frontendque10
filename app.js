let slider = document.querySelector('#myRange')
let output = document.querySelector('#page-view')
let output1 = document.querySelector('#money')
let toggle = document.querySelector('.toggle')
let range = document.querySelector('#switch')
let values = ['10K', '50K', '100K', '500K', '1M']
let values1 = [8, 12, 16, 24, 36]

slider.oninput = function () {
    let price = this.value

    output.innerHTML = values[price]

    if (range.checked) {
        output1.innerHTML = values1[price] * 0.75
    } else{
        output1.innerHTML = values1[price]
    }
}

range.addEventListener("change", evt => {
    let beforeCalculation = parseInt(output1.innerHTML)

    if (range.checked) {
        output1.innerHTML = beforeCalculation * 0.75
    } else {
        output1.innerHTML = Math.round(beforeCalculation * 1.33333333334)
    }
})


slider.oninput()