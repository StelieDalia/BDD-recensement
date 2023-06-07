const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql')
var cors = require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recensement'
});

// Établissement de la connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données =', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});


app.get('/api/Registre_Employeur', (req, res)=>{
    
  connection.query('SELECT * FROM Registre_Employeur',(err,result)=>{
      if(err) res.status(500).send(err)
      
      res.status(200).json(result)
  })
})


connection.query('SELECT * FROM Registre_Employeur', (error, results) => {
  if (error) {
    console.error('Erreur lors de l\'exécution de la requête SQL pour la première étape :', error);
    return;
  }

  console.log('Résultats de la première étape :', results);
});

app.post('/ajout/Registre_Employeur', (req, res) => {

dateApplication= req.body.dateApplication,
emploi= req.body.emploi,
classification= req.body.classification,
salaire= req.body.salaire,
accessoires= req.body.accessoires,
nourriture= req.body.nourriture,
logement= req.body.logement,
indemnité= req.body.indemnité,
indemnitésDiverses= req.body.indemnitésDiverses,
allocation= req.body.allocation,
primes= req.body.primes,
cautionnement= req.body.cautionnement,
congés= req.body. congés,
durée= req.body.durée,
date= req.body.date,
allocationCongé= req.body.allocationCongé,
DateEntrée = req.body.DateEntrée,
fullName = req.body.fullName,
nationalité = req.body.nationalité,
sexe = req.body.sexe,
dateOfBirth = req.body.dateOfBirth,
filiation = req.body.filiation ,
situationFamille = req.body.situationFamille,
nombreEnfant = req.body.nombreEnfant,
numéroVisa = req.body.numéroVisa,
dateVisa = req.body.dateVisa,
dateCessation= req.body.dateCessation

connection.query('INSERT INTO Registre_Employeur VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[dateApplication,emploi,classification,salaire,accessoires,nourriture, logement,indemnité,indemnitésDiverses,allocation,primes,cautionnement,congés,durée,date,allocationCongé, DateEntrée,fullName,nationalité,sexe,dateOfBirth,filiation,situationFamille,nombreEnfant,numéroVisa,dateVisa,dateCessation],(err,result)=>{
  if(err)
  {
    console.log(err)
  }else{
    res.send('POSTED');
  }
  })
})



// Démarrage du serveur
app.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001');
});


