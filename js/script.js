let valorForca = document.getElementById('forca')
let valorDestreza = document.getElementById('destreza')
let valorConstituicao = document.getElementById('constituicao')
let valorInteligencia = document.getElementById('inteligencia')
let valorSabedoria = document.getElementById('sabedoria')
let valorCarisma = document.getElementById('carisma')

let valorModificadorForca = document.getElementById('modificadorForca')
let valorModificadorDestreza = document.getElementById('modificadorDestreza')
let valorModificadorConstituicao = document.getElementById('modificadorConstituicao')
let valorModificadorInteligencia = document.getElementById('modificadorInteligencia')
let valorModificadorSabedoria = document.getElementById('modificadorSabedoria')
let valorModificadorCarisma = document.getElementById('modificadorCarisma')

let pontosExperiencia = document.getElementById('pontosExperiencia')

let nivelPersonagem = document.getElementById('nivelPersonagem')
let bonusProficiencia = document.getElementById('bonusProficiencia')

let classe = document.getElementById('classePersonagem')
let classeSelect = classe.options
let nomeClasseFinal
let valorClasseFinal

let raca = document.getElementById('raca')
let racaSelect = raca.options
let nomeRacaFinal
let valorRacaFinal

let antecedente = document.getElementById('antecedente')
let antecedenteSelect = antecedente.options
let nomeAntecedenteFinal
let valorAntecedenteFinal

let tendencia = document.getElementById('tendencia')
let tendenciaSelect = tendencia.options
let nomeTendenciaFinal
let valorTendenciaFinal

function escolherClasse() {

    for (var i = 0; i < classeSelect.length; i++) {
        if (classeSelect[i].selected) {
            valorClasseFinal = classeSelect[i].value
            nomeClasseFinal = classeSelect[i].text
            break
        }
    }
    switch (parseInt(valorClasseFinal)) {
        case 0:
            console.log(nomeClasseFinal)
            break;
        case 1:
            console.log(nomeClasseFinal)
            break;
        case 2:
            console.log(nomeClasseFinal)
            break;
        case 3:
            console.log(nomeClasseFinal)
            break;
        case 4:
            console.log(nomeClasseFinal)
            break;
        case 5:
            console.log(nomeClasseFinal)
            break;
        case 6:
            console.log(nomeClasseFinal)
            break;
        case 7:
            console.log(nomeClasseFinal)
            break;
        case 8:
            console.log(nomeClasseFinal)
            break;
        case 9:
            console.log(nomeClasseFinal)
            break;
        case 10:
            console.log(nomeClasseFinal)
            break;
        case 11:
            console.log(nomeClasseFinal)
            break;
        case 12:
            console.log(nomeClasseFinal)
            break;
        default:
            break;
    }

}

function escolherRaca() {

    for (var i = 0; i < racaSelect.length; i++) {
        if (racaSelect[i].selected) {
            valorRacaFinal = racaSelect[i].value
            nomeRacaFinal = racaSelect[i].text
            break
        }
    }

    switch (parseInt(valorRacaFinal)) {
        case 0:
            console.log(nomeRacaFinal)
            break;
        case 1:
            console.log(nomeRacaFinal)
            break;
        case 2:
            console.log(nomeRacaFinal)
            break;
        case 3:
            console.log(nomeRacaFinal)
            break;
        case 4:
            console.log(nomeRacaFinal)
            break;
        case 5:
            console.log(nomeRacaFinal)
            break;
        case 6:
            console.log(nomeRacaFinal)
            break;
        case 7:
            console.log(nomeRacaFinal)
            break;
        case 8:
            console.log(nomeRacaFinal)
            break;
        case 9:
            console.log(nomeRacaFinal)
            break;
        case 10:
            console.log(nomeRacaFinal)
            break;
        case 11:
            console.log(nomeRacaFinal)
            break;
        case 12:
            console.log(nomeRacaFinal)
            break;
        case 13:
            console.log(nomeRacaFinal)
            break;
        case 14:
            console.log(nomeRacaFinal)
            break;
        default:
            break;
    }
}

function escolherAntecedente() {

    for (var i = 0; i < antecedenteSelect.length; i++) {
        if (antecedenteSelect[i].selected) {
            valorAntecedenteFinal = antecedenteSelect[i].value
            nomeAntecedenteFinal = antecedenteSelect[i].text
            break
        }
    }

    switch (parseInt(valorAntecedenteFinal)) {
        case 0:
            console.log(nomeAntecedenteFinal)
            break;
        case 1:
            console.log(nomeAntecedenteFinal)
            break;
        case 2:
            console.log(nomeAntecedenteFinal)
            break;
        case 3:
            console.log(nomeAntecedenteFinal)
            break;
        case 4:
            console.log(nomeAntecedenteFinal)
            break;
        case 5:
            console.log(nomeAntecedenteFinal)
            break;
        case 6:
            console.log(nomeAntecedenteFinal)
            break;
        case 7:
            console.log(nomeAntecedenteFinal)
            break;
        case 8:
            console.log(nomeAntecedenteFinal)
            break;
        case 9:
            console.log(nomeAntecedenteFinal)
            break;
        case 10:
            console.log(nomeAntecedenteFinal)
            break;
        case 11:
            console.log(nomeAntecedenteFinal)
            break;
        case 12:
            console.log(nomeAntecedenteFinal)
            break;
        case 13:
            console.log(nomeAntecedenteFinal)
            break;
        case 14:
            console.log(nomeAntecedenteFinal)
            break;
        case 15:
            console.log(nomeAntecedenteFinal)
            break;
        case 16:
            console.log(nomeAntecedenteFinal)
            break;
        case 17:
            console.log(nomeAntecedenteFinal)
            break;
        case 18:
            console.log(nomeAntecedenteFinal)
            break;
        default:
            break;
    }
}

function escolherTendencia() {

    for (var i = 0; i < tendenciaSelect.length; i++) {
        if (tendenciaSelect[i].selected) {
            valorTendenciaFinal = tendenciaSelect[i].value
            nomeTendenciaFinal = tendenciaSelect[i].text
            break
        }
    }

    switch (parseInt(valorTendenciaFinal)) {
        case 0:
            console.log(nomeTendenciaFinal)
            break;
        case 1:
            console.log(nomeTendenciaFinal)
            break;
        case 2:
            console.log(nomeTendenciaFinal)
            break;
        case 3:
            console.log(nomeTendenciaFinal)
            break;
        case 4:
            console.log(nomeTendenciaFinal)
            break;
        case 5:
            console.log(nomeTendenciaFinal)
            break;
        case 6:
            console.log(nomeTendenciaFinal)
            break;
        case 7:
            console.log(nomeTendenciaFinal)
            break;
        case 8:
            console.log(nomeTendenciaFinal)
            break;
        case 9:
            console.log(nomeTendenciaFinal)
            break;
        default:
            break;
    }
}


function calcularModificador(valorAtributo, valorModificador) {
    switch (parseInt(valorAtributo)) {
        case 1:
            novoValorModificador = -5
            break;
        case 2:
        case 3:
            novoValorModificador = -4
            break;
        case 4:
        case 5:
            novoValorModificador = -3
            break;
        case 6:
        case 7:
            novoValorModificador = -2
            break;
        case 8:
        case 9:
            novoValorModificador = -1
            break;
        case 10:
        case 11:
            novoValorModificador = 0
            break;
        case 12:
        case 13:
            novoValorModificador = 1
            break;
        case 14:
        case 15:
            novoValorModificador = 2
            break;
        case 16:
        case 17:
            novoValorModificador = 3
            break;
        case 18:
        case 19:
            novoValorModificador = 4
            break;
        case 20:
        case 21:
            novoValorModificador = 5
            break;
        case 22:
        case 23:
            novoValorModificador = 6
            break;
        case 24:
        case 25:
            novoValorModificador = 7
            break;
        case 26:
        case 27:
            novoValorModificador = 8
            break;
        case 28:
        case 29:
            novoValorModificador = 9
            break;
        case 30:
            novoValorModificador = 10
            break;
        default:
            novoValorModificador = 0
    }
    valorModificador.innerHTML = parseFloat(novoValorModificador)
}

function calcularNivel(valorPontosExperiencia, valorNivelPersonagem, valorBonusProficiencia) {
    let novoPontosExperiencia = parseInt(valorPontosExperiencia)
    let novoNivel = 0
    let novoBonusProficiencia = 0

    if (novoPontosExperiencia >= 0 && novoPontosExperiencia <= 299) {
        novoNivel = 1
        novoBonusProficiencia = 2
    }
    else if (novoPontosExperiencia >= 300 && novoPontosExperiencia <= 899) {
        novoNivel = 2
        novoBonusProficiencia = 2
    }
    else if (novoPontosExperiencia >= 900 && novoPontosExperiencia <= 2799) {
        novoNivel = 3
        novoBonusProficiencia = 2
    }
    else if (novoPontosExperiencia >= 2700 && novoPontosExperiencia <= 6499) {
        novoNivel = 4
        novoBonusProficiencia = 2
    }
    else if (novoPontosExperiencia >= 6500 && novoPontosExperiencia <= 13999) {
        novoNivel = 5
        novoBonusProficiencia = 3
    }
    else if (novoPontosExperiencia >= 14000 && novoPontosExperiencia <= 22999) {
        novoNivel = 6
        novoBonusProficiencia = 3
    }
    else if (novoPontosExperiencia >= 23000 && novoPontosExperiencia <= 33999) {
        novoNivel = 7
        novoBonusProficiencia = 3
    }
    else if (novoPontosExperiencia >= 34000 && novoPontosExperiencia <= 47999) {
        novoNivel = 8
        novoBonusProficiencia = 3
    }
    else if (novoPontosExperiencia >= 48000 && novoPontosExperiencia <= 63999) {
        novoNivel = 9
        novoBonusProficiencia = 4
    }
    else if (novoPontosExperiencia >= 64000 && novoPontosExperiencia <= 84999) {
        novoNivel = 10
        novoBonusProficiencia = 4
    }
    else if (novoPontosExperiencia >= 85000 && novoPontosExperiencia <= 99999) {
        novoNivel = 11
        novoBonusProficiencia = 4
    }
    else if (novoPontosExperiencia >= 100000 && novoPontosExperiencia <= 119999) {
        novoNivel = 12
        novoBonusProficiencia = 4
    }
    else if (novoPontosExperiencia >= 120000 && novoPontosExperiencia <= 139999) {
        novoNivel = 13
        novoBonusProficiencia = 5
    }
    else if (novoPontosExperiencia >= 140000 && novoPontosExperiencia <= 164999) {
        novoNivel = 14
        novoBonusProficiencia = 5
    }
    else if (novoPontosExperiencia >= 165000 && novoPontosExperiencia <= 194999) {
        novoNivel = 15
        novoBonusProficiencia = 5
    }
    else if (novoPontosExperiencia >= 195000 && novoPontosExperiencia <= 224999) {
        novoNivel = 16
        novoBonusProficiencia = 5
    }
    else if (novoPontosExperiencia >= 225000 && novoPontosExperiencia <= 305999) {
        novoNivel = 17
        novoBonusProficiencia = 6
    }
    else if (novoPontosExperiencia >= 265000 && novoPontosExperiencia <= 304999) {
        novoNivel = 18
        novoBonusProficiencia = 6
    }
    else if (novoPontosExperiencia >= 305000 && novoPontosExperiencia <= 354999) {
        novoNivel = 19
        novoBonusProficiencia = 6
    }
    else if (novoPontosExperiencia >= 355000) {
        novoNivel = 20
        novoBonusProficiencia = 6
    }
    else { "Digite um número válido!" }

    valorNivelPersonagem.innerHTML = novoNivel
    valorBonusProficiencia.innerHTML = novoBonusProficiencia

}

function principal() {

    escolherClasse()
    escolherRaca()

    calcularModificador(valorForca.value, valorModificadorForca)
    calcularModificador(valorDestreza.value, valorModificadorDestreza)
    calcularModificador(valorConstituicao.value, valorModificadorConstituicao)
    calcularModificador(valorInteligencia.value, valorModificadorInteligencia)
    calcularModificador(valorSabedoria.value, valorModificadorSabedoria)
    calcularModificador(valorCarisma.value, valorModificadorCarisma)

    calcularNivel(pontosExperiencia.value, nivelPersonagem, bonusProficiencia)

    /*     console.log(classe)
        console.log(classeSelect)
        console.log(valorClasseFinal) */

}