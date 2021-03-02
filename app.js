require('colors');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js');


const main = async() => {

    console.log( 'hola mundo' );

    let opt = '';
    const tareas = new Tareas();
    const tarea = new Tarea();

    do{
        opt =  await  inquirerMenu();


       

        switch(opt.opcion){

            case '1': 
            const desc = await leerInput('Descripcion: ');
            console.log(desc);
            tareas.crearTarea(desc);
            break;

            case '2':
            console.log( tareas._listado );
            break;

            default: break;
        }

        
         await pausa();

      //  if( opt !== '0' ){ await pausa(); }

    }while( opt !== '0' );

}


main();