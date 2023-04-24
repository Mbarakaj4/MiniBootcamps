const WEACALC = document.getElementById('calcular')
const FLUJO = document.getElementById('flujos')
WEACALC.addEventListener('click', () => {
    const HB = hidratacionBasal(document.getElementById('peso').value)
    console.log(HB)
    FLUJO.style.display = 'block'
    FLUJO.innerHTML = HB
})



function hidratacionBasal (peso){
    //declaracion de variables
    let calculo
    let valor1
    let valor2
    let valor3
    let volumenHidratacionHolly
    let volumenMantenimiento
    let mm2
    let superficieCorporal
    let superficieCorporal1500
    let superficieCorporal2000
    //comparamos logicamente para ver que operacion realizar
    //si peso > 30, se usa superficie corporal
    //si no se usa holiday-segar
    if (peso > 30){
        //superficie corporal
        superficieCorporal = ((peso*4)+7)/(peso + 90)
        superficieCorporal1500 = superficieCorporal * 1500
        superficieCorporal2000 = superficieCorporal *2000
        return(`superficie corporal 1500: ${superficieCorporal1500} \n superficie corporal 2000: ${superficieCorporal2000}`)
    } else {
        //holiday segar
        if (peso >= 20 && peso <= 30) {
            calculo = peso - 20
            valor1 = calculo * 20
            valor2 = 10 * 50
            valor3 = 10 * 100
            volumenHidratacionHolly = valor1+valor2+valor3
            volumenMantenimiento = volumenHidratacionHolly/24
            mm2 = volumenMantenimiento*1.5
            return ( `Volumen diario: ${volumenHidratacionHolly}n\nvolumen mantenimiento: ${volumenMantenimiento}\n\nm+m2: ${mm2}` )
        }
        if (peso >= 10 && peso <= 20) {
            calculo = peso - 10
            valor1 = calculo * 50
            valor2 = 10 * 100
            volumenHidratacionHolly = valor1+valor2
            volumenMantenimiento = volumenHidratacionHolly/24
            mm2 = volumenMantenimiento*1.5
            return ( `Volumen diario: ${volumenHidratacionHolly}\n\nvolumen mantenimiento: ${volumenMantenimiento}\n\nm+m2: ${mm2}` )
        }
        if (peso >= 1 && peso <= 10) {
            volumenHidratacionHolly =  peso * 100
            volumenMantenimiento = volumenHidratacionHolly/24
            mm2 = volumenMantenimiento*1.5
            return ( `Volumen diario: ${volumenHidratacionHolly}\n\nvolumen mantenimiento: ${volumenMantenimiento}\n\nm+m2: ${mm2}` )
        }
    }
}