let mongodbClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
let database;

export criarDB = function(db){
    database = db;
    mongodbClient.connect(url+"/"+database, 
        { useUnifiedTopology: true },
        function(err, db) {
            if (err) throw err;
            console.log("Database Criada!");
            db.close();
        });    
}

export inserirDado = function(data){
    mongodbClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("custumers").insertOne(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res.insertedId);
                db.close();
            });
    });
}

let inserirDados = function(data){
    mongodbClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("custumers").insertMany(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                console.log(res.insertedIds);
                db.close();
            });
    });
}

let buscarUm = function (data){
    mongodbClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("custumers").findOne(data,function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                db.close();
            });
    }); 
}

let buscarTodos = function(data){
    mongodbClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("custumers").find(data).toArray(function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                db.close();
            });
    });
}

let buscarAlguns = function(data,projection){
    mongodbClient.connect(url,
        { useUnifiedTopology: true }, 
        function(err,db){
            if (err) throw err;
            let dbo = db.db(database);
            dbo.collection("custumers").find(data,projection).toArray(function(err,res){
                //res = Result Object
                if (err) throw err;
                console.log(res);
                db.close();
            });
    });
}

let dados = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
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