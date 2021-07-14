
console.log('Es una app con node');


var mysql = require ('mysql2');

var coneccion = mysql.createConnection({
    host: 'localhost',
/*    host: '	files.000webhost.com',*/
    user: 'root',
/*    user: '	pruebaprogramacionwebinicial',*/
    password: 'ClaTiEm*03',
    database: 'anahifotografia'
    });


    coneccion.connect(function(error){
        if (error) {
            console.log('Se produjo un error en la conexión ' + error.stack);
            return;
        }
        console.log('La conexión a bbdd esta ok');
    });

    coneccion.query("select * from niños",function(error,resultados){
        if (error) {
            console.log('Hubo un error en la conexión ' + error.stack);
            return;
        }

        resultados.forEach(resultado => {
            console.log(resultado);
        });
    });

    coneccion.end();
