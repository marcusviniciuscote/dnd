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

let valorModificadorResistenciaForca = document.getElementById('modificadorResistenciaForca')
let valorModificadorResistenciaDestreza = document.getElementById('modificadorResistenciaDestreza')
let valorModificadorResistenciaConstituicao = document.getElementById('modificadorResistenciaConstituicao')
let valorModificadorResistenciaInteligencia = document.getElementById('modificadorResistenciaInteligencia')
let valorModificadorResistenciaSabedoria = document.getElementById('modificadorResistenciaSabedoria')
let valorModificadorResistenciaCarisma = document.getElementById('modificadorResistenciaCarisma')

let valorDadoVida = document.getElementById('dadoVida')
let valorTotalDadosVida = document.getElementById('totalDadosVida')

let pontosExperiencia = document.getElementById('pontosExperiencia')

let nivelPersonagem = document.getElementById('nivelPersonagem')
let bonusProficiencia = document.getElementById('bonusProficiencia')


function escolherRaca() {

    raca = document.getElementById('raca')
    idRaca = raca.value
    racaSelect = raca.options
    nomeRacaFinal = racaSelect[raca.selectedIndex].text

    //valorFinalBonusRacial = parseFloat(valorModificadorConstituicao.innerText)

    valorOriginalFinalModificadorForca = forca()
    valorOriginalFinalModificadorDestreza = destreza()
    valorOriginalFinalModificadorConstituicao = constituicao()
    valorOriginalFinalModificadorInteligencia = inteligencia()
    valorOriginalFinalModificadorSabedoria = sabedoria()
    valorOriginalFinalModificadorCarisma = carisma()

    switch (parseInt(idRaca)) {
        case 0:
            /* console.log(nomeRacaFinal) */
            break;
        case 1:
            console.log(nomeRacaFinal)
            /* Anão da Colina
            +2 constituição
            +1 sabedoria
            */
            valorModificadorConstituicao.innerHTML = 2 + valorOriginalFinalModificadorConstituicao
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            break;
        case 2:
            console.log(nomeRacaFinal)
            /* Anão da Montanha
            +2 força
            +2 constituição
            */
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorConstituicao.innerHTML = 2 + valorOriginalFinalModificadorConstituicao
            break;
        case 3:
            console.log(nomeRacaFinal)
            /* Alto Elfo
            +2 destreza
            +1 inteligência
            */
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            break;
        case 4:
            console.log(nomeRacaFinal)
            /*Elfo da Floresta
            +2 destreza
            +1 sabedoria
            */
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            break;
        case 5:
            console.log(nomeRacaFinal)
            /*Elfo Negro
            +2 destreza
            +1 carisma
            */
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            break;
        case 6:
            console.log(nomeRacaFinal)
            /*Halfling Pés Leves
            +2 destreza
            +1 carisma
            */
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            break;
        case 7:
            console.log(nomeRacaFinal)
            /*Halfling Robusto
            +2 destreza
            +1 constituição
            */
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            break;
        case 8:
            console.log(nomeRacaFinal)
            /*Humano
            +1 força
            +1 destreza
            +1 constituição
            +1 inteligência
            +1 sabedoria
            +1 carisma
            */
            valorModificadorForca.innerHTML = 1 + valorOriginalFinalModificadorForca
            valorModificadorDestreza.innerHTML = 1 + valorOriginalFinalModificadorDestreza
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            break;
        case 9:
            console.log(nomeRacaFinal)
            /*Draconato
            +2 força
            +1 carisma
            */
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            break;
        case 10:
            console.log(nomeRacaFinal)
            /*Gnomo da Floresta
            +1 destreza
            +2 inteligência
            */
            valorModificadorDestreza.innerHTML = 1 + valorOriginalFinalModificadorDestreza
            valorModificadorInteligencia.innerHTML = 2 + valorOriginalFinalModificadorInteligencia
            break;
        case 11:
            console.log(nomeRacaFinal)
            /*Gnomo da Rochas
            +1 constituição
            +2 inteligência
            */
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorModificadorInteligencia.innerHTML = 2 + valorOriginalFinalModificadorInteligencia
            break;
        case 12:
            console.log(nomeRacaFinal)
            /*Meio-Elfo
            +2 carisma
            */
            valorModificadorCarisma.innerHTML = 2 + valorOriginalFinalModificadorCarisma
            break;
        case 13:
            console.log(nomeRacaFinal)
            /*Meio-Orc
            +2 força
            +1 constituição
            */
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            break;
        case 14:
            console.log(nomeRacaFinal)
            /*Tiefling
            +1 inteligência
            +2 carisma
            */
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            valorModificadorCarisma.innerHTML = 2 + valorOriginalFinalModificadorCarisma
            break;
        default:
            break;
    }
}

function escolherClasse() {


    classe = document.getElementById('classePersonagem')
    idClasse = classe.value
    classeSelect = classe.options
    nomeClasseFinal = classeSelect[classe.selectedIndex].text

    switch (parseInt(idClasse)) {
        case 0:
            /* console.log(nomeClasseFinal) */
            desmarcarResistencias()
            break;
        case 1:
            /* 
            Bárbaro
            d12
            Força
            Constituição
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaForca', 'resistenciaConstituicao']
            modificadoresResistencia = ['modificadorResistenciaForca', 'modificadorResistenciaConstituicao']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D12")
            break;
        case 2:
            /* 
            Bardo
            d8
            Destreza
            Carisma
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaDestreza', 'resistenciaCarisma']
            modificadoresResistencia = ['modificadorResistenciaDestreza', 'modificadorResistenciaCarisma']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 3:
            /* 
            Bruxo
            d8
            Sabedoria
            Carisma
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaSabedoria', 'resistenciaCarisma']
            modificadoresResistencia = ['modificadorResistenciaSabedoria', 'modificadorResistenciaCarisma']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 4:
            /* 
            Clérigo
            d8
            Sabedoria
            Carisma
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaSabedoria', 'resistenciaCarisma']
            modificadoresResistencia = ['modificadorResistenciaSabedoria', 'modificadorResistenciaCarisma']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 5:
            /* 
            Druida
            d8
            Inteligência
            Sabedoria
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaInteligencia', 'resistenciaSabedoria']
            modificadoresResistencia = ['modificadorResistenciaInteligencia', 'modificadorResistenciaSabedoria']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 6:
            /* 
            Feiticeiro
            d6
            Constituição
            Carisma
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaConstituicao', 'resistenciaCarisma']
            modificadoresResistencia = ['modificadorResistenciaConstituicao', 'modificadorResistenciaCarisma']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D6")
            break;
        case 7:
            /* 
            Guerreiro
            d10
            Força
            Constituição
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaForca', 'resistenciaConstituicao']
            modificadoresResistencia = ['modificadorResistenciaForca', 'modificadorResistenciaConstituicao']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D10")
            break;
        case 8:
            /* 
            Ladino
            d8
            Destreza
            Inteligência
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaDestreza', 'resistenciaInteligencia']
            modificadoresResistencia = ['modificadorResistenciaDestreza', 'modificadorResistenciaInteligencia']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 9:
            /* 
            Mago
            d6
            Inteligência
            Sabedoria
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaInteligencia', 'resistenciaSabedoria']
            modificadoresResistencia = ['modificadorResistenciaInteligencia', 'modificadorResistenciaSabedoria']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D6")
            break;
        case 10:
            /* 
            Monge
            d8
            Força
            Destreza
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaForca', 'resistenciaDestreza']
            modificadoresResistencia = ['modificadorResistenciaForca', 'modificadorResistenciaDestreza']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D8")
            break;
        case 11:
            /* 
            Paladino
            d10
            Sabedoria
            Carisma
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaSabedoria', 'resistenciaCarisma']
            modificadoresResistencia = ['modificadorResistenciaSabedoria', 'modificadorResistenciaCarisma']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D10")
            break;
        case 12:
            /* 
            Patrulheiro
            d10
            Força
            Destreza
            */
            console.log(nomeClasseFinal)
            desmarcarResistencias()

            resistencias = ['resistenciaForca', 'resistenciaDestreza']
            modificadoresResistencia = ['modificadorResistenciaForca', 'modificadorResistenciaDestreza']

            marcarResistencias(resistencias)
            alterarModificadorResistencia(modificadoresResistencia)
            dadoVida("D10")
            break;
        default:
            break;
    }

}

function escolherAntecedente() {

    antecedente = document.getElementById('antecedente')
    idAntecedente = antecedente.value
    antecedenteSelect = antecedente.options
    nomeAntecedenteFinal = antecedenteSelect[antecedente.selectedIndex].text

    switch (parseInt(idAntecedente)) {
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

    tendencia = document.getElementById('tendencia')
    idTendencia = tendencia.value
    tendenciaSelect = tendencia.options
    nomeTendenciaFinal = tendenciaSelect[tendencia.selectedIndex].text

    switch (parseInt(idTendencia)) {
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
    valorTotalDadosVida.innerHTML = novoNivel
    escolherClasse()
}


function testeResistencia(resistenciaProficiencia, modificadorResistencia) {
    if (resistenciaProficiencia.checked = true) {
        console.log(modificadorResistencia)
        console.log("Foi")
    }
    else {
        console.log("Errado")
    }
}

function desmarcarResistencias() {
    idModificadores = ['modificadorForca', 'modificadorDestreza', 'modificadorConstituicao', 'modificadorInteligencia', 'modificadorSabedoria', 'modificadorCarisma']
    idResistencia = ['resistenciaForca', 'resistenciaDestreza', 'resistenciaConstituicao', 'resistenciaInteligencia', 'resistenciaSabedoria', 'resistenciaCarisma']
    idModificadoresResistencia = ['modificadorResistenciaForca', 'modificadorResistenciaDestreza', 'modificadorResistenciaConstituicao', 'modificadorResistenciaInteligencia', 'modificadorResistenciaSabedoria', 'modificadorResistenciaCarisma']

    idResistencia.forEach(element => {
        testeResistencia = document.getElementById(element)
        if (testeResistencia.checked = true) {
            testeResistencia.checked = false
            index = idResistencia.indexOf(element)
            document.getElementById(idModificadoresResistencia[index]).innerHTML = document.getElementById(idModificadores[index]).innerText
        } else {
            console.log("Todas estão desmarcadas")
        }
    });
}

function marcarResistencias(resistencias) {
    idResistencia = resistencias

    idResistencia.forEach(element => {
        testeResistencia = document.getElementById(element)
        testeResistencia.checked = true
    });
}

function alterarModificadorResistencia(modificadoresResistencia) {
    let novoValorModificadorResistencia = document.getElementById('bonusProficiencia').innerText
    idModificadoresResistencia = modificadoresResistencia
    idModificadoresResistencia.forEach(element => {
        if (testeResistencia.checked = true) {
            testeResistencia = document.getElementById(element)

            valorFinalResitencia = parseInt(testeResistencia.innerText) + parseInt(novoValorModificadorResistencia)

            testeResistencia.innerHTML = valorFinalResitencia
        } else {
            console.log("Erro marcar resistencias")
        }
    });

}

function dadoVida(dadoVida) {
    valorDadoVida.innerHTML = dadoVida
}

function equipamentosArmasArmaduras(nomeEquipamento = null, bonusEquipamento = null, danoEquipamento = null, tipoDanoEquipamento = null) {
    console.log([nomeEquipamento, bonusEquipamento, danoEquipamento, tipoDanoEquipamento])
}

function calcularModificador(valorAtributo, valorModificador, valorModificadorResistencia) {
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
    valorModificadorResistencia.innerHTML = parseFloat(novoValorModificador)

    let valorOriginalModificador = parseFloat(novoValorModificador)

    return valorOriginalModificador
}

function forca() {
    let valorOriginalModificadorForca = calcularModificador(valorForca.value, valorModificadorForca, valorModificadorResistenciaForca)
    return valorOriginalModificadorForca
}
function destreza() {
    let valorOriginalModificadorDestreza = calcularModificador(valorDestreza.value, valorModificadorDestreza, valorModificadorResistenciaDestreza)
    return valorOriginalModificadorDestreza
}
function constituicao() {
    let valorOriginalModificadorConstituicao = calcularModificador(valorConstituicao.value, valorModificadorConstituicao, valorModificadorResistenciaConstituicao)
    return valorOriginalModificadorConstituicao
}
function inteligencia() {
    let valorOriginalModificadorInteligencia = calcularModificador(valorInteligencia.value, valorModificadorInteligencia, valorModificadorResistenciaInteligencia)
    return valorOriginalModificadorInteligencia
}
function sabedoria() {
    let valorOriginalModificadorSabedoria = calcularModificador(valorSabedoria.value, valorModificadorSabedoria, valorModificadorResistenciaSabedoria)
    return valorOriginalModificadorSabedoria
}
function carisma() {
    let valorOriginalModificadorCarisma = calcularModificador(valorCarisma.value, valorModificadorCarisma, valorModificadorResistenciaCarisma)
    return valorOriginalModificadorCarisma
}


function principal() {



}

function prencerDadosFicha() { }


