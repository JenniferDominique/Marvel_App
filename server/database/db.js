  
// ao definir verbose (detalhado) poderemos rastrear a pilha de execução
const sqlite3 = require('sqlite3').verbose();


const bd = new sqlite3.Database(
    './bdprojeto.db', 
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, //open the database, if the database does not exist, create a new database
    function(error){
        if( error )
            console.log(error.message)
        else
            console.log('bdprojeto criado')
    }
);

//criar as tabelas
bd.run(
    'create table if not exists tbusuario(' +
    'idusuario text primary key,' +
    'nome text not null,'+
    'mail text null)',
    function(error){
        if( error )
            console.log(error.message)
        else
            console.log('tbusuario criada')
    }
);

bd.close(function(error){
    if( error )
        console.log(error.message)
    else
        console.log('bdprojeto fechado')
});