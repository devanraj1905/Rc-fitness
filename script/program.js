let tabs = document.querySelectorAll(".tab");
let panel = document.querySelectorAll(".panel");

let mainTab = document.querySelector(".tabs")


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => { t.classList.remove("active") })
        panel.forEach(p => { p.classList.remove("active") })

        tab.classList.add("active")
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active")

    })

})

