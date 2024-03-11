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
        if (this.edoCivil === "casado")
            return (this.solicitado * 0.10) + this.solicitado
        else
            return this.solicitado
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
        if (this.modelo === "nuevo")
            return 5000
        else
            if (this.modelo === "viejo")
                return 1000
            else
                if (this.modelo === "usado")
                    return 3000
    }
    montoFinal() {
        if (this.edoCivil === "casado")
            return (this.monto() * 0.10) + this.monto()
        else
            return this.monto()
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
          
            this.acumMontoFinal += p.montoFinal()
            this.acumIntereses += p.intereses()    
            
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

    let prestamo5 = new vehiculo(555, "soltero", "usado")
    let prestamo6 = new vehiculo(777, "casado", "viejo")
    let prestamo7 = new vehiculo(999, "casado", "nuevo")
    let prestamo8 = new vehiculo(444, "divorciado", "usado")

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

    salida.innerHTML += `1) Cedula: ${prestamo1.cedula} <br> Edo.Civil: ${prestamo1.edoCivil} <br> Solicitado: ${prestamo1.solicitado} <br> Monto Final: ${prestamo1.montoFinal()} <br> Intereses: ${prestamo1.intereses()} <br>`
    salida.innerHTML += `2) Cedula: ${prestamo2.cedula} <br> Edo.Civil: ${prestamo2.edoCivil} <br> Solicitado: ${prestamo2.solicitado} <br> Monto Final: ${prestamo2.montoFinal()} <br> Intereses: ${prestamo2.intereses()} <br>`
    salida.innerHTML += `3) Cedula: ${prestamo3.cedula} <br> Edo.Civil: ${prestamo3.edoCivil} <br> Solicitado: ${prestamo3.solicitado} <br> Monto Final: ${prestamo3.montoFinal()} <br> Intereses: ${prestamo3.intereses()} <br>`
    salida.innerHTML += `4) Cedula: ${prestamo4.cedula} <br> Edo.Civil: ${prestamo4.edoCivil} <br> Solicitado: ${prestamo4.solicitado} <br> Monto Final: ${prestamo4.montoFinal()} <br> Intereses: ${prestamo4.intereses()} <br>`
    salida.innerHTML += `5) Cedula: ${prestamo5.cedula} <br> Edo.Civil: ${prestamo5.edoCivil} <br> Modelo: ${prestamo5.modelo} <br> Monto: ${prestamo5.monto()} <br> Monto Final: ${prestamo5.montoFinal()} <br> Intereses: ${prestamo5.intereses()} <br>`
    salida.innerHTML += `6) Cedula: ${prestamo6.cedula} <br> Edo.Civil: ${prestamo6.edoCivil} <br> Modelo: ${prestamo6.modelo} <br> Monto: ${prestamo6.monto()} <br> Monto Final: ${prestamo6.montoFinal()} <br> Intereses: ${prestamo6.intereses()} <br>`
    salida.innerHTML += `7) Cedula: ${prestamo7.cedula} <br> Edo.Civil: ${prestamo7.edoCivil} <br> Modelo: ${prestamo7.modelo} <br> Monto: ${prestamo7.monto()} <br> Monto Final: ${prestamo7.montoFinal()} <br> Intereses: ${prestamo7.intereses()} <br>`
    salida.innerHTML += `8) Cedula: ${prestamo8.cedula} <br> Edo.Civil: ${prestamo8.edoCivil} <br> Modelo: ${prestamo8.modelo} <br> Monto: ${prestamo8.monto()} <br> Monto Final: ${prestamo8.montoFinal()} <br> Intereses: ${prestamo8.intereses()} <br>`

    salida.innerHTML += `<br> Monto total de prestamos: ${banco.acumMontoFinal}`
    salida.innerHTML += `<br> Monto intereses: ${banco.acumIntereses}`
    salida.innerHTML += `<br> Porcentaje de intereses: ${banco.porcIntereses()}`
}


main()