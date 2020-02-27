document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded")


    // ------------- MATRICE JAVASCRIPT -----------------------


    // TARGET DOM

    function byId(n) {
        return document.getElementById(n)
    }

    const tik1 = byId("tik1")
    const tik2 = byId("tik2")
    const tik3 = byId("tik3")
    const tik4 = byId("tik4")
    const tik5 = byId("tik5")
    const tik6 = byId("tik6")

    const ticket1 = byId("ticket1")
    const ticket2 = byId("ticket2")
    const ticket3 = byId("ticket3")
    const ticket4 = byId("ticket4")
    const ticket5 = byId("ticket5")
    const ticket6 = byId("ticket6")

    tik1.addEventListener("click", function(){
        let item = byId("ticket1")
        item.style.display = "flex"
        ticket2.style.display = "none"
        ticket3.style.display = "none"
        ticket4.style.display = "none"
        ticket5.style.display = "none"
        ticket6.style.display = "none"
    })

    tik2.addEventListener("click", function(){
        let item = byId("ticket2")
        item.style.display = "flex"
        ticket1.style.display = "none"
        ticket3.style.display = "none"
        ticket4.style.display = "none"
        ticket5.style.display = "none"
        ticket6.style.display = "none"
    })

    tik3.addEventListener("click", function(){
        let item = byId("ticket3")
        item.style.display = "flex"
        ticket1.style.display = "none"
        ticket2.style.display = "none"
        ticket4.style.display = "none"
        ticket5.style.display = "none"
        ticket6.style.display = "none"
    })

    tik4.addEventListener("click", function(){
        let item = byId("ticket4")
        item.style.display = "flex"
        ticket1.style.display = "none"
        ticket2.style.display = "none"
        ticket3.style.display = "none"
        ticket5.style.display = "none"
        ticket6.style.display = "none"
    })

    tik5.addEventListener("click", function(){
        let item = byId("ticket5")
        item.style.display = "flex"
        ticket1.style.display = "none"
        ticket2.style.display = "none"
        ticket3.style.display = "none"
        ticket4.style.display = "none"
        ticket6.style.display = "none"
    })

    tik6.addEventListener("click", function(){
        let item = byId("ticket6")
        item.style.display = "flex"
        ticket1.style.display = "none"
        ticket2.style.display = "none"
        ticket3.style.display = "none"
        ticket4.style.display = "none"
        ticket5.style.display = "none"
    })

})