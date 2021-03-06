require('colors');


const{ guardarDB, leerDB } = require('./helpers/guardarArchivo.js');

const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer.js');

const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    const tarea = new Tarea();

    if( tareasDB ){
        tareas.cargarTareasFromArray( tareasDB );
    }


    do{
        opt =  await  inquirerMenu();

        switch(opt.opcion){

            case '1': 
            const desc = await leerInput('Descripcion: ');
            console.log(desc);
            tareas.crearTarea(desc);
            break;

            case '2':
            tareas.listadoCompleto();
            break;

            case '3':
            tareas.listaTareasCompletadas(true);
            break;

            case '4':
            tareas.listaTareasCompletadas(false);
            break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log({id});

            break;

            default: break;
        }
        
        guardarDB( tareas.listadoArr );

        await pausa();

      //  if( opt !== '0' ){ await pausa(); }

    }while( opt !== '0' );

}


main();