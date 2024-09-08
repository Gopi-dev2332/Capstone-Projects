
let poplay=document.querySelector(".poplayer")
let poptet=document.getElementById("poptext")

let buttons=document.getElementById("getpopup")


buttons.addEventListener('click',function(){
    poplay.style.display="block"
    poptet.style.display="block"
})






let container=document.getElementById("container")
let addingpop=document.getElementById("addpopup")
let title=document.getElementById("bookname")
let author=document.getElementById("author")
let text=document.getElementById("textarea")






addingpop.addEventListener('click',function(event){
    event.preventDefault();

    let div=document.createElement("div")
    div.setAttribute("id","contains")
    div.innerHTML=`<h2>${title.value}</h2>
        <h4>${author.value}</h4>
        <p>${text.value}</p>
        <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    poplay.style.display="none"
    poptet.style.display="none"

})







function deletebook(event){
    event.target.parentElement.remove()
}








let can=document.getElementById("cancelpopup");

function take(event){
    event.preventDefault();
    poplay.style.display="none"
    poptet.style.display="none"
}

