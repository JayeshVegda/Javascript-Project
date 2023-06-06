function mytry(id){
    let main = document.getElementById("main")
    let text = main.innerText

    if (id == "des"){
        se = Number.parseInt(text)
        let d = document.getElementById("main").innerText = se - 1
    }
    else if (id == "reset"){
        main.innerText = 0
    }
    else if (id == "inc"){
        main.innerText = Number.parseInt(text) + 1
    }
}