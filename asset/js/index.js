document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded")


    // ------------- MATRICE JAVASCRIPT -----------------------


    // TARGET DOM

    function byId(n) {
        return document.getElementById(n)
    }

    function switchTicket(a,b){
        let item = byId(a)
        let ticket = byId("blankTicket")
        item.addEventListener("click", function(){
            ticket.src = b
        })
    }

    switchTicket("tik1", "asset/html/ticket1.html")
    switchTicket("tik2", "asset/html/ticket2.html")
    switchTicket("tik3", "asset/html/ticket3.html")
    switchTicket("tik4", "asset/html/ticket4.html")
    switchTicket("tik5", "asset/html/ticket5.html")
    switchTicket("tik6", "asset/html/ticket6.html")
    switchTicket("tik0", "asset/html/blank.html")

})