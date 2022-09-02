let ulPaint = document.getElementById("paint")
let ulAction = document.getElementById("action")

let listActions = []
let listPaintings = []

function separateItens(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].type == "action"){
            listActions.push(lista[i])
        }else{
            listPaintings.push(lista[i])
        }
    }
}
separateItens(itens)

function addCards(lista, htmlsection){
    for(let i = 0; i < lista.length; i++){
        let li = document.createElement("li")
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        img.src = lista[i].image
        img.alt = lista[i].name
        h3.innerText = lista[i].name
        p.innerText = `R$${lista[i].price}`
        figure.appendChild(img)
        li.append(figure, h3, p)
        htmlsection.append(li)
        li.classList.add("card")
    }
}

addCards(listActions, ulAction)
addCards(listPaintings, ulPaint)

