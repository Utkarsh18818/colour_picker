let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let copyDiv = document.querySelector('.copycode')
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexvalues = ()=>{
    let myHexvalues = "0123456789abcdef"
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += myHexvalues[Math.floor(Math.random() * 16)];
    }
    return color;
};
const handelButton1 = ()=>{
    rgb1 = hexvalues();
    console.log(rgb1)
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;
    btn1.innerText = `${rgb1}`;
};
const handelButton2 = ()=>{
    rgb2 = hexvalues();
    console.log(rgb2)
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;
    btn2.innerText = `${rgb2}`;
}

btn1.addEventListener('click',handelButton1);
btn2.addEventListener('click',handelButton2);

copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
});