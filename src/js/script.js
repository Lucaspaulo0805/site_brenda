let tempoRotacao = 2000,
    imagemMomento = 0,
    imagens = document.querySelectorAll("#slider img")
    maximoImagens = imagens.length;

    function mudarImagem() {
        imagens[imagemMomento]
            .classList.remove("selected")
        
        imagemMomento++

        if(imagemMomento >= maximoImagens)
            imagemMomento = 0

            imagens[imagemMomento]
                .classList.add("selected")
    }

    function iniciar() {
        setInterval(() => {
            mudarImagem()
        }, tempoRotacao);
    }

    window.addEventListener("load", iniciar)