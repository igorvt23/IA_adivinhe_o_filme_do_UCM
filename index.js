
const perguntas = [

    { id: 'p1', text: 'Neste filme há um personagem principal?', sim: 'p2', nao: 'p51' },

    //  RAMIFICAÇÃO DE FILMES COM PERSONAGEM PRINCIPAL  //
    { id: 'p2', text: 'O filme apresenta um protagonista humano?', sim: 'p3', nao: 'p47' },
    { id: 'p3', text: 'Neste filme o super herói é americano?', sim: 'p4', nao: 'p43' },
    { id: 'p4', text: 'Neste filme o herói principal, possui uma arma ou equipamento?', sim: 'p5', nao: 'p32' },
    { id: 'p5', text: 'O protagonista do filme é sequestrado?', sim: 'p6', nao: 'p8' },
    { id: 'p6', text: 'O herói principal do filme possui super poderes?', sim: 'f21', nao: 'p7' },
    { id: 'p7', text: 'O herói principal possui uma armadura', sim: 'f1', nao: 'f24' },
    { id: 'p8', text: 'O filme é sobre algum membro dos primeiros Vingadores?', sim: 'p9', nao: 'p20' },
    { id: 'p9', text: 'O filme apresenta uma origem de super-herói?', sim: 'p10', nao: 'p16' },
    { id: 'p10', text: 'O vilão deste filme é de origem russa?', sim: 'p11', nao: 'p12' },
    { id: 'p11', text: 'O herói principal possui uma armadura', sim: 'f3', nao: 'f24' },
    { id: 'p12', text: 'O filme faz referência a eventos históricos?', sim: 'p13', nao: 'p14' },
    { id: 'p13', text: 'O filme se passa durante a Segunda Guerra Mundial?', sim: 'f5', nao: 'f0' },
    { id: 'p14', text: 'Neste filme os heróis lutam entre si?', sim: 'p15', nao: 'f0' },
    { id: 'p15', text: 'O filme tem a integração de novos heróis aos Vingadores?', sim: 'f13', nao: 'f0' },
    { id: 'p16', text: 'O filme inclui uma reviravolta surpreendente na trama?', sim: 'p17', nao: 'f0' },
    { id: 'p17', text: 'O vilão do filme é um conhecido do protagonista?', sim: 'p18', nao: 'p19' },
    { id: 'p18', text: 'Este vilão possui uma estrela nao braço', sim: 'f9', nao: 'f7' },
    { id: 'p19', text: 'O vilão é um líder de Elfos Negros?', sim: 'f8', nao: 'f0' },
    { id: 'p20', text: 'Este personagem é bem humorado?', sim: 'p21', nao: 'p29' },
    { id: 'p21', text: 'O protagonista do filme é ou era ladrão?', sim: 'p22', nao: 'p24' },
    { id: 'p22', text: 'O filme possui uma dupla de protagonista?', sim: 'p23', nao: 'f12' },
    { id: 'p23', text: 'Neste filme há viagem nao tempo?', sim: 'f31', nao: 'f20' },
    { id: 'p24', text: 'O filme inclui magia?', sim: 'p25', nao: 'p26' },
    { id: 'p25', text: 'O filme apresenta uma origem de super-herói?', sim: 'p26', nao: 'p42' },
    { id: 'p26', text: 'Neste filme o super heroi é picado por algum inseto?', sim: 'f16', nao: 'p27' },
    { id: 'p27', text: 'O herói principal do filme possui capa?', sim: 'p28', nao: 'p41' },
    { id: 'p28', text: 'Neste filme há uma batalha épica entre heróis?', sim: 'f28', nao: 'f14' },
    { id: 'p29', text: 'O filme inclui magia?', sim: 'p30', nao: 'f0' },
    { id: 'p30', text: 'O herói principal do filme possui capa?', sim: 'p28', nao: 'p31' },
    { id: 'p31', text: 'Neste filme há mais de um herói?', sim: 'f33', nao: 'f21' },
    { id: 'p32', text: 'O ator principal deste filme foi substituído em filmes posteriores?', sim: 'f2', nao: 'p33' },
    { id: 'p33', text: 'O protagonista do filme é ou era ladrão?', sim: 'p34', nao: 'p36' },
    { id: 'p34', text: 'O filme possui uma dupla de protagonista?', sim: 'p35', nao: 'f12' },
    { id: 'p35', text: 'Neste filme há viagem nao tempo?', sim: 'f31', nao: 'f20' },
    { id: 'p36', text: 'O filme inclui magia?', sim: 'p37', nao: 'p38' },
    { id: 'p37', text: 'O filme apresenta uma origem de super-herói?', sim: 'p38', nao: 'p42' },
    { id: 'p38', text: 'Neste filme o super heroi é picado por algum inseto?', sim: 'f16', nao: 'p39' },
    { id: 'p39', text: 'O herói principal do filme possui capa?', sim: 'p40', nao: 'p41' },
    { id: 'p40', text: 'Neste filme há uma batalha épica entre heróis?', sim: 'f28', nao: 'f14' },
    { id: 'p41', text: 'Neste filme há mais de um herói?', sim: 'f33', nao: 'f21' },
    { id: 'p42', text: 'Neste filme há um encontro de heróis de diferentes multiversos?', sim: 'f27', nao: 'f23' },
    { id: 'p43', text: 'O filme aborda temas sociais relevantes?', sim: 'p44', nao: 'f0' },
    { id: 'p44', text: 'Neste filme o herói principal perde algum ente querido?', sim: 'p45', nao: 'f18' },
    { id: 'p45', text: 'O herói do filme é de origem chinesa?', sim: 'f25', nao: 'p46' },
    { id: 'p46', text: 'Neste filme a protagonista é uma mulher?', sim: 'f30', nao: 'f18' },
    { id: 'p47', text: 'O filme explora a mitologia nórdica?', sim: 'p48', nao: 'f0' },
    { id: 'p48', text: 'Neste filme o personagem principal tenta comprar um cavalo?', sim: 'f4', nao: 'p49' },
    { id: 'p49', text: 'Neste filme o personagem principal aparece pela primeira vez de cabelo curto', sim: 'f17', nao: 'p50' },
    { id: 'p50', text: 'O vilão é um líder de Elfos Negros?', sim: 'f8', nao: 'f29' },

    //  RAMIFICAÇÃO DE FILMES COM MAIS DE UM SUPER-HEROI    //
    { id: 'p51', text: 'Neste filme os heróis lutam juntos?', sim: 'p52', nao: 'p54' },
    { id: 'p52', text: 'Neste filme surge a formação deste grupo', sim: 'p53', nao: 'p64' },
    { id: 'p53', text: 'Neste filme rolou uma discussão onde um integrante do grupo se intitulou:Gênio, bilionário, playboy, filantropo', sim: 'f6', nao: 'p54' },
    { id: 'p54', text: 'O filme apresenta uma equipe de anti-heróis?', sim: 'p55', nao: 'p59' },
    { id: 'p55', text: 'O filme apresenta muito humor neste grupo desajustado', sim: 'p56', nao: 'p59' },
    { id: 'p56', text: 'Neste filme é formado o grupo?', sim: 'f10', nao: 'p57' },
    { id: 'p57', text: 'Este filme é após a perda de uma integrante do grupo?', sim: 'p58', nao: 'f15' },
    { id: 'p58', text: 'Neste filme decobrem o passado turbulento de um integrante do grupo', sim: 'f32', nao: 'f0' },
    { id: 'p59', text: 'Neste filme os heróis lutam entre si?', sim: 'p60', nao: 'p63' },
    { id: 'p60', text: 'O filme tem uma cena de batalha épica?', sim: 'p61', nao: 'p63' },
    { id: 'p61', text: 'O filme tem a integração de novos heróis aos Vingadores?', sim: 'f13', nao: 'p62' },
    { id: 'p62', text: 'Tem a Angelina Jolie como UMA HEROÍNA?', sim: 'f26', nao: 'f0' },
    { id: 'p63', text: 'É formado por um grupo de heroínas?', sim: 'f33', nao: 'f0' },
    { id: 'p64', text: 'O filme apresenta tecnologia futurista?', sim: 'p65', nao: 'p65' },
    { id: 'p65', text: 'O filme inclui alguma joia do infinito como parte da trama?', sim: 'p66', nao: 'p68' },
    { id: 'p66', text: 'O filme apresenta um vilão criado pelo Tony Stark?', sim: 'f11', nao: 'p67' },
    { id: 'p67', text: 'O filme inclui um elemento de viagem nao tempo?', sim: 'f22', nao: 'f19' },
    { id: 'p68', text: 'O filme apresenta um vilão criado pelo Tony Stark?', sim: 'f11', nao: 'p55' },

    //  FILMES  // 
    { id: 'f0', text: 'Desculpe, não conseguimos adivinhar o filme :(' },
    { id: 'f1', text: 'O filme que você está pensando é: Homem de Ferro' },
    { id: 'f2', text: 'O filme que você está pensando é: O Incrivel Hulk' },
    { id: 'f3', text: 'O filme que você está pensando é: Homem de Ferro 2' },
    { id: 'f4', text: 'O filme que você está pensando é: Thor' },
    { id: 'f5', text: 'O filme que você está pensando é: Capitão América: O Primeiro Vingador' },
    { id: 'f6', text: 'O filme que você está pensando é: Os Vingadores' },
    { id: 'f7', text: 'O filme que você está pensando é: Homem de Ferro 3' },
    { id: 'f8', text: 'O filme que você está pensando é: Thor: O Mundo Sombrio' },
    { id: 'f9', text: 'O filme que você está pensando é: Capitão América: Soldado Invernal' },
    { id: 'f10', text: 'O filme que você está pensando é: Guardiões da Galáxia' },
    { id: 'f11', text: 'O filme que você está pensando é: Vingadores: Era de Ultron' },
    { id: 'f12', text: 'O filme que você está pensando é: Homem-Formiga' },
    { id: 'f13', text: 'O filme que você está pensando é: Capitão América: Guerra Civil' },
    { id: 'f14', text: 'O filme que você está pensando é: Doutor Estranho' },
    { id: 'f15', text: 'O filme que você está pensando é: Guardiões da Galáxia Vol. 2' },
    { id: 'f16', text: 'O filme que você está pensando é: Homem-Aranha de Volta ao Lar' },
    { id: 'f17', text: 'O filme que você está pensando é: Thor: Ragnarok' },
    { id: 'f18', text: 'O filme que você está pensando é: Pantera Negra' },
    { id: 'f19', text: 'O filme que você está pensando é: Vingadores: Guerra Infinita' },
    { id: 'f20', text: 'O filme que você está pensando é: Homem-Formiga e a Vespa' },
    { id: 'f21', text: 'O filme que você está pensando é: Capitã Marvel' },
    { id: 'f22', text: 'O filme que você está pensando é: Vingadores: Ultimato' },
    { id: 'f23', text: 'O filme que você está pensando é: Homem-Aranha Longe de Casa' },
    { id: 'f24', text: 'O filme que você está pensando é: Viúva Negra' },
    { id: 'f25', text: 'O filme que você está pensando é: Shang-Chi e a Lenda dos Dez Anéis' },
    { id: 'f26', text: 'O filme que você está pensando é: Eternos' },
    { id: 'f27', text: 'O filme que você está pensando é: Homem-Aranha: Sem Volta Para Casa' },
    { id: 'f28', text: 'O filme que você está pensando é: Doutor Estranho nao Multiverso da Loucura' },
    { id: 'f29', text: 'O filme que você está pensando é: Thor: Amor e Trovão' },
    { id: 'f30', text: 'O filme que você está pensando é: Pantera Negra: Wakanda Para Sempre' },
    { id: 'f31', text: 'O filme que você está pensando é: Homem-Formiga e a Vespa: Quantumania' },
    { id: 'f32', text: 'O filme que você está pensando é: Guardiões da Galáxia: Vol. 3' },
    { id: 'f33', text: 'O filme que você está pensando é: The Marvels' }
];

let perguntaIndex = 0;

function mostrarPergunta(index){
    const pergunta = perguntas[index];
    document.getElementById('pergunta').textContent = pergunta.text;
    document.querySelector('input[type="radio"][name="resposta"]').checked = false;
}

function indexProximaPergunta(resposta) {
    const pergunta = perguntas[perguntaIndex];
    if(resposta === 's'){
        return perguntas.findIndex(q => q.id === pergunta.sim);
    } else {
        return perguntas.findIndex(q => q.id === pergunta.nao);
    }
}

document.getElementById('confirmar').addEventListener('click', function () {
    const resposta = document.querySelector('input[type="radio"][name="resposta"]:checked');
    if(!resposta){
        alert('Selecione uma opção');
        return;
    }

    perguntaIndex = indexProximaPergunta(resposta.value);

    if (perguntaIndex === -1 || perguntaIndex >= perguntas.length || perguntaIndex < 0) {
        alert('Erro');
        return;
    }

    if (perguntas[perguntaIndex].hasOwnProperty('sim')) {
        mostrarPergunta(perguntaIndex);
    } else {
        alert(perguntas[perguntaIndex].text);
    }
});

mostrarPergunta(perguntaIndex);