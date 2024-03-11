class prestamo {
    constructor(c, eC,) {
        this.cedula = c
        this.edoCivil = eC
    }
}

class vivienda extends prestamo {
    constructor(c, eC, s) {
        super(c, eC)
        this.solicitado = s
    }

    montoFinal() {
        if (this.edoCivil === "c")
            return this.solicitado + 0.10
        else
            return 0
    }
    intereses() {
        return this.montoFinal() * 0.10
    }
}
class vehiculo extends prestamo {
    constructor(c, eC, m) {
        super(c, eC)
        this.modelo = m

    }
    monto() {
        if (this.modelo === "n")
            return 5000
        else
            if (this.modelo === "v")
                return 3000
            else
                return 1000
    }
    montoFinal() {
        if (this.edoCivil === "c")
            return this.monto() + 0.10
    }
    intereses() {
        return this.montoFinal() * 0.20
    }
}

class Banco {
    constructor(aMF, aI, aT) {
        this.acumMontoFinal = aMF
        this.acumIntereses = aI
        this.acumTotal = aT
    }
    procesar(p) {
        if (p instanceof prestamo) {
            return this.acumTotal += p.montoFinal()
        }
    }
    porcIntereses() {
        return this.acumIntereses / this.acumMontoFinal * 100
    }
}

function main() {
    let salida = document.getElementById("salida")
    let prestamo1 = new vivienda(222, "casado", 1000)
    let prestamo2 = new vivienda(888, "soltero", 500)
    let prestamo3 = new vivienda(111, "casado", 2000)
    let prestamo4 = new vivienda(333, "divorciado", 3000)

    let prestamo5 = new vehiculo(555, "soltero", "usado", 3000)
    let prestamo6 = new vehiculo(777, "casado", "viejo", 1000)
    let prestamo7 = new vehiculo(999, "casado", "nuevo", 5000)
    let prestamo8 = new vehiculo(444, "divorciado", "usado", 3000)

    let banco = new Banco(0, 0, 0)

    banco.procesar(prestamo1)
    banco.procesar(prestamo2)
    banco.procesar(prestamo3)
    banco.procesar(prestamo4)
    banco.procesar(prestamo5)
    banco.procesar(prestamo6)
    banco.procesar(prestamo7)
    banco.procesar(prestamo8)

    salida.innerHTML = "Prestamo <br>"

    salida.innerHTML += `1) Cedula: ${prestamo1.cedula} Edo.Civil: ${prestamo1.edoCivil} Solicitado: ${prestamo1.solicitado} Monto Final: ${prestamo1.montoFinal()} Intereses: ${prestamo1.intereses()} <br>`
    salida.innerHTML += `2) Cedula: ${prestamo2.cedula} Edo.Civil: ${prestamo2.edoCivil} Solicitado: ${prestamo2.solicitado} Monto Final: ${prestamo2.montoFinal()} Intereses: ${prestamo2.intereses()} <br>`
    salida.innerHTML += `3) Cedula: ${prestamo3.cedula} Edo.Civil: ${prestamo3.edoCivil} Solicitado: ${prestamo3.solicitado} Monto Final: ${prestamo3.montoFinal()} Intereses: ${prestamo3.intereses()} <br>`
    salida.innerHTML += `4) Cedula: ${prestamo4.cedula} Edo.Civil: ${prestamo4.edoCivil} Solicitado: ${prestamo4.solicitado} Monto Final: ${prestamo4.montoFinal()} Intereses: ${prestamo4.intereses()} <br>`
    salida.innerHTML += `5) Cedula: ${prestamo5.cedula} Edo.Civil: ${prestamo5.edoCivil} Modelo: ${prestamo5.modelo} Monto: ${prestamo5.monto()} Monto Final: ${prestamo5.montoFinal()} Intereses: ${prestamo5.intereses()} <br>`
    salida.innerHTML += `6) Cedula: ${prestamo6.cedula} Edo.Civil: ${prestamo6.edoCivil} Modelo: ${prestamo6.modelo} Monto: ${prestamo6.monto()} Monto Final: ${prestamo6.montoFinal()} Intereses: ${prestamo6.intereses()} <br>`
    salida.innerHTML += `7) Cedula: ${prestamo7.cedula} Edo.Civil: ${prestamo7.edoCivil} Modelo: ${prestamo7.modelo} Monto: ${prestamo7.monto()} Monto Final: ${prestamo7.montoFinal()} Intereses: ${prestamo7.intereses()} <br>`
    salida.innerHTML += `8) Cedula: ${prestamo8.cedula} Edo.Civil: ${prestamo8.edoCivil} Modelo: ${prestamo8.modelo} Monto: ${prestamo8.monto()} Monto Final: ${prestamo8.montoFinal()} Intereses: ${prestamo8.intereses()} <br>`

    salida.innerHTML += `Monto total de prestamos:  ${banco.acumTotal}`
    salida.innerHTML += `Monto intereses: ${banco.acumIntereses}`
    salida.innerHTML += `Porcentaje de intereses: ${banco.porcIntereses()}`
}


main()