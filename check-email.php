<?php

require_once 'includes/db.php';

$errors = array();

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = true;
	}
	
	if (empty($errors)) {
		$sql = $db->prepare('
			SELECT email
			FROM form_users
			WHERE email = :email
			LIMIT 1
		');
		$sql->bindValue(':email', $email, PDO::PARAM_STR);
		$sql->execute();
		
		$result = $sql->fetch();
		
		if (empty($result)) {
			echo 'available';
		} else {
			echo 'unavailable';
		}
	}
	
}











