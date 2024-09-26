/* Fórmulas e valores
Imóvel Prazo = 180
Veículo Prazo = 100
Parcela Integral = valor + 23% / 180
/* 1/2 parcela = valor + 23% / 180 / 2 */

let valueData = {
    imovel: {
        term: 180,
        percent: 0.23,
    },
    veiculo: {
        term: 100,
        percent: 0.16,
    }
}

let socialData = {
        facebook: "https://www.facebook.com/profile.php?id=100091989860329",
        whatsapp: "https://wa.me/554999773753",
        instagram: "https://www.instagram.com/isocred_tg/",
        tiktok: "https://www.tiktok.com/@isocred_tg"
}

function goTo(link) {
    window.open(link, "_blank")
}