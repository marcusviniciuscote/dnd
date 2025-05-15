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

let valorModificadorResistenciaMarcadaForca = document.getElementById('resistenciaForca')
let valorModificadorResistenciaMarcadaDestreza = document.getElementById('resistenciaDestreza')
let valorModificadorResistenciaMarcadaConstituicao = document.getElementById('resistenciaConstituicao')
let valorModificadorResistenciaMarcadaInteligencia = document.getElementById('resistenciaInteligencia')
let valorModificadorResistenciaMarcadaSabedoria = document.getElementById('resistenciaSabedoria')
let valorModificadorResistenciaMarcadaCarisma = document.getElementById('resistenciaCarisma')

let valorDadoVida = document.getElementById('dadoVida')
let valorTotalDadosVida = document.getElementById('totalDadosVida')

let pontosExperiencia = document.getElementById('pontosExperiencia')

let nivelPersonagem = document.getElementById('nivelPersonagem')
let bonusProficiencia = document.getElementById('bonusProficiencia')

let valorClasseArmadura = document.getElementById('classeArmadura')
let valorDeslocamento = document.getElementById('deslocamento')

let bonusArmadura = document.getElementById('bonusArmadura')
let bonusEscudo = document.getElementById('bonusEscudo')

let valorPericiaAcrobacia = document.getElementById('periciaAcrobacia')
let valorPericiaArcanismo = document.getElementById('periciaArcanismo')
let valorPericiaAtletismo = document.getElementById('periciaAtletismo')
let valorPericiaAtuacao = document.getElementById('periciaAtuacao')
let valorPericiaBlefar = document.getElementById('periciaBlefar')
let valorPericiaFurtividade = document.getElementById('periciaFurtividade')
let valorPericiaHistoria = document.getElementById('periciaHistoria')
let valorPericiaIntimidacao = document.getElementById('periciaIntimidacao')
let valorPericiaIntuicao = document.getElementById('periciaIntuicao')
let valorPericiaInvestigacao = document.getElementById('periciaInvestigacao')
let valorPericiaLidarComAnimais = document.getElementById('periciaLidarComAnimais')
let valorPericiaMedicina = document.getElementById('periciaMedicina')
let valorPericiaNatureza = document.getElementById('periciaNatureza')
let valorPericiaPercepcao = document.getElementById('periciaPercepcao')
let valorPericiaPersuasao = document.getElementById('periciaPersuasao')
let valorPericiaPrestidigitaca = document.getElementById('periciaPrestidigitacao')
let valorPericiaReligiao = document.getElementById('periciaReligiao')
let valorPericiaSobrevivencia = document.getElementById('periciaSobrevivencia')

let valorModificadorPericiaAcrobacia = document.getElementById('modificadorPericiaAcrobacia') //Modificador  DESTREZA
let valorModificadorPericiaArcanismo = document.getElementById('modificadorPericiaArcanismo') //Modificador INTELIGENCIA
let valorModificadorPericiaAtletismo = document.getElementById('modificadorPericiaAtletismo') //Modificador FORCA
let valorModificadorPericiaAtuacao = document.getElementById('modificadorPericiaAtuacao') //Modificador CARISMA
let valorModificadorPericiaBlefar = document.getElementById('modificadorPericiaBlefar') //Modificador CARISMA
let valorModificadorPericiaFurtividade = document.getElementById('modificadorPericiaFurtividade') //Modificador DESTREZA
let valorModificadorPericiaHistoria = document.getElementById('modificadorPericiaHistoria') //Modificador INTELIGENCIA
let valorModificadorPericiaIntimidacao = document.getElementById('modificadorPericiaIntimidacao') //Modificador CARISMA
let valorModificadorPericiaIntuicao = document.getElementById('modificadorPericiaIntuicao') //Modificador SABEDORIA
let valorModificadorPericiaInvestigacao = document.getElementById('modificadorPericiaInvestigacao') //Modificador INTELIGENCIA
let valorModificadorPericiaLidarComAnimais = document.getElementById('modificadorPericiaLidarComAnimais') //Modificador SABEDORIA
let valorModificadorPericiaMedicina = document.getElementById('modificadorPericiaMedicina') //Modificador SABEDORIA
let valorModificadorPericiaNatureza = document.getElementById('modificadorPericiaNatureza') //Modificador INTELIGENCIA
let valorModificadorPericiaPercepcao = document.getElementById('modificadorPericiaPercepcao') //Modificador SABEDORIA
let valorModificadorPericiaPersuasao = document.getElementById('modificadorPericiaPersuasao') //Modificador CARISMA
let valorModificadorPericiaPrestidigitacao = document.getElementById('modificadorPericiaPrestidigitacao') //Modificador DESTREZA
let valorModificadorPericiaReligiao = document.getElementById('modificadorPericiaReligiao') //Modificador INTELIGENCIA
let valorModificadorPericiaSobrevivencia = document.getElementById('modificadorPericiaSobrevivencia') //Modificador SABEDORIA


/* let dadosItemArmadura = [document.getElementById('nomeArmadura'), document.getElementById('bonusArmadura'), document.getElementById('danoArmadura'), document.getElementById('tipoDanoArmadura')]
let dadosItemEscudo = [document.getElementById('nomeEscudo'), document.getElementById('bonusEscudo'), document.getElementById('danoEscudo'), document.getElementById('tipoDanoEscudo')]
let dadosItemMaoDireita = [document.getElementById('nomeItemMaoDireita'), document.getElementById('bonusItemMaoDireita'), document.getElementById('danoItemMaoDireita'), document.getElementById('tipoDanoItemMaoDireita')]
let dadosItemMaoEsquerda = [document.getElementById('nomeItemMaoEsquerda'), document.getElementById('bonusItemMaoEsquerda'), document.getElementById('danoItemMaoEsquerda'), document.getElementById('tipoDanoItemMaoEsquerda')]
let dadosItemSegundarioMaoDireita = [document.getElementById('nomeItemSegundarioMaoDireita'), document.getElementById('bonusItemSegundarioMaoDireita'), document.getElementById('danoItemSegundarioMaoDireita'), document.getElementById('tipoDanoItemSegundarioMaoDireita')]
let dadosItemSecundarioMaoEsquerda = [document.getElementById('nomeItemSecundarioMaoEsquerda'), document.getElementById('bonusItemSecundarioMaoEsquerda'), document.getElementById('danoItemSecundarioMaoEsquerda'), document.getElementById('tipoDanoItemSecundarioMaoEsquerda')]
let dadosItemMagicoMaoDireita = [document.getElementById('nomeItemMagicoMaoDireita'), document.getElementById('bonusItemMagicoMaoDireita'), document.getElementById('danoItemMagicoMaoDireita'), document.getElementById('tipoDanoItemMagicoMaoDireita')]
let dadosItemMagicoMaoEsquerda = [document.getElementById('nomeItemMagicoMaoEsquerda'), document.getElementById('bonusItemMagicoMaoEsquerda'), document.getElementById('danoItemMagicoMaoEsquerda'), document.getElementById('tipoDanoItemMagicoMaoEsquerda')]
let dadosItemExtra = [document.getElementById('nomeItemExtra'), document.getElementById('bonusItemExtra'), document.getElementById('danoItemExtra'), document.getElementById('tipoDanoItemExtra')]
 */

function escolherRaca() {

    raca = document.getElementById('raca')
    idRaca = raca.value
    racaSelect = raca.options
    nomeRacaFinal = racaSelect[raca.selectedIndex].text

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
            /* Anão da Colina
            +2 constituição
            +1 sabedoria
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorConstituicao.innerHTML = 2 + valorOriginalFinalModificadorConstituicao
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 2:
            /* Anão da Montanha
            +2 força
            +2 constituição
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorConstituicao.innerHTML = 2 + valorOriginalFinalModificadorConstituicao
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 3:
            /* Alto Elfo
            +2 destreza
            +1 inteligência
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 4:
            /*Elfo da Floresta
            +2 destreza
            +1 sabedoria
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 5:
            /*Elfo Negro
            +2 destreza
            +1 carisma
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 6:
            /*Halfling Pés Leves
            +2 destreza
            +1 carisma
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 7:
            /*Halfling Robusto
            +2 destreza
            +1 constituição
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorDestreza.innerHTML = 2 + valorOriginalFinalModificadorDestreza
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 8:
            /*Humano
            +1 força
            +1 destreza
            +1 constituição
            +1 inteligência
            +1 sabedoria
            +1 carisma
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorForca.innerHTML = 1 + valorOriginalFinalModificadorForca
            valorModificadorDestreza.innerHTML = 1 + valorOriginalFinalModificadorDestreza
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            valorModificadorSabedoria.innerHTML = 1 + valorOriginalFinalModificadorSabedoria
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 9:
            /*Draconato
            +2 força
            +1 carisma
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorCarisma.innerHTML = 1 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 10:
            /*Gnomo da Floresta
            +1 destreza
            +2 inteligência
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorDestreza.innerHTML = 1 + valorOriginalFinalModificadorDestreza
            valorModificadorInteligencia.innerHTML = 2 + valorOriginalFinalModificadorInteligencia
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 11:
            /*Gnomo da Rochas
            +1 constituição
            +2 inteligência
            deslocamento 7,5m
            */
            deslocamentoBase = '7,5m'
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorModificadorInteligencia.innerHTML = 2 + valorOriginalFinalModificadorInteligencia
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 12:
            /*Meio-Elfo
            +2 carisma
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorCarisma.innerHTML = 2 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 13:
            /*Meio-Orc
            +2 força
            +1 constituição
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorForca.innerHTML = 2 + valorOriginalFinalModificadorForca
            valorModificadorConstituicao.innerHTML = 1 + valorOriginalFinalModificadorConstituicao
            valorDeslocamento.innerHTML = deslocamentoBase
            break;
        case 14:
            /*Tiefling
            +1 inteligência
            +2 carisma
            deslocamento 9m
            */
            deslocamentoBase = '9m'
            valorModificadorInteligencia.innerHTML = 1 + valorOriginalFinalModificadorInteligencia
            valorModificadorCarisma.innerHTML = 2 + valorOriginalFinalModificadorCarisma
            valorDeslocamento.innerHTML = deslocamentoBase
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

function testarResistenciaMarcada() {

    resistencias = [
        [valorModificadorResistenciaMarcadaForca, valorModificadorResistenciaForca, valorModificadorForca], 
        [valorModificadorResistenciaMarcadaDestreza, valorModificadorResistenciaDestreza, valorModificadorDestreza], 
        [valorModificadorResistenciaMarcadaConstituicao, valorModificadorResistenciaConstituicao, valorModificadorConstituicao], 
        [valorModificadorResistenciaMarcadaInteligencia, valorModificadorResistenciaInteligencia, valorModificadorInteligencia], 
        [valorModificadorResistenciaMarcadaSabedoria, valorModificadorResistenciaSabedoria, valorModificadorSabedoria], 
        [valorModificadorResistenciaMarcadaCarisma, valorModificadorResistenciaCarisma, valorModificadorCarisma], 
    ]

    resistencias.forEach(element => {
        if (element[0].checked) {
            element[1].innerHTML = parseFloat(element[2].innerText) + parseFloat(bonusProficiencia.innerText)
        } else {
            console.log('Algo está errado')
            element[1].innerHTML = parseFloat(element[2].innerText)
        }
    });

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
            console.log("Erro ao marcar resistências")
        }
    });

}

function dadoVida(dadoVida) {
    valorDadoVida.innerHTML = dadoVida
}

function calcularModificador(valorAtributo) {
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

    let valorOriginalModificador = parseFloat(novoValorModificador)

    return valorOriginalModificador
}

function forca() {
    let valorOriginalModificadorForca = calcularModificador(valorForca.value)
    valorModificadorForca.innerHTML = valorOriginalModificadorForca
    valorModificadorResistenciaForca.innerHTML = valorOriginalModificadorForca
    valorModificadorPericiaAtletismo.innerHTML = valorOriginalModificadorForca
    return valorOriginalModificadorForca
}
function destreza() {
    let valorOriginalModificadorDestreza = calcularModificador(valorDestreza.value)
    classeArmadura()
    valorModificadorDestreza.innerHTML = valorOriginalModificadorDestreza
    valorModificadorResistenciaDestreza.innerHTML = valorOriginalModificadorDestreza
    valorModificadorPericiaAcrobacia.innerHTML = valorOriginalModificadorDestreza
    valorModificadorPericiaFurtividade.innerHTML = valorOriginalModificadorDestreza
    valorModificadorPericiaPrestidigitacao.innerHTML = valorOriginalModificadorDestreza
    return valorOriginalModificadorDestreza
}
function constituicao() {
    let valorOriginalModificadorConstituicao = calcularModificador(valorConstituicao.value)
    valorModificadorConstituicao.innerHTML = valorOriginalModificadorConstituicao
    valorModificadorResistenciaConstituicao.innerHTML = valorOriginalModificadorConstituicao
    return valorOriginalModificadorConstituicao
}
function inteligencia() {
    let valorOriginalModificadorInteligencia = calcularModificador(valorInteligencia.value)
    valorModificadorInteligencia.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorResistenciaInteligencia.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorPericiaArcanismo.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorPericiaHistoria.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorPericiaInvestigacao.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorPericiaNatureza.innerHTML = valorOriginalModificadorInteligencia
    valorModificadorPericiaReligiao.innerHTML = valorOriginalModificadorInteligencia
    return valorOriginalModificadorInteligencia
}
function sabedoria() {
    let valorOriginalModificadorSabedoria = calcularModificador(valorSabedoria.value)
    valorModificadorSabedoria.innerHTML = valorOriginalModificadorSabedoria
    valorModificadorResistenciaSabedoria.innerHTML = valorOriginalModificadorSabedoria
    valorModificadorPericiaIntuicao.innerHTML = valorOriginalModificadorSabedoria
    valorModificadorPericiaLidarComAnimais.innerHTML = valorOriginalModificadorSabedoria
    valorModificadorPericiaMedicina.innerHTML = valorOriginalModificadorSabedoria
    valorModificadorPericiaPercepcao.innerHTML = valorOriginalModificadorSabedoria
    calcularSabedoriaPassiva()
    valorModificadorPericiaSobrevivencia.innerHTML = valorOriginalModificadorSabedoria
    return valorOriginalModificadorSabedoria
}
function carisma() {
    let valorOriginalModificadorCarisma = calcularModificador(valorCarisma.value)
    valorModificadorCarisma.innerHTML = valorOriginalModificadorCarisma
    valorModificadorResistenciaCarisma.innerHTML = valorOriginalModificadorCarisma
    valorModificadorPericiaAtuacao.innerHTML = valorOriginalModificadorCarisma
    valorModificadorPericiaBlefar.innerHTML = valorOriginalModificadorCarisma
    valorModificadorPericiaIntimidacao.innerHTML = valorOriginalModificadorCarisma
    valorModificadorPericiaPersuasao.innerHTML = valorOriginalModificadorCarisma
    return valorOriginalModificadorCarisma
}
function calcularSabedoriaPassiva() {
    valorSabedoriaPassiva = document.getElementById('sabedoriaPassiva')
    valorSabedoriaPassivaFinal = valorSabedoriaPassiva
    valorSabedoriaPassivaFinal.innerHTML = valorModificadorPericiaPercepcao.innerText
    return valorSabedoriaPassivaFinal
}

function calcularPericia() {

    valorOriginalFinalModificadorForca = forca()
    valorOriginalFinalModificadorDestreza = destreza()
    valorOriginalFinalModificadorConstituicao = constituicao()
    valorOriginalFinalModificadorInteligencia = inteligencia()
    valorOriginalFinalModificadorSabedoria = sabedoria()
    valorOriginalFinalModificadorCarisma = carisma()

    /* pericias = [
        ['periciaAcrobacia', 'modificadorPericiaAcrobacia'],
        ['periciaArcanismo', 'modificadorPericiaArcanismo'],
        ['periciaAtletismo', 'modificadorPericiaAtletismo'],
        ['periciaAtuacao', 'modificadorPericiaAtuacao'],
        ['periciaBlefar', 'modificadorPericiaBlefar'],
        ['periciaFurtividade', 'modificadorPericiaFurtividade'],
        ['periciaHistoria', 'modificadorPericiaHistoria'],
        ['periciaIntimidacao', 'modificadorPericiaIntimidacao'],
        ['periciaIntuicao', 'modificadorPericiaIntuicao'],
        ['periciaInvestigacao', 'modificadorPericiaInvestigacao'],
        ['periciaLidarComAnimais', 'modificadorPericiaLidarComAnimais'],
        ['periciaMedicina', 'modificadorPericiaMedicina'],
        ['periciaNatureza', 'modificadorPericiaNatureza'],
        ['periciaPercepcao', 'modificadorPericiaPercepcao'],
        ['periciaPersuasao', 'modificadorPericiaPersuasao'],
        ['periciaPrestidigitacao', 'modificadorPericiaPrestidigitacao'],
        ['periciaReligiao', 'modificadorPericiaReligiao'],
        ['periciaSobrevivencia', 'modificadorPericiaSobrevivencia']
    ] */



    if (valorPericiaAcrobacia.checked === true) { valorModificadorPericiaAcrobacia.innerHTML = parseFloat(valorModificadorPericiaAcrobacia.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaArcanismo.checked === true) { valorModificadorPericiaArcanismo.innerHTML = parseFloat(valorModificadorPericiaArcanismo.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaAtletismo.checked === true) { valorModificadorPericiaAtletismo.innerHTML = parseFloat(valorModificadorPericiaAtletismo.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaAtuacao.checked === true) { valorModificadorPericiaAtuacao.innerHTML = parseFloat(valorModificadorPericiaAtuacao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaBlefar.checked === true) { valorModificadorPericiaBlefar.innerHTML = parseFloat(valorModificadorPericiaBlefar.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaFurtividade.checked === true) { valorModificadorPericiaFurtividade.innerHTML = parseFloat(valorModificadorPericiaFurtividade.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaHistoria.checked === true) { valorModificadorPericiaHistoria.innerHTML = parseFloat(valorModificadorPericiaHistoria.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaIntimidacao.checked === true) { valorModificadorPericiaIntimidacao.innerHTML = parseFloat(valorModificadorPericiaIntimidacao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaIntuicao.checked === true) { valorModificadorPericiaIntuicao.innerHTML = parseFloat(valorModificadorPericiaIntuicao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaInvestigacao.checked === true) { valorModificadorPericiaInvestigacao.innerHTML = parseFloat(valorModificadorPericiaInvestigacao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaLidarComAnimais.checked === true) { valorModificadorPericiaLidarComAnimais.innerHTML = parseFloat(valorModificadorPericiaLidarComAnimais.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaMedicina.checked === true) { valorModificadorPericiaMedicina.innerHTML = parseFloat(valorModificadorPericiaMedicina.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaNatureza.checked === true) { valorModificadorPericiaNatureza.innerHTML = parseFloat(valorModificadorPericiaNatureza.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaPercepcao.checked === true) { valorModificadorPericiaPercepcao.innerHTML = parseFloat(valorModificadorPericiaPercepcao.innerText) + parseFloat(bonusProficiencia.innerText)
        calcularSabedoriaPassiva()}
    if (valorPericiaPersuasao.checked === true) { valorModificadorPericiaPersuasao.innerHTML = parseFloat(valorModificadorPericiaPersuasao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaPrestidigitaca.checked === true) { valorModificadorPericiaPrestidigitacao.innerHTML = parseFloat(valorModificadorPericiaPrestidigitacao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaReligiao.checked === true) { valorModificadorPericiaReligiao.innerHTML = parseFloat(valorModificadorPericiaReligiao.innerText) + parseFloat(bonusProficiencia.innerText) }
    if (valorPericiaSobrevivencia.checked === true) { valorModificadorPericiaSobrevivencia.innerHTML = parseFloat(valorModificadorPericiaSobrevivencia.innerText) + parseFloat(bonusProficiencia.innerText) }

}

function equipamentosArmasArmaduras(equipamentos) {
    dadosEquipamentos = equipamentos

    console.log(parseFloat(dadosEquipamentos[1]))
    return parseFloat(dadosEquipamentos[1])
}


function classeArmadura() {

    nomeArmadura = document.getElementById('nomeArmadura')
    idNomeArmadura = nomeArmadura.value
    nomeArmaduraSelect = nomeArmadura.options
    nomeArmaduraFinal = nomeArmaduraSelect[nomeArmadura.selectedIndex].text
    valorModificadorDestrezaFinal = valorModificadorDestreza.innerText

    switch (nomeArmaduraFinal) {
        case 'Escolha uma Armadura':
            valorBonusClasseArmadura = 10
            classeArmaduraComArmadura = valorBonusClasseArmadura
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
        case 'Sem Armadura':
            /* 10 + modificador de Des */
            valorBonusClasseArmadura = 10
            classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Acolchoada':
            /* 11 + modificador de Des */
            valorBonusClasseArmadura = 11
            classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Couro':
            /* 11 + modificador de Des */
            valorBonusClasseArmadura = 11
            classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Couro Batido':
            /* 12 + modificador de Des */
            valorBonusClasseArmadura = 12
            classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Gibão de Peles':
            /* 12 + modificador de Des (máx. +2) */
            valorBonusClasseArmadura = 12
            if (valorModificadorDestrezaFinal <= 2) {
                classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            } else {
                classeArmaduraComArmadura = valorBonusClasseArmadura + 2
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            }
            break;
        case 'Camisão de Malha':
            /* 13 + modificador de Des (máx. +2) */
            valorBonusClasseArmadura = 13
            if (valorModificadorDestrezaFinal <= 2) {
                classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            } else {
                classeArmaduraComArmadura = valorBonusClasseArmadura + 2
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            }
            break;
        case 'Brunea':
            /* 14 + modificador de Des (máx. +2) */
            valorBonusClasseArmadura = 14
            if (valorModificadorDestrezaFinal <= 2) {
                classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            } else {
                classeArmaduraComArmadura = valorBonusClasseArmadura + 2
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            }
            break;
        case 'Peitoral':
            /* 14 + modificador de Des (máx. +2) */
            valorBonusClasseArmadura = 14
            if (valorModificadorDestrezaFinal <= 2) {
                classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            } else {
                classeArmaduraComArmadura = valorBonusClasseArmadura + 2
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            }
            break;
        case 'Meia-Armadura':
            /* 15 + modificador de Des (máx. +2) */
            valorBonusClasseArmadura = 15
            if (valorModificadorDestrezaFinal <= 2) {
                classeArmaduraComArmadura = valorBonusClasseArmadura + parseFloat(valorModificadorDestrezaFinal)
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            } else {
                classeArmaduraComArmadura = valorBonusClasseArmadura + 2
                classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            }
            break;
        case 'Cota de anéis':
            /* 14 */
            valorBonusClasseArmadura = 14
            classeArmaduraComArmadura = valorBonusClasseArmadura
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Cota de malha':
            /* 16 */
            valorBonusClasseArmadura = 16
            classeArmaduraComArmadura = valorBonusClasseArmadura
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Cota de talas':
            /* 17 */
            valorBonusClasseArmadura = 17
            classeArmaduraComArmadura = valorBonusClasseArmadura
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        case 'Placas':
            /* 18 */
            valorBonusClasseArmadura = 18
            classeArmaduraComArmadura = valorBonusClasseArmadura
            classeArmaduraComArmaduraFinal = escudo(classeArmaduraComArmadura)
            break;
        default:
            break;
    }

    function escudo(valorArmadura) {

        valorEscudoSim = document.getElementById('nomeEscudoSim')
        valorEscudoNao = document.getElementById('nomeEscudoNao')
        let valorClasseArmaduraEscudoFinal = 0

        if (valorEscudoSim.checked === true) {
            valorClasseArmaduraEscudoFinal = valorArmadura + parseFloat(2)
            bonusEscudo.innerHTML = 2
        } else {
            valorClasseArmaduraEscudoFinal = valorArmadura
            bonusEscudo.innerHTML = 0
        }

        return valorClasseArmaduraEscudoFinal
    }

    bonusArmadura.innerHTML = valorBonusClasseArmadura
    valorClasseArmadura.innerHTML = classeArmaduraComArmaduraFinal
    return classeArmaduraComArmaduraFinal
}

function itemMaoDireita() {
    console.log(dadosItemMaoDireita)
}

function itemMaoEsquerda() {
    console.log(dadosItemMaoEsquerda)
}

function itemSegundarioMaoDireita() {
    console.log(dadosItemSegundarioMaoDireita)
}

function itemSecundarioMaoEsquerda() {
    console.log(dadosItemSecundarioMaoEsquerda)
}

function itemMagicoMaoDireita() {
    console.log(dadosItemMagicoMaoDireita)
}

function itemMagicoMaoEsquerda() {
    console.log(dadosItemMagicoMaoEsquerda)
}

function itemExtra() {
    console.log(dadosItemExtra)
}

function principal() {



}

function preencherDadosFicha() { }


