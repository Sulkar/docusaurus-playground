<?php

session_start();
 
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$code = "";
$url = "";

$data = json_decode(file_get_contents('php://input'), true);
$code = $data["code"];

$sql = "SELECT url FROM codes WHERE code = :code";

if($stmt = $pdo->prepare($sql)){
	// Bind variables to the prepared statement as parameters
	$stmt->bindParam(":code", $code, PDO::PARAM_STR);
 
	// Attempt to execute the prepared statement
	if($stmt->execute()){
		if($stmt->rowCount() == 1){
			
			if($row = $stmt->fetch()){
				$url = $row["url"];
										
			}
		} else{
			$login_err = "Code wurde nicht gefunden.";
		}
	} else{
		echo "Oops! Something went wrong. Please try again later.";
	}

	// Close statement
	unset($stmt);
}
		
if($url != ""){
	echo $url;
}else{
	echo 0;
}
	

?>