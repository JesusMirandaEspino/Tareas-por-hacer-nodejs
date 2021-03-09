require('colors');


const{ guardarDB, leerDB } = require('./helpers/guardarArchivo.js');

const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer.js');

const Tareas = require('./models/tareas.js');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

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

            case '5':
            const ids = await mostrarListadoCheckList( tareas.listadoArr );
            console.log( ids );

            tareas.toggleCompletadas( ids );


            break;

            case '6':
                
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada Correctamente');
                    }
                }

            break;

            default: break;
        }
        
        guardarDB( tareas.listadoArr );

        await pausa();

      //  if( opt !== '0' ){ await pausa(); }

    }while( opt !== '0' );

}


main();