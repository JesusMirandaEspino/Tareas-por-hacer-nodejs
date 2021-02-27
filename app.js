require('colors');

const { inquirerMenu } = require('./helpers/inquirer.js');
const  { mostrarMenu, pausa }  = require('./helpers/mensajes.js');


const main = async() => {

    console.log( 'hola mundo' );

    let opt = '';

    do{
        opt =  await  inquirerMenu();
        console.log( {opt} );

        if( opt !== '0' ){ await pausa(); }

        

    }while( opt !== '0' );

}


main();