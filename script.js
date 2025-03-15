let photo=document.querySelector("#photo");
let rbtn=document.querySelector("button");
let images=['b.png','c.png']
let image=document.querySelector("img")
let i=0;
function next(){if(i>=images.length-1){
        i=-1
    }
    
    i++;
    console.log(i)
    return SetImg()
}
function prev(){
    i--;
    return SetImg()
}

function SetImg(){
      image.setAttribute("src",images[i])
}

// let handler1=()=>{
//     photo.classList.add("p1")
// }
// let handler2=()=>{
//     photo.classList.add("p2")
// }
// let handler3=()=>{
//     photo.classList.add("p3")
// }
// let flag=false;
// rbtn.addEventListener("click",handler3)

// rbtn.addEventListener("click",handler2)
//     rbtn.addEventListener("click",handler1)

    

