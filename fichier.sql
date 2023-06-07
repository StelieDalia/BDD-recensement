CREATE DATABASE recensement;

CREATE TABLE `Registre_Employeur` (
  `id_Registre_Employeur` int PRIMARY KEY  NOT NULL AUTO_INCREMENT,
  `dateApplication` date(50) NOT NULL,
  `emploi` varchar(50) NOT NULL,
  `classification` varchar(20) NOT NULL,
  `salaire` int(20) NOT NULL,
  `accessoires` int(50) NOT NULL,
  `nourriture` int(50) NOT NULL,
  `logement` int(50) NOT NULL,
  `indemnité` int(50) NOT NULL,
  `indemnitésDiverses` int(50) NOT NULL,
  `allocation` int(50) NOT NULL,
  `primes` int(50) NOT NULL,
  `cautionnement` int(50) NOT NULL,
  `congés` int(50) NOT NULL,
  `durée` int(50) NOT NULL,
  `date` date(50) NOT NULL,
  `allocationCongé` int(50) NOT NULL,
  `DateEntrée` date(50) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `nationalité` varchar(50) NOT NULL,
  `sexe` varchar(50) NOT NULL,
  `dateOfBirth` date(50) NOT NULL,
  `filiation` varchar(50) NOT NULL,
  `situationFamille` varchar(50) NOT NULL,
  `nombreEnfant` int(50) NOT NULL,
  `numéroVisa` int(50) NOT NULL,
  `dateVisa` date(50) NOT NULL,
  `dateCessation` date(50) NOT NULL
) ENGINE=Innodb DEFAULT CHARSET=utf8;



