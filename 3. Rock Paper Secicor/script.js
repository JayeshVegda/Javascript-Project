let game = ["rock", "paper", "sci"]
let whoname = prompt("Enter Your Name Buddy")

function hide(clickedItemId){
//   var elements = document.getElementsByClassName('bb');
//   console.log(element)
//   // Loop through each element
//   for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
    
//     // Check if the element is the clicked item
//     if (element.id === clickedItemId) {
//       // Disable the clicked item
//       element.style.pointerEvents = 'none';
//     } else {
//       // Disable the unclicked items
//       element.style.opacity = '0.5'; // You can customize the style to indicate the disabled state
//       element.style.pointerEvents = 'none';
//     }
//   }
  my_game(clickedItemId)
}


function my_game(id){
    
    let set_win = document.getElementById("output")
    var random = game[(Math.random() * game.length) | 0]
    let point = document.getElementById("point")
    let my_name = document.getElementById("name")
    my_name.innerText = whoname
    let my_point = document.getElementById("point").innerText
    var real_point = Number.parseInt(my_point)

    let choice = document.getElementById(id).id

    if(choice == "rock" && random == "rock"){
        console.log("draw, both select rock")
        set_win.innerText = "Result : Draw"
    }
    else if(choice == "rock" && random == "paper"){
        console.log("You Lose Buddy")
        set_win.innerText = "Result : Lose"
        playagain()
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
        playagain()

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
        playagain()
        
    }
    else{
        console.log("Enter Valid input")
    }
    console.log(choice)
}

function playagain(){
    alert(`Your Score is ${real_point}`)
    alert("Do You wanna play Again ?")
    point.innerText = 0
}

// let choice = prompt("enter the name of value : ")


console.log(random)