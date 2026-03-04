let active=document.querySelectorAll(".txt")
active.forEach(link=>{
    if(link.href===window.location.href){
        link.classList.add("active")
    }

})
