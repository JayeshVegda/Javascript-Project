
function my_game(id){
    let game = ["rock", "paper", "sci"]
    let set_win = document.getElementById("output")

    let point = document.getElementById("point")
    let my_point = document.getElementById("point").innerText
    let real_point = Number.parseInt(my_point)

    var random = game[(Math.random() * game.length) | 0]
    let choice = document.getElementById(id).id

    if(choice == "rock" && random == "rock"){
        console.log("draw, both select rock")
        set_win.innerText = "Result : Draw"
    }
    else if(choice == "rock" && random == "paper"){
        console.log("You Lose Buddy")
        set_win.innerText = "Result : Lose"
        point.innerText = 0
    }
    else if(choice == "rock" && random == "sci"){
        console.log("You win Buddy")
        set_win.innerText = "Result : Won"
        point.innerText = real_point + 1
    }
    
    
    else if(choice == "paper" && random == "paper"){
        console.log("draw. both select paper")
        set_win.innerText = "Result : Draw"
    }
    else if(choice == "paper" && random == "rock"){
        console.log("You win Buddy")
        set_win.innerText = "Result : Won"
        point.innerText = real_point + 1
    }
    else if(choice == "paper" && random == "sci"){
        console.log("You Lose Buddy")
        set_win.innerText = "Result : Lose"
        point.innerText = 0
    }
    
    
    else if(choice == "sci" && random == "sci"){
        console.log("draw, both select sci")
        set_win.innerText = "Result : Draw"
    }
    else if(choice == "sci" && random == "paper"){
        console.log("You win Buddy")
        set_win.innerText = "Result : Won"
        point.innerText = real_point + 1
    }
    else if(choice == "sci" && random == "rock"){
        console.log("You Lose Buddy")
        set_win.innerText = "Result : Lose"
        point.innerText = 0
    }
    else{
        console.log("Enter Valid input")
    }
    console.log(choice)
}

// let choice = prompt("enter the name of value : ")


console.log(random)