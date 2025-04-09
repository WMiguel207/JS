let area = document.getElementById("area")

function permitirSoltar(ev){
    ev.preventDefault();
}

function comecarArrastar(ev){
    ev.dataTransfer.setData("text", ev.target.id)
}

function soltar(ev){
    area.innerText = ""
    ev.preventDefault()
    const id = ev.dataTransfer.getData("text")
    const elemento = document.getElementById(id)
    ev.target.appendChild(elemento)
}