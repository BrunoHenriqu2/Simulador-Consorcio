let simulate = document.querySelector("button#simulate")

let h1 = document.querySelector("h1")
let inputs = document.querySelector("section.inputs")
let err = document.querySelector("div#error")

/*function sucess() {
    let result = document.querySelector("section.result")
    let valorCredito = document.querySelector("input#valor").value
    let tipoConsorcio = document.querySelector("select#tipo-consorcio")
    let tipoConsulta = document.querySelector("select#tipo-consulta")
    //Pega todos os valores antes deles deixarem de existir (como observado na linha 44)//
    result.innerHTML = `
                    <table>
                <thead>
                    <tr>
                        <th>Crédito</th>
                        <th>1/2 Parcela</th>
                        <th>Prazo Reduzido</th>
                        <th>Parcela Integral</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="credito"></td>
                        <td id="meia-parcela"></td>
                        <td id="prazo"></td>
                        <td id="parcela-integral"></td>
                    </tr>
                </tbody>
            </table>

            <div class="more-info">
                <h2>Isocred - TG</h2>
                <p>SC 478 - Centro - Timbó Grande/SC</p>
            </div>

            <iframe id="map-location" src="https://www.google.com/maps/embed?pb=!4v1726500481396!6m8!1m7!1sonb5LXT43PCo_eWPpIHEzw!2m2!1d-26.61669599133243!2d-50.67243243060593!3f23.168675536506022!4f-7.958388462885765!5f0.43604482460884963" title="localização do google maps" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <p>Caso você queira simular novamente, <a href="">clique aqui!</a></p>
            </div>
    `

    inputs.innerHTML = ""
    inputs.style.width = "0"
    inputs.style.height = "0"
    inputs.style.visibility = "hidden"
    err.innerHTML = ""
    err.style.visibility = "hidden"
    h1.innerText = "Resultado"

    let credito = document.querySelector("td#credito")
    let meiaParcela = document.querySelector("td#meia-parcela")
    let prazoReduzido = document.querySelector("td#prazo")
    let parcelaIntegral = document.querySelector("td#parcela-integral")

    let term
    let percent

    if (tipoConsorcio.value == "veiculo") {
        term = valueData.veiculo.term
        percent = valueData.veiculo.percent
    } else {
        term = valueData.imovel.term
        percent = valueData.imovel.percent
    }

    let conversao = valorCredito.replace(/[^0-9]/g, "")  //Converte primeiro o valor em float (valor decimal) e depois troca as vírgulas por pontos (js entende que você quer separar os valores caso coloque vírgula, não faz sentido e não é oque queremos) //
    let resultadoCredito = conversao * percent + conversao
    let resultadoParcelaIntegral = resultadoCredito / term
    let resultadoMeiaParcela = resultadoParcelaIntegral / 2
    //let meiaSplit = String(resultadoCredito / 180 / 2).replace(".", ",").split(",")
    //let integralSplit = String(resultadoCredito / 180).replace(".", ",").split(",")
    //console.log(meiaSplit, String(resultadoCredito / 180), conversao)
    //console.log(typeof(conversao), typeof(valorCredito), typeof(resultadoCredito))
    
    credito.innerHTML = valorCredito
    console.log(resultadoCredito, resultadoParcelaIntegral, resultadoMeiaParcela)
    prazoReduzido.innerHTML = term
    parcelaIntegral.innerHTML = `${resultadoParcelaIntegral.toFixed(2).replace(".", ",")}`
    meiaParcela.innerHTML = `${resultadoMeiaParcela.toFixed(2).replace(".", ",")}`
    //meiaParcela.innerHTML = `${meiaSplit[0]},${meiaSplit[1].split("")[0] + meiaSplit[1].split("")[1]}`
}*/

function sucess() {
    let result = document.querySelector("section.result")
    let valorCredito = document.querySelector("input#valor").value
    let tipoConsorcio = document.querySelector("select#tipo-consorcio")
    let tipoConsulta = document.querySelector("select#tipo-consulta")

    result.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Crédito</th>
                    <th>1/2 Parcela</th>
                    <th>Prazo Reduzido</th>
                    <th>Parcela Integral</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="credito"></td>
                    <td id="meia-parcela"></td>
                    <td id="prazo"></td>
                    <td id="parcela-integral"></td>
                </tr>
            </tbody>
        </table>

        <div class="more-info">
            <h2>Isocred - TG</h2>
            <p>SC 478 - Centro - Timbó Grande/SC</p>
        </div>

        <iframe id="map-location" src="https://www.google.com/maps/embed?pb=!4v1726500481396!6m8!1m7!1sonb5LXT43PCo_eWPpIHEzw!2m2!1d-26.61669599133243!2d-50.67243243060593!3f23.168675536506022!4f-7.958388462885765!5f0.43604482460884963" title="localização do google maps" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
            <p>Caso você queira simular novamente, <a href="">clique aqui!</a></p>
        </div>
    `

    inputs.innerHTML = ""
    inputs.style.width = "0"
    inputs.style.height = "0"
    inputs.style.visibility = "hidden"
    err.innerHTML = ""
    err.style.visibility = "hidden"
    h1.innerText = "Resultado"

    let credito = document.querySelector("td#credito")
    let meiaParcela = document.querySelector("td#meia-parcela")
    let prazoReduzido = document.querySelector("td#prazo")
    let parcelaIntegral = document.querySelector("td#parcela-integral")

    let term
    let percent

    let conversao = valorCredito.replace(/[^\d,]/g, "") // Remove caracteres não numéricos (mantém apenas números e vírgula)
    conversao = conversao.replace(",", ".") // Substitui a vírgula por ponto (para tratar o número como decimal)
    let valorNumerico = parseFloat(conversao) // Converte para número float (A função Number() não seria útil neste caso, pois ele não converte valores decimais mantendo o ".", "100.00" por exemplo se tornaria 100)

    if (tipoConsorcio.value === "veiculo") {
        term = valueData.veiculo.term // valueData está localizado em data.js
        percent = valueData.veiculo.percent
    } else {
        term = valueData.imovel.term
        percent = valueData.imovel.percent
    }

    if (tipoConsulta.value == "parcela") {
        let resultadoParcelaIntegral = valorNumerico
        let resultadoMeiaParcela = resultadoParcelaIntegral / 2

        credito.innerHTML = "<s>não sei oque vai aqui<s>"
        meiaParcela.innerHTML = `${resultadoMeiaParcela.toFixed(2).replace(".", ",")}`
        parcelaIntegral.innerHTML = `${resultadoParcelaIntegral.toFixed(2).replace(".", ",")}`
    } else {
        let resultadoCredito = valorNumerico * percent + valorNumerico
        let resultadoParcelaIntegral = resultadoCredito / term
        let resultadoMeiaParcela = resultadoParcelaIntegral / 2

        credito.innerHTML = valorCredito
        meiaParcela.innerHTML = `${resultadoMeiaParcela.toFixed(2).replace(".", ",")}`
        parcelaIntegral.innerHTML = `${resultadoParcelaIntegral.toFixed(2).replace(".", ",")}`
    }

    prazoReduzido.innerHTML = term

    console.log(conversao, valorNumerico, resultadoCredito, resultadoParcelaIntegral, resultadoMeiaParcela)
}


function onClick () {
    const campos = inputs.querySelectorAll("input")

    for (let input of campos) {
        if (input.value == "") {
            inputs.style.borderRadius = ".0rem 0rem .5rem .5rem"
            err.style.visibility = "visible"
            err.innerHTML = `
            <img src="img/erro-saida.png" alt="imagem de erro">
            <p>Falta o campo <strong>${input.getAttribute("name")}</strong>!</p>
            `

            return
        }
    }

    console.log("Passou!")

    sucess()
}

simulate.addEventListener("click", onClick)