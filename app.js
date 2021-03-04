require('colors');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');
const{ guardarDB, leerDB } = require('./helpers/guardarArchivo.js');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js');


const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    const tarea = new Tarea();

    if( tareasDB ){
        //
    }

    await pausa();

    do{
        opt =  await  inquirerMenu();

        switch(opt.opcion){

            case '1': 
            const desc = await leerInput('Descripcion: ');
            console.log(desc);
            tareas.crearTarea(desc);
            break;

            case '2':
            console.log( tareas.listadoArr );
            break;

            default: break;
        }

        
        guardarDB( tareas.listadoArr );

        await pausa();

      //  if( opt !== '0' ){ await pausa(); }

    }while( opt !== '0' );

}


main();