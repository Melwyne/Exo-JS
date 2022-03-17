const btn1 = document.querySelector('.btn1');
const para1 = document.querySelector('.para1');

btn1.addEventListener("click", ()=>{
    para1.classList.toggle('hidden');
})



const posX = document.querySelector('.posX');
const posY = document.querySelector('.posY');

document.addEventListener("mousemove", (e)=>{
    posX.innerHTML = e.x;
    posY.innerHTML = e.y;
})



const thumb = document.querySelectorAll('.thumb > img');
const currentImg = document.querySelector('#currentImg');

thumb.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        currentImg.setAttribute("src", e.target.src)
    })
})



const btn = document.querySelector('.bloc4 > button');
const txt = document.querySelector('.bloc4 > blockquote');

btn.addEventListener('click', ()=>{
    txt.innerText = txt.innerText.split("").reverse().join("");
})



const result = document.querySelector('.result');
const inp = document.querySelector('#input');
const p = document.createElement("p");

result.appendChild(p);

inp.addEventListener('input', ()=>{
    p.innerText = inp.value;
})