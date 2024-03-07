const questions = [

    { id: 'p1', text: 'Neste filme há um personagem principal?', yes: 'p2', no: 'p51' },

    //  RAMIFICAÇÃO DE FILMES COM PERSONAGEM PRINCIPAL  //
    { id: 'p2', text: 'O filme apresenta um protagonista humano?', yes: 'p3', no: 'p47' },
    { id: 'p3', text: 'Neste filme o super herói é americano?', yes: 'p4', no: 'p43' },
    { id: 'p4', text: 'Neste filme o herói principal, possui uma arma ou equipamento?', yes: 'p5', no: 'p32' },
    { id: 'p5', text: 'O protagonista do filme é sequestrado?', yes: 'p6', no: 'p8' },
    { id: 'p6', text: 'O herói principal do filme possui super poderes?', yes: 's21', no: 'p7' },
    { id: 'p7', text: 'O herói principal possui uma armadura', yes: 's1', no: 's24' },
    { id: 'p8', text: 'O filme é sobre algum membro dos primeiros Vingadores?', yes: 'p9', no: 'p20' },
    { id: 'p9', text: 'O filme apresenta uma origem de super-herói?', yes: 'p10', no: 'p16' },
    { id: 'p10', text: 'O vilão deste filme é de origem russa?', yes: 'p11', no: 'p12' },
    { id: 'p11', text: 'O herói principal possui uma armadura', yes: 's3', no: 's24' },
    { id: 'p12', text: 'O filme faz referência a eventos históricos?', yes: 'p13', no: 'p14' },
    { id: 'p13', text: 'O filme se passa durante a Segunda Guerra Mundial?', yes: 's5', no: 's0' },
    { id: 'p14', text: 'Neste filme os heróis lutam entre si?', yes: 'p15', no: 's0' },
    { id: 'p15', text: 'O filme tem a integração de novos heróis aos Vingadores?', yes: 's13', no: 's0' },
    { id: 'p16', text: 'O filme inclui uma reviravolta surpreendente na trama?', yes: 'p17', no: 's0' },
    { id: 'p17', text: 'O vilão do filme é um conhecido do protagonista?', yes: 'p18', no: 'p19' },
    { id: 'p18', text: 'Este vilão possui uma estrela no braço', yes: 's9', no: 's7' },
    { id: 'p19', text: 'O vilão é um líder de Elfos Negros?', yes: 's8', no: 's0' },
    { id: 'p20', text: 'Este personagem é bem humorado?', yes: 'p21', no: 'p29' },

    { id: 'p21', text: 'O protagonista do filme é ou era ladrão?', yes: 'p22', no: 'p24' },
    { id: 'p22', text: 'O filme possui uma dupla de protagonista?', yes: 'p23', no: 's12' },
    { id: 'p23', text: 'Neste filme há viagem no tempo?', yes: 's31', no: 's20' },
    { id: 'p24', text: 'O filme inclui magia?', yes: 'p25', no: 'p26' },
    { id: 'p25', text: 'O filme apresenta uma origem de super-herói?', yes: 'p26', no: 's23' },
    { id: 'p26', text: 'Neste filme o super heroi é picado por algum inseto?', yes: 's16', no: 'p27' },
    { id: 'p27', text: 'O herói principal do filme possui capa?', yes: 'p28', no: 's21' },
    { id: 'p28', text: 'Neste filme há uma batalha épica entre heróis?', yes: 's28', no: 's14' },
    { id: 'p29', text: 'O filme inclui magia?', yes: 'p30', no: 's0' },
    { id: 'p30', text: 'O herói principal do filme possui capa?', yes: 'p28', no: 'p31' },
    { id: 'p31', text: 'Neste filme há mais de um herói?', yes: 's33', no: 's21' },
    { id: 'p32', text: 'O ator principal deste filme foi substituído em filmes posteriores?', yes: 's2', no: 'p33' },
    { id: 'p33', text: 'O protagonista do filme é ou era ladrão?', yes: 'p34', no: 'p36' },
    { id: 'p34', text: 'O filme possui uma dupla de protagonista?', yes: 'p35', no: 's12' },
    { id: 'p35', text: 'Neste filme há viagem no tempo?', yes: 's31', no: 's20' },
    { id: 'p36', text: 'O filme inclui magia?', yes: 'p37', no: 'p38' },
    { id: 'p37', text: 'O filme apresenta uma origem de super-herói?', yes: 'p38', no: 'p42' },
    { id: 'p38', text: 'Neste filme o super heroi é picado por algum inseto?', yes: 's16', no: 'p39' },
    { id: 'p39', text: 'O herói principal do filme possui capa?', yes: 'p40', no: 'p41' },
    { id: 'p40', text: 'Neste filme há uma batalha épica entre heróis?', yes: 's28', no: 's14' },
    { id: 'p41', text: 'Neste filme há mais de um herói?', yes: 's33', no: 's21' },
    { id: 'p42', text: 'Neste filme há um encontro de heróis de diferentes multiversos?', yes: 's27', no: 's23' },
    { id: 'p43', text: 'O filme aborda temas sociais relevantes?', yes: 'p44', no: 's0' },
    { id: 'p44', text: 'Neste filme o herói principal perde algum ente querido?', yes: 'p45', no: 's18' },
    { id: 'p45', text: 'O herói do filme é de origem chinesa?', yes: 's25', no: 'p46' },
    { id: 'p46', text: 'Neste filme a protagonista é uma mulher?', yes: 's30', no: 's18' },
    { id: 'p47', text: 'O filme explora a mitologia nórdica?', yes: 'p48', no: 's0' },
    { id: 'p48', text: 'Neste filme o personagem principal tenta comprar um cavalo?', yes: 's4', no: 'p49' },
    { id: 'p49', text: 'Neste filme o personagem principal aparece pela primeira vez de cabelo curto', yes: 's17', no: 'p50' },
    { id: 'p50', text: 'O vilão é um líder de Elfos Negros?', yes: 's8', no: 's29' },

    //  RAMIFICAÇÃO DE FILMES COM MAIS DE UM SUPER-HEROI    //
    { id: 'p51', text: 'Neste filme os heróis lutam juntos?', yes: 'p52', no: 'p54' },
    { id: 'p52', text: 'Neste filme surge a formação deste grupo', yes: 'p53', no: 'p64' },
    { id: 'p53', text: 'Neste filme rolou uma discussão onde um integrante do grupo se intitulou:Gênio, bilionário, playboy, filantropo', yes: 's6', no: 'p54' },
    { id: 'p54', text: 'O filme apresenta uma equipe de anti-heróis?', yes: 'p55', no: 'p59' },
    { id: 'p55', text: 'O filme apresenta muito humor neste grupo desajustado', yes: 'p56', no: 'p59' },
    { id: 'p56', text: 'Neste filme é formado o grupo?', yes: 's10', no: 'p57' },
    { id: 'p57', text: 'Este filme é após a perda de uma integrante do grupo?', yes: 'p58', no: 's15' },
    { id: 'p58', text: 'Neste filme decobrem o passado turbulento de um integrante do grupo', yes: 's32', no: 's0' },
    { id: 'p59', text: 'Neste filme os heróis lutam entre si?', yes: 'p60', no: 'p63' },
    { id: 'p60', text: 'O filme tem uma cena de batalha épica?', yes: 'p61', no: 'p63' },
    { id: 'p61', text: 'O filme tem a integração de novos heróis aos Vingadores?', yes: 's13', no: 'p62' },
    { id: 'p62', text: 'Tem a Angelina Jolie como UMA HEROÍNA?', yes: 's26', no: 's0' },
    { id: 'p63', text: 'É formado por um grupo de heroínas?', yes: 's33', no: 's0' },
    { id: 'p64', text: 'O filme apresenta tecnologia futurista?', yes: 'p65', no: 'p' },
    { id: 'p65', text: 'O filme inclui alguma joia do infinito como parte da trama?', yes: 'p66', no: 'p68' },
    { id: 'p66', text: 'O filme apresenta um vilão criado pelo Tony Stark?', yes: 's11', no: 'p67' },
    { id: 'p67', text: 'O filme inclui um elemento de viagem no tempo?', yes: 's22', no: 's19' },
    { id: 'p68', text: 'O filme apresenta um vilão criado pelo Tony Stark?', yes: 's11', no: 'p55' },

    //  FILMES  // 
    { id: 's0', text: 'Desculpe, não conseguimos adivinhar o filme :(' },
    { id: 's1', text: 'O filme que você está pensando é: Homem de Ferro' },
    { id: 's2', text: 'O filme que você está pensando é: O Incrivel Hulk' },
    { id: 's3', text: 'O filme que você está pensando é: Homem de Ferro 2' },
    { id: 's4', text: 'O filme que você está pensando é: Thor' },
    { id: 's5', text: 'O filme que você está pensando é: Capitão América: O Primeiro Vingador' },
    { id: 's6', text: 'O filme que você está pensando é: Os Vingadores' },
    { id: 's7', text: 'O filme que você está pensando é: Homem de Ferro 3' },
    { id: 's8', text: 'O filme que você está pensando é: Thor: O Mundo Sombrio' },
    { id: 's9', text: 'O filme que você está pensando é: Capitão América: Soldado Invernal' },
    { id: 's10', text: 'O filme que você está pensando é: Guardiões da Galáxia' },
    { id: 's11', text: 'O filme que você está pensando é: Vingadores: Era de Ultron' }, // 
    { id: 's12', text: 'O filme que você está pensando é: Homem-Formiga' },
    { id: 's13', text: 'O filme que você está pensando é: Capitão América: Guerra Civil' },
    { id: 's14', text: 'O filme que você está pensando é: Doutor Estranho' },
    { id: 's15', text: 'O filme que você está pensando é: Guardiões da Galáxia Vol. 2' },
    { id: 's16', text: 'O filme que você está pensando é: Homem-Aranha de Volta ao Lar' },
    { id: 's17', text: 'O filme que você está pensando é: Thor: Ragnarok' },
    { id: 's18', text: 'O filme que você está pensando é: Pantera Negra' },
    { id: 's19', text: 'O filme que você está pensando é: Vingadores: Guerra Infinita' }, // 
    { id: 's20', text: 'O filme que você está pensando é: Homem-Formiga e a Vespa' },
    { id: 's21', text: 'O filme que você está pensando é: Capitã Marvel' }, // 
    { id: 's22', text: 'O filme que você está pensando é: Vingadores: Ultimato' }, // 
    { id: 's23', text: 'O filme que você está pensando é: Homem-Aranha Longe de Casa' },
    { id: 's24', text: 'O filme que você está pensando é: Viúva Negra' }, // 
    { id: 's25', text: 'O filme que você está pensando é: Shang-Chi e a Lenda dos Dez Anéis' },
    { id: 's26', text: 'O filme que você está pensando é: Eternos' },
    { id: 's27', text: 'O filme que você está pensando é: Homem-Aranha: Sem Volta Para Casa' },
    { id: 's28', text: 'O filme que você está pensando é: Doutor Estranho no Multiverso da Loucura' },
    { id: 's29', text: 'O filme que você está pensando é: Thor: Amor e Trovão' }, // 
    { id: 's30', text: 'O filme que você está pensando é: Pantera Negra: Wakanda Para Sempre' },
    { id: 's31', text: 'O filme que você está pensando é: Homem-Formiga e a Vespa: Quantumania' },
    { id: 's32', text: 'O filme que você está pensando é: Guardiões da Galáxia: Vol. 3' },
    { id: 's33', text: 'O filme que você está pensando é: The Marvels' }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = questions[index];
    document.getElementById('pergunta').textContent = question.text;
    document.querySelector('input[type="radio"][name="answer"]').checked = false;
}

function getNextQuestionIndex(answer) {
    const question = questions[currentQuestionIndex];
    return answer === 's' ? questions.findIndex(q => q.id === question.yes) : questions.findIndex(q => q.id === question.no);
}

document.getElementById('confirm').addEventListener('click', function () {
    const answer = document.querySelector('input[type="radio"][name="answer"]:checked');
    if (!answer) {
        alert('Por favor, selecione uma opção.');
        return;
    }

    currentQuestionIndex = getNextQuestionIndex(answer.value);

    if (currentQuestionIndex === -1) {
        alert('Erro ao obter a próxima pergunta.');
        return;
    }

    if (currentQuestionIndex >= questions.length || currentQuestionIndex < 0) {
        alert('Erro: índice de pergunta inválido.');
        return;
    }

    if (questions[currentQuestionIndex].hasOwnProperty('yes')) {
        showQuestion(currentQuestionIndex);
    } else {
        alert(questions[currentQuestionIndex].text);
    }
});

showQuestion(currentQuestionIndex);