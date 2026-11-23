// 1. DADOS DAS 6 MEMÓRIAS ESCOLARES
const memoriesData = [
  {
    id: 1,
    stage: "infancia",
    badge: "Etapa 01 • Creche",
    title: "Os Primeiros Passos (e as Mordidas!)",
    text: "Da época da creche eu mesmo não lembro de nenhuma história, mas minha mãe sempre conta que eu levava muitas mordidas e apanhava bastante dos colegas nessa fase."
  },
  {
    id: 2,
    stage: "infancia",
    badge: "Etapa 02 • Pré-Escola",
    title: "Festa de Aniversário do Ben 10",
    text: "Na pré-escola já tenho uma lembrança muito boa: eu tive uma festa de aniversário com o tema do Ben 10, que foi um dos momentos mais marcantes daquela época."
  },
  {
    id: 3,
    stage: "fund1",
    badge: "Etapa 03 • 2º e 3º Ano (Fundamental I)",
    title: "Evento de Educação Física na Escola",
    text: "Durante o 2º e o 3º ano do Ensino Fundamental, participei de um evento especial de Educação Física na escola, cheio de atividades e movimentação com a turma."
  },
  {
    id: 4,
    stage: "fund1",
    badge: "Etapa 04 • 4º e 5º Ano (Fundamental I)",
    title: "Jogos na Psicóloga do Colégio",
    text: "No 4º e no 5º ano eu fui atendido por uma psicóloga pelo próprio colégio e lembro que era muito legal, porque a gente jogava vários jogos juntos, como Uno, dominó, truco, entre outros."
  },
  {
    id: 5,
    stage: "fund2",
    badge: "Etapa 05 • 6º ao 9º Ano (Fundamental II)",
    title: "A Pandemia e o Salto Direto para o 8º Ano",
    text: "Do 6º ao 9º ano pegou bem a época da pandemia, então praticamente nem tive aula presencial no 6º e no 7º ano. Foi muito louco voltar direto no 8º ano e reencontrar o ritmo da escola."
  },
  {
    id: 6,
    stage: "em",
    badge: "Etapa 06 • Ensino Médio (1º ao 3º Ano)",
    title: "Muitas Histórias e Pessoas Queridas",
    text: "No Ensino Médio aconteceram muitas histórias, muitas coisas marcantes no dia a dia e conheci muitas pessoas queridas que fizeram toda a diferença nessa reta final."
  }
];

// 2. DADOS DAS 17 REDAÇÕES
const essaysData = [
  {
    num: 1,
    category: "Meio Ambiente",
    title: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
    paragraphs: [
      "A natureza sempre esteve em constante mudança e a responsabilidade de acompanhar isso sempre será nossa, mas estamos sofrendo exatamente por bater de frente com o meio ambiente. O desequilíbrio no ciclo hidrológico faz com que regiões inteiras enfrentem secas severas enquanto outras sofrem com enchentes históricas, gerando grandes prejuízos sociais e econômicos.",
      "Isso ocorre principalmente pela ganância humana e pelo desmatamento desenfreado, já que preservar a floresta exige manejo e cuidado, o que não traz lucro rápido. Como as matas são responsáveis pelos chamados rios voadores que mantêm o regime de chuvas, derrubar as árvores interfere diretamente na temperatura e na distribuição da água, causando tanto a falta de chuva para a agricultura quanto tempestades violentas nas cidades.",
      "Com isso, a sociedade acaba sendo afetada em vários pontos, desde o aumento no preço dos alimentos pela quebra de safras até a destruição de casas e perda de vidas nas áreas urbanas alagadas, como visto nas tragédias recentes no Sul do país e nas secas da Amazônia. Para resolver esse problema, o governo federal precisa aumentar a fiscalização ambiental e punir o desmatamento ilegal, enquanto a sociedade deve cobrar políticas de preservação para não prejudicar ainda mais o ciclo da água."
    ]
  },
  {
    num: 2,
    category: "Saúde",
    title: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
    paragraphs: [
      "As canetas emagrecedoras são remédios criados para o tratamento de pessoas com diabetes tipo 2, porém vêm sendo fortemente usadas apenas para fins estéticos de emagrecimento rápido. Embora a Anvisa permita o uso desses medicamentos para tratar a obesidade com acompanhamento médico, a venda e o consumo sem receita viraram um problema de saúde pública.",
      "Esses remédios acabaram marcando a volta da magreza extrema como o padrão de beleza ideal, algo reforçado constantemente nas passarelas, na mídia e principalmente nas redes sociais, onde influenciadores vendem a ideia de um corpo perfeito a qualquer custo. De acordo com a psicóloga Sylvia Flores, o culto à estética perfeita gera uma pressão social enorme para alcançar esse padrão, levando muitas pessoas a buscarem atalhos perigosos sem pensar nas consequências.",
      "Por falta de conhecimento sobre os riscos à saúde, muita gente se automedica sem acompanhamento especializado, sofrendo com efeitos colaterais graves como náuseas, vômitos, problemas no pâncreas e efeito sanfona. Como não dá para mudar totalmente a forma como a sociedade enxerga a beleza, o Ministério da Saúde precisa lançar campanhas de conscientização sobre os perigos da automedicação e aumentar a fiscalização nas farmácias para exigir a retenção de receita."
    ]
  },
  {
    num: 3,
    category: "Tecnologia",
    title: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
    paragraphs: [
      "O avanço da Inteligência Artificial trouxe muitas facilidades, mas as deepfakes talvez sejam um dos maiores perigos dessa popularização, pois permitem criar vídeos e áudios falsos extremamente realistas. A problematização dessa tecnologia ocorre principalmente pelo uso na divulgação de desinformação e na violação da imagem das pessoas na internet.",
      "A principal forma de utilizar essa ferramenta para enganar a população é no âmbito político, com a criação de conteúdos falsos para prejudicar candidatos e manipular eleições, como ocorreu no caso do candidato a presidente da Eslováquia, em que vazaram um áudio falso dele às vésperas da votação, afetando a escolha dos eleitores. Além disso, muitas pessoas usam deepfakes para alterar fotos e criar montagens ofensivas contra mulheres e cidadãos comuns, destruindo reputações em segundos.",
      "O grande problema por trás disso é a fraca fiscalização e a demora das leis em acompanhar a tecnologia. Para resolver essa situação, o poder público precisa criar leis mais rígidas com punições severas para quem produz e espalha conteúdos falsos, enquanto o Ministério da Educação deve ensinar os jovens nas escolas a checar informações e identificar o que é real ou manipulado na internet."
    ]
  },
  {
    num: 4,
    category: "Sociedade",
    title: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
    paragraphs: [
      "As casas de apostas online, conhecidas como bets, cresceram muito no Brasil e se tornaram uma febre entre os jovens por conta das propagandas constantes nos esportes e nas redes sociais. O que começa como uma simples diversão e promessa de dinheiro fácil acaba se transformando em um sério problema financeiro e psicológico.",
      "Muitos jovens, influenciados por celebridades e influenciadores digitais que ostentam ganhos irreais, acreditam que podem enriquecer rápido apostando no celular. No entanto, os algoritmos dessas plataformas são feitos para manter o usuário apostando até perder tudo, o que gera vício em jogos e compromete a renda de estudantes e trabalhadores que muitas vezes usam o dinheiro de contas básicas ou até auxílios sociais para jogar.",
      "Esse cenário gera um endividamento em massa da juventude, além de causar ansiedade, depressão e conflitos familiares quando as dívidas saem do controle. Para resolver esse problema, o governo federal precisa regulamentar de forma rígida a publicidade das apostas, proibindo propagandas enganosas, e o Ministério da Educação deve incluir a educação financeira nas escolas para alertar os jovens sobre os riscos das apostas."
    ]
  },
  {
    num: 5,
    category: "Tecnologia",
    title: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
    paragraphs: [
      "Vivemos em um mundo cada vez mais conectado, onde a internet se tornou essencial para estudar, trabalhar e ter acesso a serviços básicos. Porém, no Brasil, a inclusão digital ainda é muito desigual, deixando milhões de pessoas à margem da sociedade contemporânea por falta de acesso à rede e aos equipamentos necessários.",
      "Esse problema fica evidente quando observamos a diferença entre as regiões do país e entre as classes sociais, já que moradores de periferias e zonas rurais muitas vezes não têm internet de qualidade ou dependem apenas de um celular simples com dados móveis limitados. Durante a pandemia, essa desigualdade ficou ainda mais clara, pois milhares de alunos da rede pública não conseguiram acompanhar as aulas online, aumentando o atraso escolar.",
      "Além da falta de internet, existe o analfabetismo digital, onde muitas pessoas, principalmente os mais velhos, não sabem usar as ferramentas tecnológicas e acabam virando alvos fáceis de golpes virtuais. Para mudar essa realidade, o governo precisa investir na expansão de internet gratuita em áreas carentes e nas escolas públicas, além de oferecer cursos gratuitos de capacitação tecnológica para a população."
    ]
  },
  {
    num: 6,
    category: "Saúde",
    title: "Cultura fitness: bem-estar ou busca por estética inatingível",
    paragraphs: [
      "A prática de exercícios físicos e a busca por uma alimentação saudável ganharam muito espaço nos últimos anos, o que traz benefícios reais para a saúde. Entretanto, a chamada cultura fitness acabou se distorcendo nas redes sociais, deixando de focar no bem-estar para se tornar uma obsessão por uma estética inatingível.",
      "Nas plataformas digitais, perfis fitness exibem corpos extremamente definidos e rotinas irreais, muitas vezes conquistados com o uso de anabolizantes, cirurgias plásticas e edições de imagem, mas vendidos como resultado apenas de força de vontade. Isso faz com que muitos jovens se sintam insatisfeitos com o próprio corpo, desenvolvendo transtornos alimentares, vigorexia e problemas psicológicos pela comparação constante.",
      "Essa busca desesperada pelo corpo perfeito leva muitas pessoas a seguirem dietas malucas e treinos excessivos sem orientação de profissionais, colocando a saúde em risco em nome da aparência. Para resolver esse problema, é necessário que os conselhos de saúde e as redes sociais combatam a divulgação de métodos perigosos sem respaldo médico, enquanto as escolas devem promover debates sobre saúde mental e aceitação corporal."
    ]
  },
  {
    num: 7,
    category: "Sociedade",
    title: "Caminhos para combater a intolerância religiosa no Brasil",
    paragraphs: [
      "O Brasil é um país formado por diversas culturas e crenças, e a Constituição garante a liberdade religiosa para todos os cidadãos. Mesmo assim, a intolerância religiosa continua sendo uma realidade grave, atingindo principalmente as religiões de matriz africana, como o Candomblé e a Umbanda.",
      "Esse preconceito tem raízes históricas desde o período da escravidão, quando a cultura e as crenças dos povos africanos eram demonizadas e reprimidas, algo que infelizmente permanece até hoje na mentalidade de parte da sociedade. Isso se reflete no aumento de casos de ataques a terreiros, agressões verbais e físicas contra praticantes e discursos de ódio espalhados na internet por pessoas que não respeitam o que é diferente da sua própria fé.",
      "A falta de punição efetiva faz com que os agressores sintam que podem cometer esses crimes sem consequências, gerando medo e silenciamento nas vítimas. Para combater a intolerância religiosa, o Ministério Público e a polícia precisam investigar e punir com rigor os crimes de ódio religioso, e o Ministério da Educação deve garantir o ensino da história e cultura afro-brasileira nas escolas para construir o respeito desde cedo."
    ]
  },
  {
    num: 8,
    category: "Sociedade",
    title: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
    paragraphs: [
      "A Constituição de 1988 garantiu aos povos indígenas o direito às suas terras tradicionais, à preservação de suas culturas e à cidadania plena. No entanto, na prática, esses direitos são constantemente desrespeitados no Brasil, fazendo com que os povos originários enfrentem grandes desafios para sobreviver com dignidade.",
      "O principal obstáculo é a demora na demarcação das terras indígenas e a invasão desses territórios por garimpeiros, madeireiros e grileiros em busca de lucro fácil. Como vimos na crise humanitária do povo Yanomami, a invasão do garimpo ilegal contamina os rios com mercúrio, destrói a floresta e traz doenças e desnutrição, tirando dos indígenas o direito básico à vida e à saúde.",
      "Além disso, a falta de políticas públicas eficientes na saúde e na educação indígena faz com que esses povos continuem marginalizados e sem voz nas decisões políticas do país. Para efetivar a cidadania indígena, o governo federal precisa acelerar a demarcação de terras, expulsar os invasores com apoio das forças de segurança e fortalecer os órgãos de proteção e saúde voltados para as comunidades originárias."
    ]
  },
  {
    num: 9,
    category: "Tecnologia",
    title: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
    paragraphs: [
      "Na sociedade contemporânea, o que vestimos, ouvimos e compramos é fortemente influenciado pelas redes sociais e pelos algoritmos que controlam o que aparece nas nossas telas. Esses sistemas estudam nosso comportamento para mostrar exatamente o que prende nossa atenção, moldando nossos gostos e incentivando o consumo exagerado.",
      "O problema é que os algoritmos criam bolhas digitais e transformam produtos e estilos de vida em necessidades urgentes, fazendo com que as pessoas comprem coisas que não precisam apenas para pertencer a um grupo ou seguir uma tendência passageira. Como dizia o filósofo Zygmunt Bauman sobre a sociedade líquida, as relações e os desejos se tornaram descartáveis, e o valor de uma pessoa passa a ser medido pelo que ela consome e exibe na internet.",
      "Com isso, perdemos nossa identidade própria e passamos a viver em função de padrões impostos pela mídia, o que gera endividamento, ansiedade e aumento do lixo no planeta. Para resolver esse problema, precisamos desenvolver o pensamento crítico desde a escola para que os jovens saibam identificar as estratégias de manipulação da mídia e façam escolhas mais conscientes."
    ]
  },
  {
    num: 10,
    category: "Sociedade",
    title: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
    paragraphs: [
      "Os monumentos históricos são parte fundamental da memória e da identidade de um povo, pois contam a nossa história através da arquitetura e da arte. Porém, no Brasil contemporâneo, preservar esse patrimônio é um grande desafio devido ao descaso do poder público e à falta de conscientização da própria população.",
      "Muitos prédios históricos, museus e estátuas sofrem com a falta de manutenção, o que já causou tragédias irreparáveis, como o incêndio do Museu Nacional no Rio de Janeiro, onde se perdeu grande parte da história científica e cultural do país. Isso acontece porque os governos costumam cortar verbas da cultura e da preservação por acharem que esses espaços não dão retorno financeiro imediato.",
      "Além da negligência estatal, o vandalismo e a falta de pertencimento fazem com que muitos cidadãos não valorizem os monumentos de suas cidades, deixando-os abandonados ou pichados. Para mudar esse cenário, o Ministério da Cultura e as prefeituras devem destinar verbas fixas para a manutenção do patrimônio histórico, enquanto as escolas precisam promover visitas e projetos educativos para que a população aprenda a valorizar sua própria história."
    ]
  },
  {
    num: 11,
    category: "Tecnologia",
    title: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
    paragraphs: [
      "No século XXI, a corrida espacial ganhou um novo ritmo com o avanço da tecnologia e a entrada de empresas bilionárias investindo em foguetes e turismo fora da Terra. Embora a exploração espacial traga descobertas científicas importantes, surge o desafio de equilibrar esses gastos bilionários com a responsabilidade social aqui no nosso planeta.",
      "O desenvolvimento espacial já trouxe benefícios usados no nosso dia a dia, como satélites de comunicação, previsão do tempo e avanços na medicina. Porém, quando vemos bilionários gastando fortunas para fazer viagens espaciais de lazer enquanto milhões de pessoas ainda passam fome, moram nas ruas e sofrem com as mudanças climáticas, fica claro que há uma inversão de prioridades.",
      "Além disso, o lançamento constante de satélites e foguetes está gerando toneladas de lixo espacial ao redor da Terra, o que pode causar acidentes graves no futuro. Para conciliar o avanço científico com a responsabilidade social, os governos e agências espaciais devem criar leis internacionais para controlar o lixo espacial e direcionar as pesquisas espaciais para tecnologias que ajudem a resolver problemas urgentes na Terra, como o monitoramento ambiental e a melhoria das comunicações."
    ]
  },
  {
    num: 12,
    category: "Meio Ambiente",
    title: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
    paragraphs: [
      "O Brasil possui uma das maiores biodiversidades do mundo, mas dezenas de espécies da nossa fauna estão ameaçadas de extinção por causa da ação humana. A perda desses animais não é apenas uma tristeza ambiental, mas uma ameaça direta ao equilíbrio ecológico que sustenta a vida no planeta.",
      "A destruição de biomas como a Amazônia, o Cerrado e o Pantanal pelas queimadas e pelo avanço ilegal da agropecuária acaba com o habitat natural de animais como a onça-pintada, o lobo-guará e a arara-azul. Somado a isso, o tráfico de animais silvestres retira milhões de bichos da natureza todos os anos para serem vendidos ilegalmente, causando a morte da maioria deles no transporte.",
      "Quando uma espécie desaparece, toda a cadeia alimentar é afetada, o que provoca o aumento de pragas, prejudica a polinização das plantas e afeta até a produção de alimentos humanos. Para conservar a fauna brasileira, o governo precisa fortalecer órgãos como o Ibama, aumentar as penas para o tráfico de animais e criar corredores ecológicos que protejam as áreas de reprodução das espécies ameaçadas."
    ]
  },
  {
    num: 13,
    category: "Meio Ambiente",
    title: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
    paragraphs: [
      "O agronegócio é um dos principais motores da economia brasileira, sendo responsável por gerar empregos e alimentar milhões de pessoas no Brasil e no mundo. No entanto, para garantir um futuro sustentável, o país precisa encontrar o equilíbrio entre aumentar a produção de alimentos e preservar o meio ambiente.",
      "Grande parte do problema atual ocorre porque muitos produtores ainda utilizam métodos predatórios, como o desmatamento ilegal para abrir pastos e o uso exagerado de agrotóxicos que contaminam o solo e os rios. Esse modelo de produção sem cuidado ambiental acaba prejudicando o próprio campo, pois destrói a biodiversidade e altera o regime de chuvas, causando secas que geram prejuízos nas colheitas.",
      "É totalmente possível produzir com força sem destruir a natureza, utilizando tecnologias de agricultura sustentável e recuperando áreas já degradadas em vez de derrubar novas florestas. Para alcançar esse equilíbrio respeitando os direitos humanos e ambientais, o governo deve oferecer incentivos fiscais e crédito mais barato apenas para os produtores que seguirem as leis ambientais, além de fiscalizar com rigor quem desmata ilegalmente ou explora trabalhadores no campo."
    ]
  },
  {
    num: 14,
    category: "Meio Ambiente",
    title: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
    paragraphs: [
      "A tecnologia evolui cada vez mais rápido e todos os anos surgem novos modelos de celulares, computadores e eletrodomésticos, fazendo com que os aparelhos antigos pareçam ultrapassados em pouco tempo. Esse fenômeno, ligado à obsolescência programada, gera uma montanha de lixo eletrônico que representa um grande desafio para a sustentabilidade no Brasil.",
      "Muitas empresas fabricam produtos feitos para durar pouco ou param de enviar atualizações de software de propósito para obrigar o consumidor a comprar um aparelho novo. O grande problema é que a maioria da população não sabe onde descartar celulares, pilhas e baterias velhas, acabando por jogá-los no lixo comum, onde liberam metais pesados como chumbo e mercúrio que contaminam o solo e a água.",
      "Além dos danos à natureza e à saúde das pessoas que vivem perto de lixões, o Brasil desperdiça materiais valiosos que poderiam ser reciclados e reaproveitados na indústria. Para resolver esse problema, o governo precisa fiscalizar o cumprimento da Política Nacional de Resíduos Sólidos, obrigando as fabricantes a criarem pontos de coleta acessíveis em todas as cidades e promovendo campanhas educativas sobre o descarte correto."
    ]
  },
  {
    num: 15,
    category: "Sociedade",
    title: "Migração e acolhimento: desafios da convivência em contextos globais",
    paragraphs: [
      "Guerras, crises econômicas e desastres climáticos têm forçado milhões de pessoas a deixarem seus países de origem em busca de segurança e condições dignas de vida. No entanto, ao chegarem a novos destinos, os imigrantes e refugiados enfrentam grandes desafios de acolhimento e convivência na sociedade.",
      "Muitas vezes, os estrangeiros são recebidos com preconceito e xenofobia por parte da população local, que os enxerga erroneamente como uma ameaça aos empregos ou como culpados pelos problemas sociais do país. Além da barreira do idioma, a dificuldade para validar diplomas e conseguir documentos faz com que muitos imigrantes acabem aceitando trabalhos informais e mal remunerados, vivendo em situações precárias.",
      "Tratar seres humanos com rejeição fere os princípios básicos dos direitos humanos e impede que esses trabalhadores contribuam para o desenvolvimento do país que os recebe. Para melhorar a convivência e garantir um acolhimento digno, o governo precisa agilizar a regularização documental dos imigrantes e oferecer cursos gratuitos de língua portuguesa e qualificação profissional, enquanto as escolas devem trabalhar o respeito à diversidade cultural."
    ]
  },
  {
    num: 16,
    category: "Meio Ambiente",
    title: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
    paragraphs: [
      "O fenômeno natural El Niño, que aquece as águas do Oceano Pacífico e altera o clima no mundo todo, sempre existiu, mas seus efeitos estão se tornando muito mais destrutivos por causa das mudanças climáticas causadas pelo ser humano. Diante de eventos extremos cada vez mais frequentes, o grande desafio da sociedade é se preparar para evitar tragédias.",
      "No Brasil, a combinação do El Niño com o aquecimento global provoca ondas de calor insuportáveis, secas severas no Norte e Nordeste e chuvas torrenciais no Sul do país. O problema é que nossas cidades não têm infraestrutura preparada para aguentar esses extremos, sofrendo com falta de drenagem urbana, ocupação desordenada em áreas de risco e falta de sistemas eficientes de alerta para a população.",
      "Quando o poder público age apenas depois que o desastre já aconteceu, o resultado são milhares de pessoas desabrigadas, mortes evitáveis e prejuízos bilionários para a economia. Para enfrentar esse desafio, os governos federal, estaduais e municipais precisam investir em prevenção, realizando obras de infraestrutura, retirando famílias de áreas de risco com moradia digna e fortalecendo a Defesa Civil para agir rápido antes das tempestades e secas."
    ]
  },
  {
    num: 17,
    category: "Sociedade",
    title: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
    paragraphs: [
      "De acordo com o filósofo Kant, o respeito é um subproduto da moral humana, fundamental para que possamos viver em comunidade sem destruir uns aos outros. No entanto, na sociedade contemporânea, o respeito às diferenças parece estar cada vez mais distante, sendo substituído pela polarização, pelo preconceito e pelos conflitos sociais.",
      "Assim como no filme Sky High, onde a sociedade é dividida em grupos e quem é diferente acaba sendo marginalizado e maltratado pelo grupo dominante, na vida real as pessoas costumam se fechar em bolhas sociais e atacar quem pensa, se veste ou vive de forma diferente. As redes sociais amplificam esse comportamento, incentivando discursos de ódio contra minorias e transformando qualquer divergência de opinião em uma guerra verbal ou até física.",
      "A falta de respeito gera exclusão, violência e sérios problemas psicológicos em quem é alvo constante de discriminação e intolerância. Para superar esses conflitos sociais, precisamos ensinar o pensamento crítico e a empatia às pessoas principalmente na fase escolar, para que os jovens aprendam a dialogar, respeitar a diversidade e fazer suas próprias escolhas sem serem influenciados pelo ódio de grupos sociais."
    ]
  }
];

// 3. ELEMENTOS DA PÁGINA E ESTADO
const timelineContainer = document.getElementById("timeline-container");
const essaysGrid = document.getElementById("essays-grid");
const essayCounter = document.getElementById("essay-counter");
const searchInput = document.getElementById("essay-search");
const blackboard = document.getElementById("blackboard");

// Modal
const modal = document.getElementById("essay-modal");
const modalBadge = document.getElementById("modal-badge");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalProgress = document.getElementById("modal-progress");

let currentStage = "all";
let currentCategory = "all";
let currentSearch = "";
let currentEssayIndex = 0;
let modalFontSize = 1.15;

// Data atual na lousa
const dateEl = document.getElementById("board-date");
if (dateEl) {
  const today = new Date().toLocaleDateString("pt-BR");
  dateEl.textContent = `DATA: ${today}`;
}

// Renderizar Memórias
function renderMemories() {
  const filtered = currentStage === "all"
    ? memoriesData
    : memoriesData.filter(m => m.stage === currentStage);

  timelineContainer.innerHTML = filtered.map(item => `
    <article class="memory-card" data-id="${item.id}">
      <span class="memory-stage">${item.badge}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

// Renderizar Redações
function renderEssays() {
  const filtered = essaysData.filter(essay => {
    const matchCat = currentCategory === "all" || essay.category === currentCategory;
    const term = currentSearch.toLowerCase().trim();
    const matchSearch = !term ||
      essay.title.toLowerCase().includes(term) ||
      essay.paragraphs.some(p => p.toLowerCase().includes(term));
    return matchCat && matchSearch;
  });

  essayCounter.textContent = `Exibindo ${filtered.length} de ${essaysData.length} redações`;

  if (filtered.length === 0) {
    essaysGrid.innerHTML = `<p style="color: var(--accent); grid-column: 1 / -1;">Nenhuma redação encontrada para essa busca na lousa.</p>`;
    return;
  }

  essaysGrid.innerHTML = filtered.map(essay => `
    <article class="essay-card" data-num="${essay.num}">
      <div>
        <div class="essay-card-top">
          <span>Redação #${String(essay.num).padStart(2, "0")}</span>
          <span>${essay.category}</span>
        </div>
        <h3>${essay.title}</h3>
      </div>
      <p class="essay-preview">${essay.paragraphs[0]}</p>
      <span class="read-link">Ler na lousa →</span>
    </article>
  `).join("");

  document.querySelectorAll(".essay-card").forEach(card => {
    card.addEventListener("click", () => {
      const num = Number(card.dataset.num);
      const idx = essaysData.findIndex(e => e.num === num);
      openModal(idx);
    });
  });
}

// Abrir Modal de Redação
function openModal(index) {
  currentEssayIndex = index;
  const essay = essaysData[index];
  modalBadge.textContent = `Redação #${String(essay.num).padStart(2, "0")} • ${essay.category}`;
  modalTitle.textContent = essay.title;
  modalBody.innerHTML = essay.paragraphs.map(p => `<p>${p}</p>`).join("");
  modalBody.style.fontSize = `${modalFontSize}rem`;
  modalProgress.textContent = `${index + 1} / ${essaysData.length}`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

// Trocar Cor do Giz
document.querySelectorAll(".chalk-swatch").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chalk-swatch").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.body.className = btn.dataset.color;
  });
});

// Efeito de Apagador
function wipeBoard() {
  blackboard.classList.add("wiping");
  setTimeout(() => {
    currentStage = "all";
    currentCategory = "all";
    currentSearch = "";
    searchInput.value = "";
    document.querySelectorAll("#memory-filters .filter-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
    document.querySelectorAll("#essay-filters .filter-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
    renderMemories();
    renderEssays();
    blackboard.classList.remove("wiping");
  }, 380);
}

document.getElementById("btn-wipe-board").addEventListener("click", wipeBoard);
document.getElementById("tray-eraser").addEventListener("click", wipeBoard);

// Sortear Memória Aleatória
document.getElementById("btn-random-memory").addEventListener("click", () => {
  currentStage = "all";
  document.querySelectorAll("#memory-filters .filter-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
  renderMemories();
  const cards = document.querySelectorAll(".memory-card");
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  randomCard.classList.add("highlighted");
  randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => randomCard.classList.remove("highlighted"), 2200);
});

// Ler Redação Aleatória
document.getElementById("btn-random-essay").addEventListener("click", () => {
  const randomIdx = Math.floor(Math.random() * essaysData.length);
  openModal(randomIdx);
});

// Filtros das Memórias
document.querySelectorAll("#memory-filters .filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#memory-filters .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentStage = chip.dataset.stage;
    renderMemories();
  });
});

// Filtros das Redações
document.querySelectorAll("#essay-filters .filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#essay-filters .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentCategory = chip.dataset.cat;
    renderEssays();
  });
});

// Busca em tempo real
searchInput.addEventListener("input", e => {
  currentSearch = e.target.value;
  renderEssays();
});

// Controles do Modal
document.getElementById("close-modal").addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.getElementById("prev-essay").addEventListener("click", () => {
  const nextIdx = (currentEssayIndex - 1 + essaysData.length) % essaysData.length;
  openModal(nextIdx);
});

document.getElementById("next-essay").addEventListener("click", () => {
  const nextIdx = (currentEssayIndex + 1) % essaysData.length;
  openModal(nextIdx);
});

document.getElementById("font-inc").addEventListener("click", () => {
  modalFontSize = Math.min(1.6, +(modalFontSize + 0.1).toFixed(2));
  modalBody.style.fontSize = `${modalFontSize}rem`;
});

document.getElementById("font-dec").addEventListener("click", () => {
  modalFontSize = Math.max(0.95, +(modalFontSize - 0.1).toFixed(2));
  modalBody.style.fontSize = `${modalFontSize}rem`;
});

document.getElementById("copy-essay").addEventListener("click", async () => {
  const essay = essaysData[currentEssayIndex];
  const fullText = `${essay.title}\n\n${essay.paragraphs.join("\n\n")}`;
  try {
    await navigator.clipboard.writeText(fullText);
    const btn = document.getElementById("copy-essay");
    btn.textContent = "✓ Copiado!";
    setTimeout(() => (btn.textContent = "📋 Copiar"), 1800);
  } catch {
    alert("Não foi possível copiar automaticamente.");
  }
});

document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") document.getElementById("prev-essay").click();
  if (e.key === "ArrowRight") document.getElementById("next-essay").click();
});

// Inicializar
renderMemories();
renderEssays();
