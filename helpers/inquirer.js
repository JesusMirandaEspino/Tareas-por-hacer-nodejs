const inquirer = require('inquirer');
require('colors');

const preguntas = [ 
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea ser?',
        choices: [
            {
                value: '1',
                name: ` ${ '1'.green }. Crear Tarea`
            },
            {
                value: '2',
                name: ` ${ '2'.green }. Lista Tareas`
            },
                        {
                value: '3',
                name: ` ${ '3'.green }. Lista Tareas Completadas`
            },
            {
                value: '4',
                name: ` ${ '4'.green }. Lista Tareas Pendientes`
            },
            {
                value: '5',
                name: ` ${ '5'.green }. Completar Tarea(s)` 
            },
            {
                value: '6',
                name: ` ${ '6'.green }. Borrar Tarea` 
            },
            {
                value: '0',
                name: ` ${ '0'.green }. Salir\n` 
            }

        ]





    }
];


const inquirerMenu = async() => {

    console.clear();

    console.log( '============================='.green );
    console.log( '    Seleccione una opcion    '.green );
    console.log( '=============================\n'.green );

    const opt = await inquirer.prompt( preguntas );

    return opt;

};

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Por favor Ingresa un Valor';
                }
                return true;
            }

        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;


}

const pausa = async() => {

    const question = {
        type: 'input',
        name: 'enter',
        message: `\nPresione: ${ 'ENTER'.green } Para continuar \n`
    }

    await inquirer.prompt(question);
}


const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {
        const   idx  = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`

        }
    } );

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar',
    });

    const preguntas = {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }

    const { id } = await inquirer.prompt( preguntas );

    return id;

}


const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt( question  );
    return ok
}


module.exports = {
    inquirerMenu,
    leerInput,
    pausa,
    listadoTareasBorrar,
    confirmar
}







