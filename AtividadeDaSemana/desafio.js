let RNA = []


class Conversor {
    constructor(filamento) {
        this.filamento = filamento
    }

    conversor(DNA) {
        let espaço = DNA.split("")

        for (let letra of espaço) {
            if (letra == "C") {
                letra = "G"
                RNA.push(letra)

            } else if (letra == "G") {
                letra = "C"
                RNA.push(letra)

            } else if (letra == "T") {
                letra = "A"
                RNA.push(letra)
            } else if (letra == "A") {
                letra = "U"
                RNA.push(letra)
            }
        }

        let segmento = RNA.join("")

        console.log('o resultado é:')
        console.table({segmento})
    }

}

const novo = new Conversor("ATGCCGAAATTTGCG")

novo.conversor(novo.filamento)

