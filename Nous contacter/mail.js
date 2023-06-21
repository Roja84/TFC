<!index_contact.html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Envoi d'un message par formulaire</title>
</head>

<body>
<?php$retour = mail('romain.jaume@gmail.com', 'Envoi depuis la page Contact', $_POST['Message'], 'From: Votre adresse email');
if ($retour)
	echo <p>'Votre message a bien été envoyé.'</p>;
?>
</body>
</html>