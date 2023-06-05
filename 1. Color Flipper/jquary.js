function mytry(id){
    let my_id = id
    let a = document.getElementById(id)
    let a2 = document.getElementById('mytext')
    console.log(a2)
    document.body.style.backgroundColor = id
    a2.innerText = `${id} Color`.toUpperCase()
}