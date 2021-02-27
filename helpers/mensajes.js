require('colors');


const mostrarMenu = () => {

    console.clear();
    console.log( '============================='.green );
    console.log( '    Seleccione una opcion    '.green );
    console.log( '=============================\n'.green );

    console.log( ` ${ '1'.green }. Crear Tarea` );
    console.log( ` ${ '2'.green }. Lista Tareas` );
    console.log( ` ${ '3'.green }. Lista Tareas Completadas` );
    console.log( ` ${ '4'.green }. Lista Tareas Pendientes` );
    console.log( ` ${ '5'.green }. Completar Tarea(s)` );
    console.log( ` ${ '6'.green }. Borrar Tarea` );
    console.log( ` ${ '0'.green }. Salir\n` );


    const readLine = require( 'readline' ).createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question( 'Seleccion una opcion: ', (opt) => {
        readLine.close();
    } );

}


    const pausa =  () => {

        const readLine =  require( 'readline' ).createInterface({
        input: process.stdin,
        output: process.stdout

        });

            readLine.question( `\nPresione: ${ 'ENTER'.green } Para continuar \n`, (opt) => {
            readLine.close();

        } );

    } 



module.exports = {

    mostrarMenu,
    pausa

}