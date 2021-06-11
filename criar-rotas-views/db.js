const { CommandCursor } = require('mongodb');

let url = "mongodb://localhost:27017/";
let mongoClient = require('mongodb').MongoClient(url,{ useUnifiedTopology: true });

const database = "myDB";

/* Classe de manipulação dos dados
    Usando a notação Javascript ES6
*/

class Model{
    constructor(){
        this.client = mongoClient;
        this.database = database;
        this.client.connect();
    }
    insertDocuments(data){
        return this.client.db(this.database).collection('myCollection')
            .insertOne(data)
            .then(
                  (res) => {
                    console.log(`Inserted ${res.result.n} documents`);
                    return new Promise((resolve)=>{
                            resolve(res.ops);
                    });
                },
                (err) => console.error(`Something went wrong: ${err}`),
            );
    }
    updateDocuments(document,data){
        return this.client.db(this.database).collection('myCollection')
            .updateOne(document,{ $set: data} )
            .then(
                (res) => {
                    console.log(`Updated ${res.result.n} documents`);
                    return new Promise((resolve)=>{
                            resolve(res.result.ok);
                    });
                },
                (err) => console.error(`Something went wrong: ${err}`),
            )
    }
    listDocuments(data,projection){
        return this.client.db(this.database).collection('myCollection')
            .find(data,projection).toArray()
            .then((res,err)=>{
                return new Promise(
                    (resolve,reject)=>{
                        resolve(res);
                    }
                );
            });
            
    }
    deleteDocuments(id){
        return this.client.db(this.database).collection('myCollection')
            .delete(id)
            .then(
                  (res) => {
                    console.log(`Deleted ${res.result.n} documents`);
                    return new Promise((resolve)=>{
                            resolve(res.ops);
                    });
                },
                (err) => console.error(`Something went wrong: ${err}`),
            );
    }
    close(){
        this.client.close();
    }
}

let model = new Model;
model.insertDocuments({name:'Wellington Wagner f. Sarmento',email:'wwagner@virtual.ufc.br', address:'Rua Dom Jerônimo, 339, apto. 401', phone:'+5585988891975',age:45})
    .then(
        (res) => {
            console.log(res);
            model.close();
        },
        (err) => console.error
        );

model.updateDocuments({name:'Wellington Wagner f. Sarmento'},{name:'Patrícia de Sousa Paula',email:'patricia@virtual.ufc.br', address:'Rua Dom Jerônimo, 339, apto. 401', phone:'+5585988891975',age:45})
    .then(
        (res) => {
            console.log(res);
            model.close();
        },
        (err) => console.error
        );
model.listDocuments({name:/^W/},{projection: {_id:0,name:1,email:1}})
        .then(
            (res,err)=>{
                for (const result of res) {
                    console.log(result);
                }

                
            }
        );


// A palavra-chave exports colocada na frentre das funcões abaixo serve para 
// que esse arquivo possa funcionar como um módulo a ser chamado em outro arquivo
// Conforme: https://www.alura.com.br/artigos/utilizando-export-modules-no-node-js
// Outra forma de exportar funções como módulo é usando 
// o module.export = <minha função opu classe>. Como visto no arquivo routes.js


/*
exports.criarDB = function(database){
    mongoClient.connect(url+database,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) thow err;
            console.log("DB criado!");
        });
}

exports.inserirDado = function(data){
    mongoClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("users").insertOne(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res.insertedId);
                db.close();
            });
    });
}

exports.inserirDados = function(data){
    mongoClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("users").insertMany(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                console.log(res.insertedIds);
                db.close();
            });
    });
}

exports.buscarUm = function (data){
    mongoClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("users").findOne(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                db.close();
            });
    }); 
}

exports.buscarTodos = function(data){
    let result=[];
    mongoClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("users").find(data).toArray(function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                result = res;
                db.close();
            });
    });
    return result;
}

exports.buscarAlguns = function(data,projection){
    mongoClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("users").find(data,projection).toArray(function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                db.close();
            });
    });
}
*/

//criarDB("minhaDatabase");
//inserirDado({nome:'Wellington Wagner F. Sarmento', email:'wwagner@virtual.ufc.br'});
//inserirDados(dados);

//buscarUm({name: /^S/});
//buscarTodos({name: /^V/});

//buscarAlguns({name: 'Vicky'},{projection: {_id: 0, name: 1, address: 1}});
//buscarAlguns({},{projection: {_id: 0, name: 1, address:1}}); //Lista todos os objetos
//buscarAlguns({name: 'Vicky'},{projection: {_id: 0}});
//buscarAlguns({name: 'Vicky'},{projection: { name: 1, address: 0}});


//Tabela de erros
//https://github.com/mongodb/mongo/blob/35079a95ebc591dee47ecca5e0f22eb7a7381fd0/docs/errors.md

//