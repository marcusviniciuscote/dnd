let valorForca = document.getElementById('forca')
let valorModificadorForca = document.getElementById('modificadorForca')


function calcularModificador() {

    let cm = parseInt(valorForca.value)

    switch (cm) {
        case 1:
            valorModificadorForca.innerHTML = -5
            break;
        case 2:
        case 3:
            valorModificadorForca.innerHTML = -4
            break;
        case 4:
        case 5:
            valorModificadorForca.innerHTML = -3
            break;
        case 6:
        case 7:
            valorModificadorForca.innerHTML = -2
            break;
        case 8:
        case 9:
            valorModificadorForca.innerHTML = -1
            break;
        case 10:
        case 11:
            valorModificadorForca.innerHTML = 0
            break;
        case 12:
        case 13:
            valorModificadorForca.innerHTML = 1
            break;
        case 14:
        case 15:
            valorModificadorForca.innerHTML = 2
            break;
        case 16:
        case 17:
            valorModificadorForca.innerHTML = 3
            break;
        case 18:
        case 19:
            valorModificadorForca.innerHTML = 4
            break;
        case 20:
        case 21:
            valorModificadorForca.innerHTML = 5
            break;
        case 22:
        case 23:
            valorModificadorForca.innerHTML = 6
            break;
        case 24:
        case 25:
            valorModificadorForca.innerHTML = 7
            break;
        case 26:
        case 27:
            valorModificadorForca.innerHTML = 8
            break;
        case 28:
        case 29:
            valorModificadorForca.innerHTML = 9
            break;
        case 30:
            valorModificadorForca.innerHTML = 10
            break;
        default:
            valorModificadorForca.innerHTML = 0
            console.log('passando aqui teste')
    }


}

function principal() {


    calcularModificador()
    //let newValorModificadorForca = calcularModificador(valorForca.value)

    //return newValorModificadorForca

    //    let testeFuncionando = valorModificadorForca.innerHTML = newValorModificadorForca

}