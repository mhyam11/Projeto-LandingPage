var SetaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style = "display:none" 
    Samantha.style = "display:flex" 
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}

