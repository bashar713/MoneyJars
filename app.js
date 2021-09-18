let nec = 0.46;
let bus = 0.35;
let sel = 0.07;
let sav = 0.07;
let cha = 0.05;
let res_nec = document.querySelector(".res_nec");
let res_bus = document.querySelector(".res_bus");
let res_sel = document.querySelector(".res_sel");
let res_sav = document.querySelector(".res_sav");
let res_cha = document.querySelector(".res_cha");
let sal = document.querySelector(".sal");
const btn = document.querySelector(".btn");
const res = document.querySelector(".res");
btn.addEventListener("click", () => {
    res_nec.innerHTML = (sal.value * nec).toLocaleString('en-US', {
        style: "currency",
        currency: 'ILS'
    });
    res_bus.innerHTML = (sal.value * bus).toLocaleString('en-US', {
        style: "currency",
        currency: 'ILS'
    });;
    res_sel.innerHTML = (sal.value * sel).toLocaleString('en-US', {
        style: "currency",
        currency: 'ILS'
    });;
    res_sav.innerHTML = (sal.value * sav).toLocaleString('en-US', {
        style: "currency",
        currency: 'ILS'
    });;
    res_cha.innerHTML = (sal.value * cha).toLocaleString('en-US', {
        style: "currency",
        currency: 'ILS'
    });;
    sal.value = "";
})




// let moon = document.getElementById('image')
// let box = document.getElementById('box')
// let stat = true;
// moon.addEventListener("click", () => {
//     if (stat) {
//         moon.src = '/moon.svg'
//         document.body.style.color="white"
//         box.style.background = "#FEFCD7"
//         document.body.style.background = "dimgrey"
//         moon.style.transition = "all 2s"
//         stat = false;
//     } else { 
//         moon.src = '/sun.svg'
//         document.body.style.color="black"
//         box.style.background = "white"
//         document.body.style.background = "white"
//         stat = true;
//     }
// });