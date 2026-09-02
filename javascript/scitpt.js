document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // ACESSIBILIDADE - TAMANHO DAS LETRAS
    // =====================================================

    const botaoAumentar =
        document.getElementById("botaoAumentar");

    const botaoDiminuir =
        document.getElementById("botaoDiminuir");

    const botaoModoEscuro =
        document.getElementById("botaoModoEscuro");


    // Valor salvo ou tamanho normal
    let tamanhoFonte =
        parseFloat(
            localStorage.getItem("tamanhoFonteSEFE")
        ) || 1;


    // Limites do tamanho da fonte
    const TAMANHO_MINIMO = 0.8;
    const TAMANHO_MAXIMO = 1.3;
    const PASSO_FONTE = 0.1;


    // =====================================================
    // ATUALIZAR TAMANHO DA FONTE
    // =====================================================

    function atualizarFonte() {

        // Controla a variável do CSS
        document.documentElement.style.setProperty(
            "--escala-fonte",
            tamanhoFonte
        );


        // Salva a preferência do usuário
        localStorage.setItem(
            "tamanhoFonteSEFE",
            tamanhoFonte
        );

    }


    // =====================================================
    // AUMENTAR LETRAS
    // =====================================================

    function aumentarFonte() {

        if (tamanhoFonte < TAMANHO_MAXIMO) {

            tamanhoFonte += PASSO_FONTE;

            tamanhoFonte =
                Number(
                    tamanhoFonte.toFixed(1)
                );

            atualizarFonte();

        }

    }


    // =====================================================
    // DIMINUIR LETRAS
    // =====================================================

    function diminuirFonte() {

        if (tamanhoFonte > TAMANHO_MINIMO) {

            tamanhoFonte -= PASSO_FONTE;

            tamanhoFonte =
                Number(
                    tamanhoFonte.toFixed(1)
                );

            atualizarFonte();

        }

    }


    // =====================================================
    // EVENTOS DOS BOTÕES A+ E A-
    // =====================================================

    if (botaoAumentar) {

        botaoAumentar.addEventListener(
            "click",
            aumentarFonte
        );

    }


    if (botaoDiminuir) {

        botaoDiminuir.addEventListener(
            "click",
            diminuirFonte
        );

    }


    // Aplicar tamanho salvo ao abrir o site
    atualizarFonte();


    // =====================================================
    // MODO ESCURO
    // =====================================================

    const estiloModoEscuro =
        document.createElement("style");


    estiloModoEscuro.id =
        "estiloModoEscuroSEFE";


    estiloModoEscuro.textContent = `

        body.modo-escuro {
            background-color: #121212 !important;
            color: #eeeeee !important;
        }


        body.modo-escuro header {
            background-color: #1e1e1e !important;
        }


        body.modo-escuro .acessibilidade {
            color: #ffffff !important;
        }


        body.modo-escuro .acessibilidade button {
            background-color: #333333 !important;
            color: #ffffff !important;
            border-color: #666666 !important;
        }


        body.modo-escuro #sobre {
            background-color: #181818 !important;
        }


        body.modo-escuro #sobre h2 {
            color: #ffffff !important;
        }


        body.modo-escuro #palestras {
            background-color: #333333 !important;
        }


        body.modo-escuro #exames {
            background-color: #181818 !important;
        }


        body.modo-escuro #exames h1,
        body.modo-escuro .exame h3 {
            color: #ffffff !important;
        }


        body.modo-escuro #avaliacoes {
            background-color: #222222 !important;
        }


        body.modo-escuro #avaliacoes h2 {
            color: #ffffff !important;
        }


        body.modo-escuro .avaliacao {
            background-color: #333333 !important;
            box-shadow: 5px 5px 5px #111111 !important;
        }


        body.modo-escuro .avaliacao p {
            color: #eeeeee !important;
        }


        body.modo-escuro .avaliacao h1 {
            color: #ffffff !important;
        }


        body.modo-escuro #contato {
            background-color: #000000 !important;
        }


        body.modo-escuro input {
            background-color: #333333 !important;
            color: #ffffff !important;
            border-color: #777777 !important;
        }


        body.modo-escuro input::placeholder {
            color: #cccccc !important;
        }


        body.modo-escuro .enviar {
            background-color: #eeeeee !important;
            color: #263875 !important;
        }


        body.modo-escuro footer {
            background-color: #111111 !important;
        }


        body.modo-escuro #footer2 {
            background-color: #000000 !important;
        }


        body.modo-escuro header nav a {
            color: #ffffff !important;
        }

    `;


    document.head.appendChild(
        estiloModoEscuro
    );


    // =====================================================
    // ATUALIZAR MODO ESCURO
    // =====================================================

    function atualizarModoEscuro() {

        const modoEscuroAtivo =
            localStorage.getItem(
                "modoEscuroSEFE"
            ) === "true";


        if (modoEscuroAtivo) {

            document.body.classList.add(
                "modo-escuro"
            );


            if (botaoModoEscuro) {

                botaoModoEscuro.textContent =
                    "☀";

                botaoModoEscuro.title =
                    "Desativar modo escuro";

            }

        } else {

            document.body.classList.remove(
                "modo-escuro"
            );


            if (botaoModoEscuro) {

                botaoModoEscuro.textContent =
                    "◐";

                botaoModoEscuro.title =
                    "Ativar modo escuro";

            }

        }

    }


    // =====================================================
    // LOGO DO CABEÇALHO
    // =====================================================

    const logo =
        document.querySelector("header > img");


    function atualizarLogo() {

        if (!logo) return;


        if (
            document.body.classList.contains(
                "modo-escuro"
            )
        ) {

            logo.src =
                "../imagens/logobranca.png";

        } else {

            logo.src =
                "../imagens/logoSEFE.png";

        }

    }


    // Aplicar modo salvo ao abrir
    atualizarModoEscuro();
    atualizarLogo();


    // =====================================================
    // BOTÃO DO MODO ESCURO
    // =====================================================

    if (botaoModoEscuro) {

        botaoModoEscuro.addEventListener(
            "click",
            function () {

                const ativado =
                    document.body.classList.toggle(
                        "modo-escuro"
                    );


                localStorage.setItem(
                    "modoEscuroSEFE",
                    ativado
                );


                atualizarModoEscuro();

                atualizarLogo();

            }
        );

    }


    // =====================================================
    // BANNERS
    // =====================================================

    const imagemBanner =
        document.getElementById(
            "imagemBanner"
        );


    const botaoAnterior =
        document.getElementById(
            "bannerAnterior"
        );


    const botaoProximo =
        document.getElementById(
            "bannerProximo"
        );


    const banners = [

        "../imagens/banner1.jpg",

        "../imagens/banner2.png",

        "../imagens/banner_3.png"

    ];


    let bannerAtual = 0;

    let intervaloBanner;


    // =====================================================
    // MOSTRAR BANNER
    // =====================================================

    function mostrarBanner(indice) {

        if (!imagemBanner) return;


        imagemBanner.style.opacity = "0";

        imagemBanner.style.transition =
            "opacity 0.5s";


        setTimeout(
            function () {

                imagemBanner.src =
                    banners[indice];


                imagemBanner.style.opacity =
                    "1";

            },
            250
        );

    }


    // =====================================================
    // PRÓXIMO BANNER
    // =====================================================

    function proximoBanner() {

        bannerAtual++;


        if (
            bannerAtual >= banners.length
        ) {

            bannerAtual = 0;

        }


        mostrarBanner(
            bannerAtual
        );

    }


    // =====================================================
    // BANNER ANTERIOR
    // =====================================================

    function bannerAnterior() {

        bannerAtual--;


        if (bannerAtual < 0) {

            bannerAtual =
                banners.length - 1;

        }


        mostrarBanner(
            bannerAtual
        );

    }


    // =====================================================
    // INICIAR BANNERS AUTOMÁTICOS
    // =====================================================

    function iniciarBanners() {

        clearInterval(
            intervaloBanner
        );


        intervaloBanner =
            setInterval(
                proximoBanner,
                4000
            );

    }


    // =====================================================
    // PARAR BANNERS
    // =====================================================

    function pararBanners() {

        clearInterval(
            intervaloBanner
        );

    }


    // =====================================================
    // CONFIGURAÇÃO DOS BANNERS
    // =====================================================

    if (imagemBanner) {

        imagemBanner.style.width =
            "100%";

        imagemBanner.style.height =
            "100%";

        imagemBanner.style.objectFit =
            "cover";


        // BOTÃO PRÓXIMO

        if (botaoProximo) {

            botaoProximo.addEventListener(
                "click",
                function () {

                    proximoBanner();

                    iniciarBanners();

                }
            );

        }


        // BOTÃO ANTERIOR

        if (botaoAnterior) {

            botaoAnterior.addEventListener(
                "click",
                function () {

                    bannerAnterior();

                    iniciarBanners();

                }
            );

        }


        // PASSAGEM AUTOMÁTICA

        iniciarBanners();


        // PAUSAR COM O MOUSE

        imagemBanner.addEventListener(
            "mouseenter",
            pararBanners
        );


        imagemBanner.addEventListener(
            "mouseleave",
            iniciarBanners
        );


        // PAUSAR SOBRE O BOTÃO ANTERIOR

        if (botaoAnterior) {

            botaoAnterior.addEventListener(
                "mouseenter",
                pararBanners
            );


            botaoAnterior.addEventListener(
                "mouseleave",
                iniciarBanners
            );

        }


        // PAUSAR SOBRE O BOTÃO PRÓXIMO

        if (botaoProximo) {

            botaoProximo.addEventListener(
                "mouseenter",
                pararBanners
            );


            botaoProximo.addEventListener(
                "mouseleave",
                iniciarBanners
            );

        }

    }


    // =====================================================
    // EFEITO NOS CARDS DE EXAMES
    // =====================================================

    const exames =
        document.querySelectorAll(
            ".exame"
        );


    exames.forEach(
        function (exame) {

            exame.addEventListener(
                "click",
                function () {

                    const titulo =
                        exame.querySelector(
                            "h3"
                        );


                    if (titulo) {

                        titulo.style.transition =
                            "0.3s";


                        titulo.style.color =
                            "#ffffff";


                        setTimeout(
                            function () {

                                titulo.style.color =
                                    "";

                            },
                            800
                        );

                    }

                }
            );

        }
    );


    // =====================================================
    // EFEITO NOS CARDS DE AVALIAÇÕES
    // =====================================================

    const avaliacoes =
        document.querySelectorAll(
            ".avaliacao"
        );


    avaliacoes.forEach(
        function (avaliacao) {

            avaliacao.style.transition =
                "transform 0.3s, box-shadow 0.3s";


            avaliacao.addEventListener(
                "mouseenter",
                function () {

                    avaliacao.style.transform =
                        "translateY(-8px)";


                    avaliacao.style.boxShadow =
                        "7px 10px 15px rgba(0,0,0,0.25)";

                }
            );


            avaliacao.addEventListener(
                "mouseleave",
                function () {

                    avaliacao.style.transform =
                        "translateY(0)";


                    avaliacao.style.boxShadow =
                        "";

                }
            );

        }
    );


    // =====================================================
    // FORMULÁRIO
    // =====================================================

    const formulario =
        document.querySelector(
            "#contato form"
        );


    const campoNome =
        document.getElementById(
            "nome"
        );


    const campoEmail =
        document.getElementById(
            "email"
        );


    const campoTelefone =
        document.getElementById(
            "Telefone"
        );


    // =====================================================
    // FORMATAÇÃO DO TELEFONE
    // =====================================================

    if (campoTelefone) {

        campoTelefone.addEventListener(
            "input",
            function () {

                let valor =
                    campoTelefone.value.replace(
                        /\D/g,
                        ""
                    );


                if (valor.length > 11) {

                    valor =
                        valor.substring(
                            0,
                            11
                        );

                }


                if (valor.length <= 10) {

                    valor =
                        valor.replace(
                            /^(\d{2})(\d)/,
                            "($1) $2"
                        );


                    valor =
                        valor.replace(
                            /(\d{4})(\d)/,
                            "$1-$2"
                        );

                } else {

                    valor =
                        valor.replace(
                            /^(\d{2})(\d)/,
                            "($1) $2"
                        );


                    valor =
                        valor.replace(
                            /(\d{5})(\d)/,
                            "$1-$2"
                        );

                }


                campoTelefone.value =
                    valor;

            }
        );

    }


    // =====================================================
    // VALIDAÇÃO DO FORMULÁRIO
    // =====================================================

    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();


                const nome =
                    campoNome.value.trim();


                const email =
                    campoEmail.value.trim();


                const telefone =
                    campoTelefone.value.trim();


                if (nome === "") {

                    alert(
                        "Por favor, informe seu nome."
                    );


                    campoNome.focus();

                    return;

                }


                if (email === "") {

                    alert(
                        "Por favor, informe seu e-mail."
                    );


                    campoEmail.focus();

                    return;

                }


                if (!email.includes("@")) {

                    alert(
                        "Digite um e-mail válido."
                    );


                    campoEmail.focus();

                    return;

                }


                if (telefone === "") {

                    alert(
                        "Por favor, informe seu telefone."
                    );


                    campoTelefone.focus();

                    return;

                }


                alert(
                    "Formulário enviado com sucesso! " +
                    "Obrigado pelo interesse em ser palestrante da SEFE."
                );


                formulario.reset();

            }
        );

    }


    // =====================================================
    // BOTÃO VOLTAR AO TOPO
    // =====================================================

    const voltarTopo =
        document.querySelector(
            ".voltar-topo a"
        );


    if (voltarTopo) {

        voltarTopo.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // =====================================================
    // TÍTULOS DOS BOTÕES DE ACESSIBILIDADE
    // =====================================================

    if (botaoAumentar) {

        botaoAumentar.title =
            "Aumentar tamanho das letras";

    }


    if (botaoDiminuir) {

        botaoDiminuir.title =
            "Diminuir tamanho das letras";

    }


    // =====================================================
    // ATALHOS DE TECLADO
    // =====================================================

    document.addEventListener(
        "keydown",
        function (evento) {

            const elemento =
                document.activeElement;


            // Não executar atalhos
            // enquanto o usuário estiver digitando

            if (
                elemento &&
                (
                    elemento.tagName === "INPUT" ||
                    elemento.tagName === "TEXTAREA"
                )
            ) {

                return;

            }


            // Aumentar fonte com +

            if (
                evento.key === "+" ||
                evento.key === "="
            ) {

                aumentarFonte();

            }


            // Diminuir fonte com -

            if (
                evento.key === "-"
            ) {

                diminuirFonte();

            }


            // D = modo escuro

            if (
                evento.key.toLowerCase() === "d"
            ) {

                if (botaoModoEscuro) {

                    botaoModoEscuro.click();

                }

            }

        }
    );


    // =====================================================
    // ANIMAÇÃO AO ENTRAR NAS SEÇÕES
    // =====================================================

    const secoes =
        document.querySelectorAll(
            "#sobre, #palestras, #exames, #avaliacoes, #contato"
        );


    const observador =
        new IntersectionObserver(
            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.style.transition =
                                "opacity 0.7s ease, transform 0.7s ease";


                            entrada.target.style.opacity =
                                "1";


                            entrada.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    secoes.forEach(
        function (secao) {

            secao.style.opacity =
                "0";


            secao.style.transform =
                "translateY(25px)";


            observador.observe(
                secao
            );

        }
    );

});

