// Obtener parámetros del usaurio para calcular "Aproximación del punto medio"
function getInput() {
    var inferiorLimit = prompt("Límite Inicial Inferior")
    if(Number(inferiorLimit < 0)) {
        return "Límite Inicial Inferior no debe ser menor a 0"
    }
    var superiorLimit = prompt("Límite Inicial Superior")
    if(Number(superiorLimit) < Number(inferiorLimit)) {
        return "Límite Inicial Superior no debe ser menor a Límite Inicial Inferior"
    }
    var objective = prompt("Objetivo")
    if(Number(inferiorLimit) > Number(objective) || Number(objective) >  Number(superiorLimit)) {
        return "Objetivo debe ser menor a Límite Inicial Superior y mayor al Límite Inicial Inferior"
    }
    var error = prompt("Error")
    if(1 < Number(error) || Number(error < 0)) {
        return "Error debe ser menor o igual a 1 y mayor o igual a 0"
    }
    if (superiorLimit != null && inferiorLimit != null && objective != null && error != null) {
      const params = {
        limiteSuperior: superiorLimit,
        limiteInferior: inferiorLimit,
        valorObjetivo: objective,
        margenError: error
      }
      calculate(params)
      return params
    }
    return "Todos los parámetros son requeridos!"
}

// Calculando el punto medio
function calculate(params) {
    let result = ( Number(params.limiteSuperior) + Number(params.limiteInferior) ) / 2
    let inferiorObjective = Number(params.valorObjetivo) - Number(params.margenError)
    let superiorObjective = Number(params.valorObjetivo) + Number(params.margenError)
    let objective = Number(params.valorObjetivo)
    let value1 = Number(params.limiteSuperior)
    let value2 = Number(params.limiteInferior)
    let counter = 1
 

    while((result > superiorObjective || result < inferiorObjective))  {       
            let differenceOpeSupe =  value1 - objective 
            let differenceOpeInfe =  objective - value2 
            if(differenceOpeSupe > differenceOpeInfe) {
                    value1 = result
            } else {
                value2 = result
            }
            result = ( value1 + value2 ) / 2
            counter += 1

            if(result==superiorObjective || result==inferiorObjective) {
                break
            } 
        }
            console.log("Resultado final: ",result)
            console.log("Total de iteraciones: ", counter)
   
}

const params = getInput()
console.log('Criterios de cálculo: ',params)


