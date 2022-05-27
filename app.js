let slider=document.querySelector('#myRange')
let output=document.querySelector('#demo')
let output1=document.querySelector('#demo1')

slider.oninput=function () {
    let price = 8 + 4 * this.value;
    let views = 50 + 25 * this.value;
    output.innerHTML = `$ ${price}.00`;
    output1.innerHTML = `${views}K`;
}

slider.addEventListener('mousemove',function () {
          let x=slider.value;
          let color='linear-gradient(90deg,rgb(0,255,255)'+ x +'%,rgb(214,214,214)'+ x + '%)';
    slider.style.background=color
})




