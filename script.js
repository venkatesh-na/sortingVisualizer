const container = document.querySelector(".container")
const arr = [11,5,9,4,2,10,6,1]
container.innerHTML = arr.map(e=>{
    return `<div class = "building"></div>`
}).join("")
let buildings = document.querySelectorAll(".building")
buildings = [...buildings]
buildings.map((e,i)=>{
    e.style.height = `${arr[i] * 40}px`
})

let i = 0;
let j = 0;
let interval = setInterval(()=>{
    if(i == arr.length-1)
    {
        clearInterval(interval)
    }
    console.log(arr)
    if(j == arr.length-1)
    {
        j = 0
        i++;
    }
    if(arr[j] > arr[j+1])
    {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        buildings.map((e,i)=>{
            e.style.height = `${arr[i] * 40}px`
        })
    }
    j++;
},200)

