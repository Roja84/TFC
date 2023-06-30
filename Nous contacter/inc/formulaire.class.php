<?php
/*
 * class de connexion à la BDD
 * permet l'accès à la BDD à partir des fonctions ou d'une classe
 */


class Formulaire {
	function verifDataMail($data){
		$data = strip_tags($data); // XSS

		$data = stripslashes($data); // quotes ' et "
		$data = addslashes($data);

		$data = str_replace("\'","'",$data);
		$data = str_replace('\"','"',$data);

		return $data;
	}
}
$Formulaire = new Formulaire();
