let main=document.querySelector("main")
// console.log(main)
let menu=document.querySelector(".menu")
// console.log(menu)
let remove=document.getElementById("ok")
// console.log(remove)
// let head=document.querySelector(".head")
let body=document.querySelector(".body")
// console.log(body)
let p=document.getElementById("tong")
main.addEventListener("click",function(){
    main.classList.toggle('active')
    menu.classList.remove('active')
})
remove.addEventListener("click",function(){
    main.classList.remove('active')
    menu.classList.toggle('active')
})
let button=document.querySelectorAll(".button")
// console.log(button)
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(event){
        let add=event.target
        // console.log(add)//lay the button
        let product=add.parentElement
        // console.log(product)
        let productimg=product.querySelector("img").src
        // console.log(productimg)
        let productname=product.querySelector("p").innerText
        let gia=product.querySelector('span').innerText
        // console.log(productname)
        // console.log(productimg,productname,gia)
        addcart(productimg,productname,gia)
    })
}
function addcart(productimg,productname,gia){
    let tr=document.createElement("tr")
    let tong=document.querySelectorAll(".body tr")
    for(let i=0;i<tong.length;i++){
        let title=tong[i].querySelector(".title")
        // console.log(title)
        if(title.innerHTML==productname){
            alert('da co trong gio hang')
        }
    }
    tr.innerHTML=`<td><img class="img-1" src="${productimg}"><p class="title">${productname}</p></td>
    <td><span class="gia">${gia}</span></td>
    <td><input type="number" value="1" min="1"></td>
    <td><td class="button-1">xoa</td>`
    body.appendChild(tr)
    pluscart()
    delete1()
    input()
}
function pluscart(){
    let tong=document.querySelectorAll(".body tr")
    //  console.log(tong)
    let totalC=0
    for(let i=0;i<tong.length;i++){
        let inputvalue=tong[i].querySelector("input").value
        let gia=tong[i].querySelector("span").innerHTML
        // console.log(inputvalue)
        // console.log(gia)
        let totalA=inputvalue*1000*gia
        // console.log(totalA)
        totalC=totalC+totalA
        // console.log(totalC)
    }
    p.innerHTML=totalC

}
function delete1(){
    let tong=document.querySelectorAll(".body tr")
    for(let i=0;i<tong.length;i++){
        let button1=tong[i].querySelector(".button-1")
        // let button1=document.querySelectorAll(".button-1")
        // console.log(button1)//lay het the button chua class button-1
        button1.addEventListener('click',function(event){
            let create=event.target
            let delete1=create.parentElement
            console.log(delete1)
            delete1.remove()
            pluscart()
        })


    }

}
function input(){
    let tong=document.querySelectorAll(".body tr")
    for(let i=0;i<tong.length;i++){
        let input=tong[i].querySelector("input")
        input.addEventListener("change",function(){
            pluscart()//thay doi so luong
        })
    }
}