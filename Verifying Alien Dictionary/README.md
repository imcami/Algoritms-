# Verifying Alien Dictionary

## Recibimos dos entradas:

- La primera es "palabras" un arreglo de strings
- La segunda "orden_alfabeto" es un string
  
<p> Debes decirme con un true/false si "palabras" esta ordenado como un diccionario si dicho diccionario tuviera un orden alfabetico como el ingresado en "orden_alfabetico"
</p>


## Ejemplo:


```javascript

palabras = ["hello","leetcode"]
orden_alfabeto = "hlabcdefgijkmnopqrstuvwxyz"

# True

palabras = ["word","world","row"]

orden_alfabeto = "worldabcefghijkmnpqstuvxyz"

# False

palabras = ["apple","app"]

orden_alfabeto = "abcdefghijklmnopqrstuvwxyz"


```

## Solucion:

Para resolver este problema debemos crear un diccionario con el orden alfabetico ingresado, luego debemos recorrer el arreglo de palabras y comparar cada letra de cada palabra con la letra de la palabra siguiente, si la letra de la palabra siguiente es menor que la letra de la palabra anterior, entonces el arreglo no esta ordenado como un diccionario y retornamos false, si el ciclo termina sin retornar false, entonces el arreglo esta ordenado como un diccionario y retornamos true.

La funcion  charMap() mapea el orden alfabetico ingresado en el diccionario al caracter correspondiente en humanAlphabet. Esto permite una búsqueda más rápida de la posición de un carácter en el orden alfabético. Mejorando la eficiencia del código. 

Por último, la función alienDictionary itera a través de cada palabra en wordsArray, y para cada palabra encontrará la correspondencia de ese caracter en el alfabeto humano a través de cada caracter utilizando el diccionario alienígena, y finalmente construirá la traducción de la palabra. Los resultados se devuelven al final de la función por medio de un arreglo.