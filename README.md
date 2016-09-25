# bookshelf.js
Lee tus listas de libros desde Goodreads

Usando la función `get` de jQuery y parseando el RSS de Goodreads, podemos obtener datos sobre cada lista de libros que tengamos.

### Métodos

| Método                   | Parámetros | ID por defecto     | Descripción                                           |
|--------------------------|------------|--------------------|-------------------------------------------------------|
| **getCurrentyReading()** | user_id    | #currently-reading | Devuelve los libros leyendo actualmente (limite de 5) |
| **getRead()**            | user_id    | #read              | Devuelve los libros leídos (límite de 5)              |
| **getToRead()**          | user_id    | #to-read           | Devuelve los libros pendietes de leer (límite de 5)   |

### Ejemplo

La clase `portada` está por defecto en bookshelf.js y define el estilo de las portadas de cada libro, siéntete libre de modificarla a tu gusto.

        <html>
            <head>
                <title>bookshelf.js</title>
                <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
                <script src="bookshelf.js"></script>
            </head>

            <body>
                <style>
                    .portada {
                        padding: 5px;
                        border: 1px solid black;
                        height: 18%;
                    }
                </style>

                <script>
                    var user_id = '52663760';

                    getToRead(user_id);
                    getCurrentyReading(user_id);
                    getToRead(user_id);
                </script>

                <div id="read"></div>
                <div id="currently-reading"></div>
                <div id="to-read"></div>
                <div id="user"></div>
            </body>
        </html>
        
 ### Licencia
 
 Ver [LICENSE](https://github.com/JuanjoSalvador/bookshelf.js/blob/master/LICENSE)
