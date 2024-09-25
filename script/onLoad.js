function onLoad() {

    function clearLastKey(split, input) {
        let newSplit = split.slice(0, -1)
        let value = ""

        for (let index = 0; index < newSplit.length; index++) {
            const element = newSplit[index];
            value += element
        }

        input.value = value
    }

    function nome() {
        let nome = document.querySelector("input#nome")

        function processName() {
            let split = nome.value.split("")
            let lastKey = split[split.length - 1]

            if (Number(lastKey) || Number(lastKey) == 0) {
                clearLastKey(split, nome)
            }

        }

        nome.addEventListener("input", processName)
    }

    function telefone() {
        let telefone = document.querySelector("input#telefone")
        let lastKeyName

        function processValue() {
            let split = telefone.value.split("")
            let lastKey = split[split.length - 1]

            if (!Number(lastKey) && Number(lastKey) != 0 || lastKey == " " && lastKeyName != "Backspace") {
                clearLastKey(split, telefone)
                return
            }
            
            if (telefone.value.length == 2) {
                if (!telefone.value.includes("(") && !telefone.value.includes(")")) {
                    console.log("nao inclui paretes, vou colocar")
                    telefone.value = `(${telefone.value}) `
                }

            } else if (telefone.value.length == 9) {
                if (!telefone.value.includes("-") && lastKeyName != "Backspace") {
                    telefone.value += "-"
                }
                //telefone.value = `${split[0]} ${split[1]}-` // Já estava fazendo errado, um array em js começa em 0
            } else if (telefone.value.length >= 16) {
                clearLastKey(split, telefone)
            }
        }

        function onKeyDown(event) {
            lastKeyName = event.key
        }

        telefone.addEventListener("keydown", onKeyDown)
        telefone.addEventListener("input", processValue)
    }

    function valor() {
        /*let valor = document.querySelector("input#valor")
        let position = 0
        let lastKeyName

        function onKeyDown(event) {
            lastKeyName = event.key
        }

        function processValue() {
            let split = valor.value.split("")
            let lastKey = split[split.length - 1]

            if (!Number(lastKey) && lastKey != 0) {
                clearLastKey(split, valor)
                return
            }
            split[split.length - position - 2] = lastKey
            console.log(split)
            position++
            console.log(position)
            valor.value = ""

            for (let index = 0; index < split.length - 1; index++) {
                const element = split[index];

                valor.value += element
            }
        }

        valor.value = "0,00"
        valor.addEventListener("keydown", onKeyDown)
        valor.addEventListener("input", processValue)*/

        $('#valor').mask('000.000.000.000.000,00', {reverse: true});
    }

    function footerLinks() {
        /*let facebook = document.querySelector("input#face")
        let whatsapp = document.querySelector("input#zap")
        let instagram = document.querySelector("input#insta")*/
        
        let divMedia = document.querySelector("div.social-media")
        const inputs = divMedia.querySelectorAll("input")

        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];

            element.addEventListener("click", function() {
                goTo(socialData[element.getAttribute("Title")])
            })
        }
    }

    telefone()
    valor()
    nome()
    footerLinks()
}