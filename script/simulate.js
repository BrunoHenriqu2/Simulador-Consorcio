let simulate = document.querySelector("button#simulate")

function onClick () {
    let h1 = document.querySelector("h1")

    let inputs = document.querySelector("section.inputs")
    let result = document.querySelector("section.result")

    let valor = document.querySelector("input#valor")
    let nome = document.querySelector("input#nome")
    let telefone = document.querySelector("input#telefone")
    let email = document.querySelector("input#email")
    let cidade = document.querySelector("input#cidade")

    let err = document.querySelector("div#error")

    const campos = [valor, nome, telefone, email, cidade]

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
                        <td>100,00</td>
                        <td>0,34</td>
                        <td>180</td>
                        <td>0,68</td>
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
}

simulate.addEventListener("click", onClick)