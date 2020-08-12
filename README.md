# aproximacion-punto-medio
Función que simula el método de Aproximación del punto medio programado en JavaScript.


Prueba de programación

Realizar una función que simule el método de Aproximación del punto medio:

Descripción

La aproximación del punto medio arranca en dos valores iniciales (límite superior e inferior), los cuales serán sumados y divididos entre 2. El valor resultante se comparará al valor OBJETIVO; dependiendo del resultado de la operación, se ajustará el valor anterior más próximo al valor OBJETIVO. 

Ejemplo
•Límite Superior: 100
•Límite Inferior: 20
•Objetivo: 52.5

Valor 1             Valor 2             Resultado

100                     20              (100+20)/2 = 60

60                      20              (60+20)/2 = 40

60                      40              (60+40)/2 = 50

60                      50              (60+50)/2 = 55

55                      50              (55+50)/2 = 52.5



Parámetros de la Función: 

•Límite Inicial Superior 
•Límite Inicial Inferior 
•Objetivo 
•Error 

Instrucciones
Realizar una aplicación de consola que le solicite al usuario capturar los 4 parámetros antes listados.Como resultado deberá Imprimir en pantalla el número de iteraciones que le llevo al sistema cumplir esa diferencia de error.

Ejemplo: 
•Objetivo: 52.5 
•Error: 0.05
•Valores Permitidos: 52.45 < Objetivo < 52.55 

Nota: NO SE PERMITE UN ERROR MAYOR AL INDICADO. Existe la posibilidad de llegar al valor objetivo exacto(como la tabla ejemplo que viene en la descripción); en ese momentodebeterminarla función y debe imprimirla cantidad de iteraciones que le llevo al sistema llegar alvalor.